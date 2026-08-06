'use client';

import React from 'react';
import { Palette, Camera, Sparkles, GraduationCap, ShoppingBag, FileText } from 'lucide-react';

interface NavbarProps {
  onScrollToForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToForm }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-stone-950/85 border-b border-amber-900/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-[2px] shadow-lg shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center text-amber-400">
                <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif font-bold text-xl text-amber-100 tracking-wide">TRINITY</span>
                <span className="font-sans font-light text-xl text-amber-400">ART</span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-amber-500/80 font-medium">
                Ecosistema Creativo & Digital 2026
              </p>
            </div>
          </div>

          {/* Ecosystem Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-300">
            <a href="#catalogo" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Catálogo Artesanal
            </a>
            <a href="#arte-fotografia" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Camera className="w-4 h-4 text-amber-500" />
              Arte & Fotos B2B
            </a>
            <a 
              href="http://localhost:3000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-amber-200/90"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              Imperio Academy (LMS)
            </a>
            <a 
              href="#cacao-store" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-yellow-400/90"
            >
              <ShoppingBag className="w-4 h-4 text-yellow-400" />
              Cacao Orgánico
            </a>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onScrollToForm}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Cotizar Proyecto
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
