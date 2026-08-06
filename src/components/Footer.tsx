'use client';

import React from 'react';
import { Palette, Camera, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-amber-900/30 py-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 p-[2px]">
              <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center text-amber-400">
                <Palette className="w-5 h-5" />
              </div>
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-amber-100">TRINITY </span>
              <span className="font-sans font-light text-lg text-amber-400">ART</span>
              <p className="text-[11px] text-stone-500">© 2026 Trinity Art Panama. Todos los derechos reservados.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-stone-300">
              <Camera className="w-4 h-4 text-amber-500" /> Fotografía de Producto B2B
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Palette className="w-4 h-4 text-amber-500" /> Arte & Cuadros Personalizados
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};
