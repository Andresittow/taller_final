import React from 'react';
import Image from 'next/image';

export function Aftermovie() {
  return (
    <section className="w-full h-[614px] relative flex items-center justify-center bg-black overflow-hidden">
      <Image 
        src="/images/aftermovie.webp" 
        alt="Aftermovie Oficial" 
        fill
        className="object-cover opacity-60" 
      />
      <div className="relative z-10 text-center flex flex-col items-center">
        <button className="w-24 h-24 rounded-full bg-[#abd600] flex items-center justify-center mb-6 hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl text-[#283500]" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>play_arrow</span>
        </button>
        <h4 className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] text-white uppercase tracking-widest">Aftermovie Oficial 2023</h4>
      </div>
    </section>
  );
}
