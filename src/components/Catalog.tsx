'use client';

import React, { useState } from 'react';
import { Sparkles, MessageCircle, Tag, Award, Heart, Layers } from 'lucide-react';

interface CatalogItem {
  id: string;
  name: string;
  category: 'cabello' | 'bisuteria' | 'tradicional' | 'decoracion';
  price: string;
  description: string;
  badge?: string;
  features: string[];
}

const PRODUCTS: CatalogItem[] = [
  // --- ACCESORIOS DE CABELLO ($20 USD) ---
  {
    id: 'gancho-frances-automatico',
    name: 'Gancho Francés Automático de Tembleque',
    category: 'cabello',
    price: '$20.00 USD',
    description: 'Sujeción metálica automática de gran resistencia decorada con flores de tembleques multicolores confeccionadas a mano.',
    badge: 'Modelo Favorito',
    features: ['Metal francés de alta calidad', 'Flores teñidas artesanalmente', 'Resistente a peinados pesados']
  },
  {
    id: 'barrette-frances-tembleque',
    name: 'Barrette Francés en Tembleque de Cristal',
    category: 'cabello',
    price: '$20.00 USD',
    description: 'Accesorios para cabello estilizado con incrustación de cristales finos y perlas. Ideal para eventos de folclor o gala.',
    badge: 'Alta Costura',
    features: ['Perlas y cristales de brillo intenso', 'Acabado en tela protectora', 'Diseño exclusivo Trinity Art']
  },
  {
    id: 'vincha-diadema-tembleque',
    name: 'Vincha / Diadema Artesanal de Tembleques',
    category: 'cabello',
    price: '$25.00 USD',
    description: 'Vincha flexible de textura suave adornada con ramillete de tembleques en tonos brillantes o folclóricos tradicionales.',
    badge: 'Nuevo Modelo',
    features: ['Ajuste cómodo sin presión', 'Ideal para niñas y adultas', 'Flores moldeables a mano']
  },
  {
    id: 'peineta-tembleque-tradicional',
    name: 'Peineta de Tembleques Panameños',
    category: 'cabello',
    price: '$20.00 USD',
    description: 'Peineta artesanal diseñada para insertarse fácilmente en moños, recogidos o peinados de gala y folclor.',
    badge: 'Tradición',
    features: ['Dientes reforzados', 'Ramillete en perlas/cristales', 'Ideal para trajes típicos']
  },

  // --- BISUTERÍA ARTESANAL ($15 USD) ---
  {
    id: 'pulsera-tembleque-cristal',
    name: 'Pulsera Tejida de Tembleque',
    category: 'bisuteria',
    price: '$15.00 USD',
    description: 'Pulsera de hilo tejido a mano con dije de flor de tembleque central en perlas y cristales de colores vivos.',
    badge: 'Más Vendido',
    features: ['Tejido ajustable a cualquier muñeca', 'Flor resistente al agua', 'Colores personalizados']
  },
  {
    id: 'aretes-zarcillos-tembleque',
    name: 'Aretes / Zarcillos de Tembleque',
    category: 'bisuteria',
    price: '$15.00 USD',
    description: 'Aretes ligeros con caída artesanal en forma de flor de tembleque. Hipoalergénicos con anzuelo de plata/oro.',
    badge: 'Tendencia',
    features: ['Ultraligeros (no pesan)', 'Anzuelo hipoalergénico', 'Movimiento con brillo natural']
  },

  // --- TRADICIONAL & FOLCLOR ---
  {
    id: 'tapamonos-flores-individuales',
    name: 'Pareja de Tapamoños / Flores Individuales',
    category: 'tradicional',
    price: '$35.00 USD',
    description: 'Par de tembleques grandes diseñados para cubrir los moños traseros de la pollera o atuendo folclórico.',
    badge: 'Folclor Nacional',
    features: ['Confeccionados en alambre entorchado', 'Resplandor tradicional', 'Personalizable en color']
  },
  {
    id: 'cabeza-tembleques-completa',
    name: 'Juego Completo de Tembleques (Pollera / Congo / Guna)',
    category: 'tradicional',
    price: 'Cotizar Solicitud',
    description: 'Colección completa de 12 a 14 pares de tembleques tradicionales hechos a medida en escamas o perlas finas.',
    badge: 'Colección de Gala',
    features: ['Juego tradicional completo', 'Empaque de conservación de lujo', 'Asesoría de vestuario incluida']
  },

  // --- ARTE & DECORACIÓN ---
  {
    id: 'reloj-lujo-cristal-pared',
    name: 'Reloj de Pared de Lujo en Cristal & Bisutería',
    category: 'decoracion',
    price: 'Desde $45.00 USD',
    description: 'Reloj de pared artesanal embellecido con cristales, perlas finas y acabados en pan de oro o plata.',
    badge: 'Arte de Autor',
    features: ['Mecanismo silencioso de cuarzo', 'Incrustaciones únicas hechas a mano', 'Certificado de autenticidad']
  }
];

export const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string, price: string) => {
    const text = encodeURIComponent(`¡Hola Trinity Art! Me interesa el modelo: *${productName}* (${price}). ¿Me podrías dar más detalles o fotos de los colores disponibles?`);
    return `https://wa.me/50760000000?text=${text}`;
  };

  return (
    <section id="catalogo" className="py-20 bg-stone-900 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Slogan & Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Tradición · Creatividad · Innovación
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            Catálogo de Modelos & Bisutería Artesanal
          </h2>
          <p className="mt-3 text-sm text-stone-400 max-w-2xl mx-auto">
            Explora nuestros modelos exclusivos para el cabello, joyería tejida y piezas inspiradas en la cultura panameña (Pollera, Congo y Guna).
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'todos', label: 'Ver Todos los Modelos' },
            { id: 'cabello', label: '🌸 Ganchos & Cabello ($20 - $25)' },
            { id: 'bisuteria', label: '📿 Pulseras & Aretes ($15)' },
            { id: 'tradicional', label: '👑 Tembleques Tradicionales' },
            { id: 'decoracion', label: '🕰️ Relojes & Arte Décor' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === tab.id
                  ? 'bg-amber-500 text-stone-950 shadow-lg scale-105'
                  : 'bg-stone-950 text-stone-400 hover:text-white border border-stone-800 hover:border-stone-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-stone-950 border border-stone-800 rounded-3xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-xl hover:shadow-amber-500/5 relative overflow-hidden"
            >
              {/* Background Subtle Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />

              <div>
                {/* Header Badge & Price */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider">
                    {product.badge || 'Artesanal'}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 font-extrabold text-lg">
                    <Tag className="w-4 h-4 text-amber-500" />
                    <span>{product.price}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mt-4 space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-stone-300">
                      <Heart className="w-3 h-3 text-amber-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer & Action */}
              <div className="mt-6 pt-4 border-t border-stone-900 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-stone-400" /> Marca: Trinity Art
                  </span>
                  <span className="flex items-center gap-1 text-amber-500 font-medium">
                    <Award className="w-3.5 h-3.5" /> Confección 100% Manual
                  </span>
                </div>

                <a
                  href={getWhatsAppLink(product.name, product.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar / Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Slogan Footer Box */}
        <div className="mt-16 p-8 rounded-3xl bg-stone-950 border border-amber-900/30 text-center relative overflow-hidden">
          <h3 className="text-xl font-bold text-amber-300 font-serif">
            ¿Buscas un diseño único o un modelo para eventos folclóricos?
          </h3>
          <p className="mt-2 text-xs text-stone-400 max-w-xl mx-auto">
            Combinamos técnicas tradicionales panameñas con innovación contemporánea en bisutería y vestuario. Confeccionamos piezas personalizadas según tus colores y preferencias.
          </p>
          <a
            href="https://wa.me/50760000000?text=Hola%20Trinity%20Art,%20quisiera%20solicitar%20un%20dise%C3%B1o%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            Solicitar Diseño Personalizado
          </a>
        </div>

      </div>
    </section>
  );
};
