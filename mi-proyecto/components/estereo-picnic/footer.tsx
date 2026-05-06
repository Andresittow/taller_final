import React from 'react';

export function Footer() {
  return (
    <footer className="w-full py-[4rem] px-[1.25rem] grid grid-cols-1 md:grid-cols-3 gap-[3rem] bg-[#0c0f0f] rounded-t-[0.75rem]">
      <div className="space-y-4">
        <span className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] text-[#ffb1c3] uppercase">estéreo picnic</span>
        <p className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] max-w-xs leading-relaxed">
          El festival más grande de Colombia. Un espacio para la música, la libertad y la magia de estar juntos en un mismo lugar.
        </p>
        <div className="flex gap-4 pt-2">
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined text-sm text-[#e5bcc4]">share</span>
          </a>
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined text-sm text-[#e5bcc4]">podcasts</span>
          </a>
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined text-sm text-[#e5bcc4]">videocam</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h5 className="font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] text-[#ffb1c3] uppercase">Menú</h5>
          <ul className="space-y-2">
            <li><a className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] hover:text-[#ffb1c3] transition-colors duration-200" href="#">Lineup</a></li>
            <li><a className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] hover:text-[#ffb1c3] transition-colors duration-200" href="#">Tickets</a></li>
            <li><a className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] hover:text-[#ffb1c3] transition-colors duration-200" href="#">Experiencias</a></li>
            <li><a className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] hover:text-[#ffb1c3] transition-colors duration-200" href="#">Sponsors</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] text-[#ffb1c3] uppercase">Legal</h5>
          <ul className="space-y-2">
            <li><a className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] hover:text-[#ffb1c3] transition-colors duration-200" href="#">Privacidad</a></li>
            <li><a className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] hover:text-[#ffb1c3] transition-colors duration-200" href="#">Términos</a></li>
            <li><a className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#e5bcc4] hover:text-[#ffb1c3] transition-colors duration-200" href="#">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <h5 className="font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] text-[#ffb1c3] uppercase">Aliados</h5>
        <div className="grid grid-cols-3 gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="h-12 bg-white/10 rounded flex items-center justify-center"><span className="material-symbols-outlined text-[#e5bcc4]">token</span></div>
          <div className="h-12 bg-white/10 rounded flex items-center justify-center"><span className="material-symbols-outlined text-[#e5bcc4]">diamond</span></div>
          <div className="h-12 bg-white/10 rounded flex items-center justify-center"><span className="material-symbols-outlined text-[#e5bcc4]">stars</span></div>
        </div>
        <p className="font-['Epilogue'] text-[10px] leading-[1.5] font-[400] text-[#e5bcc4] mt-8">
          © 2024 Festival Estéreo Picnic. Un Mundo Distinto.
        </p>
      </div>
    </footer>
  );
}
