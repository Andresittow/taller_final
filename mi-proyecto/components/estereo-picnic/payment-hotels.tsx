import React from 'react';
import Image from 'next/image';

export function PaymentHotels() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] px-[1.25rem] py-[4rem]">
      {/* Alcancias */}
      <div className="bg-[#ff4b89] rounded-[0.75rem] p-[1.5rem] flex flex-col md:flex-row items-center gap-6 overflow-hidden">
        <div className="flex-1">
          <h4 className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] text-[#590026] uppercase mb-4">Alcancías Armatuvaca</h4>
          <p className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#8f0041] mb-6">Paga tu entrada a cuotas sin intereses y asegura tu lugar en Un Mundo Distinto.</p>
          <button className="bg-white text-[#3f0019] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] px-6 py-3 rounded-full uppercase">Saber más</button>
        </div>
        <div className="w-48 h-48 bg-[#abd600] rounded-full flex items-center justify-center shrink-0 -mr-12 -mb-12">
          <span className="material-symbols-outlined text-[#283500] text-8xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>savings</span>
        </div>
      </div>
      
      {/* Crewfare Hotels */}
      <div className="relative rounded-[0.75rem] overflow-hidden group">
        <Image 
          src="/images/hotels.webp" 
          alt="Crewfare Hotels"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 p-[1.5rem] flex flex-col justify-end">
          <h4 className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] text-white uppercase mb-2">Crewfare Hotels</h4>
          <p className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-white/80 mb-6 max-w-xs">Encuentra los mejores hoteles con tarifas exclusivas para el festival.</p>
          <button className="w-fit bg-[#ffb68b] text-[#321200] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] px-6 py-3 rounded-full uppercase">Reservar ahora</button>
        </div>
      </div>
    </section>
  );
}
