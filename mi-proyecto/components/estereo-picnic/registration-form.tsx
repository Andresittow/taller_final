'use client';

import React from 'react';

export function RegistrationForm() {
  return (
    <section className="mx-[1.25rem] my-[4rem] bg-[#ff7f1c] rounded-[1.5rem] p-[3rem] relative overflow-hidden">
      {/* Decorative pink cloud mapping */}
      <div className="absolute top-0 right-0 w-[16rem] h-[16rem] bg-[#ffb1c3] blur-[40px] opacity-[0.4] pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-2xl">
        <h3 className="font-['Epilogue'] text-[48px] leading-[1.1] tracking-[-0.04em] font-[800] text-[#602a00] uppercase mb-4">No te pierdas de nada</h3>
        <p className="font-['Epilogue'] text-[18px] leading-[1.6] font-[400] text-[#753400] mb-[1.5rem]">Suscríbete para recibir noticias exclusivas, anuncios de artistas y preventas.</p>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              className="bg-white/20 border-white/20 rounded-[0.75rem] px-4 py-3 placeholder:text-[#753400] text-[#602a00] focus:ring-[#602a00] focus:border-[#602a00]" 
              placeholder="Nombre completo" 
              type="text"
            />
            <input 
              className="bg-white/20 border-white/20 rounded-[0.75rem] px-4 py-3 placeholder:text-[#753400] text-[#602a00] focus:ring-[#602a00] focus:border-[#602a00]" 
              placeholder="Correo electrónico" 
              type="email"
            />
          </div>
          <div className="flex items-start gap-3 py-2">
            <input 
              className="mt-1 rounded border-white/20 text-[#602a00] focus:ring-[#602a00]" 
              id="consent" 
              type="checkbox"
            />
            <label className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#753400]" htmlFor="consent">
              Acepto los términos y condiciones y el tratamiento de mis datos personales.
            </label>
          </div>
          <button 
            className="bg-[#602a00] text-white font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] px-8 py-4 rounded-full uppercase hover:scale-105 transition-transform" 
            type="submit"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
}
