'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Camera, Palette, Sparkles, MessageCircle, AlertCircle, ShieldCheck } from 'lucide-react';

export const InteractiveQuoteForm: React.FC = () => {
  const [serviceType, setServiceType] = useState<'fotografia_b2b' | 'arte_personalizado' | 'arreglos_cuadros'>('fotografia_b2b');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [quantityOrScale, setQuantityOrScale] = useState('Paquete de 10 fotos comerciales (IA)');
  const [details, setDetails] = useState('');

  const [loading, setLoading] = useState(false);
  const [responseResult, setResponseResult] = useState<{
    success: boolean;
    leadId?: string;
    estimatedPrice?: string;
    whatsappUrl?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseResult(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType,
          clientName,
          clientEmail,
          clientPhone,
          quantityOrScale,
          details,
        }),
      });

      const data = await res.json();
      setResponseResult(data);
    } catch (err) {
      setResponseResult({
        success: false,
        error: 'Error de conexión con el servidor seguro de cotizaciones.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cotizador" className="py-20 bg-stone-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            Cotizador Automatizado & Servidor Backend Seguro
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-amber-50">
            Solicita tu Cotización de Arte o Fotografía
          </h2>
          <p className="mt-2 text-sm text-stone-400">
            Obtén un presupuesto estimado instantáneo para tus fotos de e-commerce u obras personalizadas.
          </p>
        </div>

        <div className="bg-stone-900 border border-amber-900/40 rounded-3xl p-8 shadow-2xl">
          
          {/* Service Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <button
              type="button"
              onClick={() => {
                setServiceType('fotografia_b2b');
                setQuantityOrScale('Paquete de 10 fotos comerciales (IA)');
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                serviceType === 'fotografia_b2b'
                  ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-lg'
                  : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:bg-stone-950'
              }`}
            >
              <Camera className="w-6 h-6 text-amber-400 mb-2" />
              <div>
                <div className="text-xs font-bold">Fotografía B2B (IA)</div>
                <div className="text-[10px] text-stone-400 mt-0.5">Fotos de e-commerce y catálogo</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setServiceType('arte_personalizado');
                setQuantityOrScale('Lienzo / Cuadro a medida');
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                serviceType === 'arte_personalizado'
                  ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-lg'
                  : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:bg-stone-950'
              }`}
            >
              <Palette className="w-6 h-6 text-amber-400 mb-2" />
              <div>
                <div className="text-xs font-bold">Arte Personalizado</div>
                <div className="text-[10px] text-stone-400 mt-0.5">Cuadros & obras de autor</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setServiceType('arreglos_cuadros');
                setQuantityOrScale('Arreglo exclusivo / Regalo corporativo');
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                serviceType === 'arreglos_cuadros'
                  ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-lg'
                  : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:bg-stone-950'
              }`}
            >
              <Sparkles className="w-6 h-6 text-amber-400 mb-2" />
              <div>
                <div className="text-xs font-bold">Arreglos & Decoración</div>
                <div className="text-[10px] text-stone-400 mt-0.5">Regalos y eventos especiales</div>
              </div>
            </button>
          </div>

          {!responseResult ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Tu Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej: Tienda E-Commerce / María Pérez"
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="ejemplo@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+507 6000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Escala o Paquete Deseado
                  </label>
                  <select
                    value={quantityOrScale}
                    onChange={(e) => setQuantityOrScale(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  >
                    {serviceType === 'fotografia_b2b' && (
                      <>
                        <option value="Prueba gratuita (3 fotos de muestra)">Prueba gratuita (3 fotos de muestra)</option>
                        <option value="Paquete de 10 fotos comerciales (IA)">Paquete de 10 fotos comerciales (IA)</option>
                        <option value="Catálogo completo (25+ fotos e-commerce)">Catálogo completo (25+ fotos e-commerce)</option>
                      </>
                    )}
                    {serviceType === 'arte_personalizado' && (
                      <>
                        <option value="Lienzo / Cuadro a medida">Lienzo / Cuadro a medida</option>
                        <option value="Colección corporativa (5-10 unidades)">Colección corporativa (5-10 unidades)</option>
                        <option value="Proyecto artístico para local u oficina">Proyecto artístico para local u oficina</option>
                      </>
                    )}
                    {serviceType === 'arreglos_cuadros' && (
                      <>
                        <option value="Arreglo exclusivo / Regalo corporativo">Arreglo exclusivo / Regalo corporativo</option>
                        <option value="Decoración temática de evento">Decoración temática de evento</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                  Especificaciones Adicionales / Mensaje
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Describe el estilo visual, colores preferidos o tipo de producto a fotografiar..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-stone-400 bg-stone-950/80 p-3 rounded-xl border border-stone-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Tus datos son procesados de forma privada en nuestro servidor seguro. No almacenamos tarjetas ni claves en el navegador.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 text-stone-950 font-bold text-sm shadow-xl shadow-amber-600/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Procesando en Servidor...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Cotización Segura
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              {responseResult.success ? (
                <div>
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="mt-4 text-2xl font-serif font-bold text-white">
                    ¡Cotización Registrada con Éxito!
                  </h3>
                  <p className="mt-1 text-xs text-amber-400 font-mono">
                    ID de Solicitud: #{responseResult.leadId}
                  </p>
                  <p className="mt-3 text-sm text-stone-300">
                    Estimado preliminar: <span className="font-bold text-amber-300">{responseResult.estimatedPrice}</span>
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {responseResult.whatsappUrl && (
                      <a
                        href={responseResult.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" /> Confirmar en WhatsApp
                      </a>
                    )}
                    <button
                      onClick={() => setResponseResult(null)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 text-stone-300 hover:text-white text-xs font-bold transition-colors"
                    >
                      Nueva Cotización
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 mx-auto flex items-center justify-center">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Error</h3>
                  <p className="mt-2 text-xs text-rose-300">{responseResult.error}</p>
                  <button
                    onClick={() => setResponseResult(null)}
                    className="mt-4 px-6 py-2 rounded-xl bg-stone-800 text-white text-xs font-bold"
                  >
                    Volver a Intentar
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
