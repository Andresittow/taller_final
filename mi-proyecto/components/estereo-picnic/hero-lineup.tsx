import React from 'react';

export function HeroLineup() {
  return (
    <section className="min-h-screen px-[1.25rem] py-[3rem] pt-[8rem] relative">
      <div className="mb-[3rem] text-center">
        <h1 className="font-['Epilogue'] text-[48px] leading-[1.1] tracking-[-0.04em] font-[800] text-[#ffb1c3] uppercase italic mb-2">Un Mundo Distinto</h1>
        <p className="font-['Epilogue'] text-[18px] leading-[1.6] font-[400] text-[#e5bcc4]">21, 22 y 23 de Marzo, 2024 • Bogotá, Colombia</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem] min-h-[716px]">
        {/* Day 1: Pink */}
        <div className="bg-[#ff4b89] p-[1rem] rounded-[0.75rem] flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
          <div>
            <span className="font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] bg-white/20 px-2 py-1 rounded-[0.25rem] text-white">JUL 21</span>
            <h2 className="font-['Epilogue'] text-[48px] leading-[1.1] tracking-[-0.04em] font-[800] text-[#590026] mt-4 uppercase">Blink-182</h2>
          </div>
          <div className="mt-8">
            <p className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#8f0041] leading-relaxed">
              FEID • THE OFFSPRING • THIRTY SECONDS TO MARS • KING GIZZARD & THE LIZARD WIZARD • PHOENIX • GRETA VAN FLEET
            </p>
          </div>
        </div>

        {/* Day 2: Lime Green */}
        <div className="bg-[#7c9c00] p-[1rem] rounded-[0.75rem] flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
          <div>
            <span className="font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] bg-white/20 px-2 py-1 rounded-[0.25rem] text-[#222e00]">VIE 22</span>
            <h2 className="font-['Epilogue'] text-[48px] leading-[1.1] tracking-[-0.04em] font-[800] text-[#222e00] mt-4 uppercase">Arcade Fire</h2>
          </div>
          <div className="mt-8">
            <p className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#3c4d00] leading-relaxed">
              SZA • LIMP BIZKIT • HOZIER • PLACEBO • JAMES BLAKE • ARCA • FOUR TET • JUNGLE • THE BLAZE • OMAR APOLLO
            </p>
          </div>
        </div>

        {/* Day 3: Coral */}
        <div className="bg-[#ff7f1c] p-[1rem] rounded-[0.75rem] flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
          <div>
            <span className="font-['Epilogue'] text-[12px] leading-[1] tracking-[0.1em] font-[700] bg-white/20 px-2 py-1 rounded-[0.25rem] text-[#602a00]">SAB 23</span>
            <h2 className="font-['Epilogue'] text-[48px] leading-[1.1] tracking-[-0.04em] font-[800] text-[#602a00] mt-4 uppercase">Justice</h2>
          </div>
          <div className="mt-8">
            <p className="font-['Epilogue'] text-[14px] leading-[1.5] font-[400] text-[#753400] leading-relaxed">
              SAM SMITH • KEVIN KAARL • BLACK PUMAS • NICKI NICOLE • THE BLESSED MADONNA • WHOMADEWHO • TOKISCHA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
