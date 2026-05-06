import React from 'react';
import Link from 'next/link';

export function HeaderNavigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[1rem] py-4 max-w-full bg-[#121414]/10 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center gap-4">
        <span className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] uppercase text-[#ffb1c3]">estéreo picnic</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a className="text-[#abd600] border-b-2 border-[#abd600] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] transition-transform active:scale-95" href="#">Inicio</a>
        <a className="text-[#e5bcc4] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] hover:text-[#abd600] transition-colors duration-300" href="#">Lineup</a>
        <a className="text-[#e5bcc4] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] hover:text-[#abd600] transition-colors duration-300" href="#">Tickets</a>
        <a className="text-[#e5bcc4] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] hover:text-[#abd600] transition-colors duration-300" href="#">Mapa</a>
        <a className="text-[#e5bcc4] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] hover:text-[#abd600] transition-colors duration-300" href="#">Experiencias</a>
      </nav>

      <div className="flex items-center">
        <button className="bg-[#abd600] text-[#283500] font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] px-6 py-2 rounded-full hover:scale-105 transition-transform">
          Tickets
        </button>
      </div>
    </header>
  );
}
