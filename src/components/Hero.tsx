'use client';

import React from 'react';
import { Camera, Palette, GraduationCap, ShoppingBag, ArrowRight, Award } from 'lucide-react';

interface HeroProps {
  onScrollToForm?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <div className="relative overflow-hidden bg-stone-950 py-16 lg:py-24 border-b border-amber-900/30">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/40 border border-amber-800/50 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Award className="w-4 h-4 text-yellow-400" />
            Ecosistema Multicanal: Arte, Formación Académica & Productos Exclusivos
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-amber-50 leading-[1.15]">
            Soluciones de Alto Impacto:{' '}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Arte, Educación & E-commerce
            </span>
          </h1>
          <p className="mt-6 text-lg text-stone-300 font-sans leading-relaxed max-w-3xl mx-auto">
            Explora nuestras 3 divisiones principales: Fotografía comercial B2B & arte de autor, la plataforma educativa Imperio Academy (Cursos IA y Tesis Élite), y nuestra tienda de Cacao Orgánico.
          </p>
        </div>

        {/* 3 Core Ecosystem Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" id="arte-fotografia">
          
          {/* Card 1: Fotografía & Arte B2B */}
          <div className="rounded-3xl p-7 bg-stone-900/80 border border-amber-900/40 hover:border-amber-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                1. Arte & Fotografía B2B
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                Fotografía hiperrealista con IA para catálogos e-commerce, junto a la creación de obras de autor y arreglos personalizados.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-[11px] text-amber-400 font-bold">Servicios Creativos</span>
              <button 
                onClick={onScrollToForm}
                className="text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1"
              >
                Cotizar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Cursos IA & Tesis Élite */}
          <div className="rounded-3xl p-7 bg-stone-900/80 border border-amber-900/40 hover:border-amber-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                2. Cursos IA & Tesis Élite
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                Formación en IA aplicada, simulador de cursos online y asesoría académica avanzada para tesis e investigaciones universitarias.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-[11px] text-amber-400 font-bold">Imperio Academy</span>
              <a 
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1"
              >
                Ir a Portal <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Cacao Orgánico & Recetario */}
          <div id="cacao-store" className="rounded-3xl p-7 bg-stone-900/80 border border-amber-900/40 hover:border-amber-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-yellow-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                3. Cacao Puro & Recetario QR
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                Venta directa de cacao orgánico en polvo y acceso a nuestro recetario digital interactivo descargable mediante código QR.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-[11px] text-amber-400 font-bold">Tienda Shopify</span>
              <a 
                href="https://shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-yellow-400 hover:text-white flex items-center gap-1"
              >
                Comprar Cacao <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
