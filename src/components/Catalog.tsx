'use client';

import React, { useState } from 'react';
import { Sparkles, MessageCircle, Tag, Award } from 'lucide-react';

interface CatalogItem {
  id: string;
  name: string;
  category: 'bisuteria' | 'cabello' | 'decoracion' | 'tradicional';
  price: string;
  description: string;
  badge?: string;
}

const PRODUCTS: CatalogItem[] = [
  {
    id: 'pulsera-tembleque',
    name: 'Pulsera Artesanal de Tembleque',
    category: 'bisuteria',
    price: '$15.00 USD',
    description: 'Elegante pulsera hecha a mano con flor de tembleque en cristales brillantes y tejido artesanal ajustable.',
    badge: 'Más Vendido'
  },
  {
    id: 'gancho-cabello-tembleque',
    name: 'Gancho de Cabello / Barrette Francés',
    category: 'cabello',
    price: '$20.00 USD',
    description: 'Gancho automático de metal de alta sujeción decorado con flores de tembleques multicolores hechas a mano.',
    badge: 'Exclusivo'
  },
  {
    id: 'reloj-lujo-cristal',
    name: 'Reloj de Pared de Lujo en Cristal',
    category: 'decoracion',
    price: '$45.00 USD',
    description: 'Pieza de arte utilitario. Reloj de pared embellecido con cuentas de cristal y detalles en bisutería fina.',
    badge: 'Edición Especial'
  },
  {
    id: 'cabeza-tembleques-completa',
    name: 'Juego de Tembleques Panameños (Cabeza Completa)',
    category: 'tradicional',
    price: 'Cotizar Solicitud',
    description: 'Juego tradicional de tembleques hechos a mano en perlas finas o escamas para traje típico o presentaciones.',
    badge: 'Alta Costura'
  }
];

export const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string, price: string) => {
    const text = encodeURIComponent(`¡Hola Trinity Art! Deseo consultar sobre el producto: *${productName}* (${price}). ¿Tienen disponibilidad?`);
    return `https://wa.me/50760000000?text=${text}`;
  };

  return (
    <section id="catalogo" className="py-20 bg-stone-900 border-t border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Catálogo Oficial de Piezas & Accesorios
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Colección Artesanal Trinity Art
          </h2>
          <p className="mt-3 text-sm text-stone-400 max-w-2xl mx-auto">
            Piezas únicas confeccionadas a mano con materiales de alta calidad, cristales finos y herencia artesanal panameña.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'todos', label: 'Todos los Productos' },
            { id: 'bisuteria', label: 'Pulseras ($15)' },
            { id: 'cabello', label: 'Ganchos & Hair Accessories ($20)' },
            { id: 'decoracion', label: 'Decoración & Relojes' },
            { id: 'tradicional', label: 'Tembleques Tradicionales' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === tab.id
                  ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                  : 'bg-stone-950 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold">
                    {product.badge || 'Artesanal'}
                  </span>
                  <div className="flex items-center gap-1 text-amber-300 font-bold text-base">
                    <Tag className="w-3.5 h-3.5 text-amber-500" />
                    <span>{product.price}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-amber-50 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center gap-1.5 text-[11px] text-stone-400 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                  <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Confección a mano bajo pedido</span>
                </div>

                <a
                  href={getWhatsAppLink(product.name, product.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
