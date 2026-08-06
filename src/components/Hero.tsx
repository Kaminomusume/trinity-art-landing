import React from 'react';

export const Hero = () => {
  return (
    <section className="relative py-20 px-6 max-w-6xl mx-auto text-center">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
        Estudio de Arte B2B & Fotografía de Producto
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-stone-100 tracking-tight leading-tight mb-6">
        Diseño Exclusivo, Enmarcado Artesanal & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
          Contenido Visual de Alto Impacto
        </span>
      </h1>
      <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-10">
        Impulsamos marcas y espacios comerciales con soluciones visuales de alta gama, fotografía publicitaria alimentada por IA y arte personalizado.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 text-left hover:border-amber-500/40 transition-all">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Art & Framing B2B</h3>
          <p className="text-sm text-stone-400">Cuadros personalizados y enmarcado artesanal para galerías, hoteles y oficinas.</p>
        </div>
        <a href="https://imperio-academy.vercel.app" target="_blank" className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 text-left hover:border-amber-500/40 transition-all group">
          <h3 className="text-xl font-bold text-amber-400 mb-2 group-hover:text-amber-300">Imperio Academy ↗</h3>
          <p className="text-sm text-stone-400">Cursos de formación en Inteligencia Artificial, Marketing Digital y Comercio E-commerce.</p>
        </a>
        <a href="https://trinity-cacao.myshopify.com" target="_blank" className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 text-left hover:border-amber-500/40 transition-all group">
          <h3 className="text-xl font-bold text-amber-400 mb-2 group-hover:text-amber-300">Cacao Orgánico Store ↗</h3>
          <p className="text-sm text-stone-400">Nuestra línea oficial de Cacao en Polvo y derivados orgánicos directos en Shopify.</p>
        </a>
      </div>
    </section>
  );
};
