import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, serviceType, description } = body;

    if (!name || !email || !serviceType) {
      return NextResponse.json(
        { error: 'Por favor complete todos los campos obligatorios.' },
        { status: 400 }
      );
    }

    const sanitizedName = String(name).replace(/[<>]/g, '').trim();
    const sanitizedEmail = String(email).replace(/[<>]/g, '').trim();
    const sanitizedDescription = String(description || '').replace(/[<>]/g, '').trim();
    
    const quoteId = `TA-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      quoteId,
      message: 'Cotización procesada exitosamente en el servidor.',
      data: {
        name: sanitizedName,
        email: sanitizedEmail,
        serviceType,
        description: sanitizedDescription
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno procesando la cotización.' },
      { status: 500 }
    );
  }
}
