import { NextResponse } from 'next/server';

export interface QuoteRequest {
  serviceType: 'fotografia_b2b' | 'arte_personalizado' | 'arreglos_cuadros';
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  quantityOrScale: string;
  details: string;
  estimatedBudget?: string;
}

export async function POST(request: Request) {
  try {
    const body: QuoteRequest = await request.json();

    if (!body.clientName || !body.clientEmail || !body.clientPhone) {
      return NextResponse.json(
        { success: false, error: 'Nombre, correo y teléfono son obligatorios.' },
        { status: 400 }
      );
    }

    // Sanitize input strings to prevent injection
    const sanitizedName = String(body.clientName).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedEmail = String(body.clientEmail).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedPhone = String(body.clientPhone).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedDetails = String(body.details || '').replace(/</g, "&lt;").replace(/>/g, "&gt;");

    let basePriceEstimate = 0;
    if (body.serviceType === 'fotografia_b2b') {
      basePriceEstimate = 50; // Package of professional AI product photos
    } else if (body.serviceType === 'arte_personalizado') {
      basePriceEstimate = 40; // Custom art canvas/design
    } else {
      basePriceEstimate = 35; // Special arrangement & frames
    }

    const leadId = `TA-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    const serviceLabels = {
      fotografia_b2b: 'Fotografía de Producto B2B',
      arte_personalizado: 'Arte & Cuadros Personalizados',
      arreglos_cuadros: 'Arreglos & Diseños Exclusivos'
    };

    const messageText = encodeURIComponent(
      `Hola Trinity Art! Deseo confirmar mi cotización #${leadId}.\n` +
      `Cliente: ${sanitizedName}\n` +
      `Servicio: ${serviceLabels[body.serviceType] || body.serviceType}\n` +
      `Detalles: ${sanitizedDetails || 'Sin especificaciones adicionales'}`
    );
    const whatsappUrl = `https://wa.me/50760000000?text=${messageText}`;

    return NextResponse.json({
      success: true,
      leadId,
      timestamp,
      message: 'Cotización procesada de forma segura en el backend de Trinity Art.',
      estimatedPrice: `$${basePriceEstimate} USD (Sujeto a especificaciones)`,
      whatsappUrl,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error procesando la cotización en el servidor.' },
      { status: 500 }
    );
  }
}
