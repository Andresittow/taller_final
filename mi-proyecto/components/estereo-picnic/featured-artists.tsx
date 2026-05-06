import React from 'react';
import Image from 'next/image';

export function FeaturedArtists() {
  return (
    <section className="px-[1.25rem] py-[4rem] bg-[#1a1c1c]">
      <h3 className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] mb-[3rem] text-[#ffb1c3] uppercase text-center md:text-left">
        Artistas Destacados
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] h-auto md:h-[600px]">
        
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-[0.75rem] group">
          <Image 
            src="/images/headliners.webp"
            alt="Headliners"
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-end items-end p-6">
            <span className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] text-white uppercase italic">Headliners</span>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-[0.75rem] group">
          <Image 
            src="/images/neo-soul.webp"
            alt="Neo Soul Diva"
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-end items-end p-4">
            <span className="font-['Epilogue'] text-[18px] leading-[1.2] font-[700] text-white">Neo Soul Diva</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[0.75rem] group">
          <Image 
            src="/images/electro.webp"
            alt="Electro Shock"
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-end items-end p-4">
            <span className="font-['Epilogue'] text-[18px] leading-[1.2] font-[700] text-white">Electro Shock</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[0.75rem] group">
          <Image 
            src="/images/jazz.webp"
            alt="The Jazz Collective"
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-end items-end p-4">
            <span className="font-['Epilogue'] text-[18px] leading-[1.2] font-[700] text-white">The Jazz Collective</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[0.75rem] group">
          <Image 
            src="/images/urban.webp"
            alt="Urban Beats"
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-end items-end p-4">
            <span className="font-['Epilogue'] text-[18px] leading-[1.2] font-[700] text-white">Urban Beats</span>
          </div>
        </div>

      </div>
    </section>
  );
}
