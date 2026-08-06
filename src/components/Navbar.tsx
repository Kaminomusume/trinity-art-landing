import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="w-full bg-stone-950/90 backdrop-blur-md border-b border-stone-800 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center font-bold text-stone-950 shadow-lg">
          TA
        </div>
        <span className="text-xl font-bold tracking-tight text-stone-100">
          Trinity <span className="text-amber-500">Art</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-stone-300">
        <a href="#services" className="hover:text-amber-400 transition-colors">Servicios B2B</a>
        <a href="#quote" className="hover:text-amber-400 transition-colors">Cotizador</a>
        <Link href="https://imperio-academy.vercel.app" target="_blank" className="hover:text-amber-400 transition-colors flex items-center space-x-1">
          <span>Imperio Academy</span>
          <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full border border-amber-500/30">LMS</span>
        </Link>
        <Link href="https://trinity-cacao.myshopify.com" target="_blank" className="hover:text-amber-400 transition-colors flex items-center space-x-1">
          <span>Tienda Cacao</span>
          <span className="bg-stone-800 text-stone-300 text-xs px-2 py-0.5 rounded-full">Shopify</span>
        </Link>
      </div>

      <a href="#quote" className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-4 py-2 rounded-lg transition-colors text-sm shadow-md">
        Solicitar Cotización
      </a>
    </nav>
  );
};
