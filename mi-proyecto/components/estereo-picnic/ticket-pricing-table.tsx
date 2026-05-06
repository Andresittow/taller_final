import React from 'react';

export function TicketPricingTable() {
  return (
    <section className="px-[1.25rem] py-[4rem] bg-[#121414]">
      <h3 className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] mb-[3rem] text-[#ffb1c3] uppercase text-center">
        Compra tus Entradas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem]">
        
        {/* Tier 1 */}
        <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] p-[1.5rem] rounded-[0.75rem] flex flex-col justify-between">
          <div>
            <h4 className="font-['Epilogue'] text-[24px] leading-[1.3] font-[700] mb-2 text-[#e2e2e2]">COMBO 3 DÍAS GENERAL</h4>
            <span className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] text-[#ffb1c3]">$850.000</span>
            <ul className="mt-[1.5rem] space-y-4 text-[#e2e2e2]">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#abd600] text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Acceso a todos los escenarios</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#abd600] text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Zona de experiencias de marcas</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#abd600] text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Acceso a puestos de comida</li>
            </ul>
          </div>
          <button className="w-full mt-[3rem] py-4 border-2 border-white/20 rounded-full font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] text-[#e2e2e2] uppercase hover:bg-white/10 transition-colors">
            Comprar
          </button>
        </div>

        {/* Tier 2 (Recommended) */}
        <div className="bg-[#abd600] p-[1.5rem] rounded-[0.75rem] flex flex-col justify-between transform md:scale-110 relative shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff4b89] text-[#3f0019] font-['Epilogue'] text-[10px] leading-[1] tracking-[0.1em] font-[700] px-3 py-1 rounded-full uppercase">Recomendado</div>
          <div>
            <h4 className="font-['Epilogue'] text-[24px] leading-[1.3] font-[700] mb-2 text-[#283500]">COMBO 3 DÍAS VIP</h4>
            <span className="font-['Epilogue'] text-[48px] leading-[1.1] tracking-[-0.04em] font-[800] text-[#283500]">$1.550.000</span>
            <ul className="mt-[1.5rem] space-y-4 text-[#283500]">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Entrada rápida al festival</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Zonas VIP con vista preferencial</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Baños premium y barras exclusivas</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Merchandising de regalo</li>
            </ul>
          </div>
          <button className="w-full mt-[3rem] py-4 bg-[#121414] text-[#e2e2e2] rounded-full font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] uppercase hover:scale-[1.02] transition-transform">
            Comprar
          </button>
        </div>

        {/* Tier 3 */}
        <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] p-[1.5rem] rounded-[0.75rem] flex flex-col justify-between">
          <div>
            <h4 className="font-['Epilogue'] text-[24px] leading-[1.3] font-[700] mb-2 text-[#e2e2e2]">COMBO 3 DÍAS COMFORT</h4>
            <span className="font-['Epilogue'] text-[32px] leading-[1.2] tracking-[-0.02em] font-[800] text-[#ffb1c3]">$1.150.000</span>
            <ul className="mt-[1.5rem] space-y-4 text-[#e2e2e2]">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#abd600] text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Filas de ingreso preferenciales</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#abd600] text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Zonas de descanso exclusivas</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#abd600] text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>check</span> Baños con aire acondicionado</li>
            </ul>
          </div>
          <button className="w-full mt-[3rem] py-4 border-2 border-white/20 rounded-full font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] text-[#e2e2e2] uppercase hover:bg-white/10 transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}
