
import React from 'react';
import { PROFESSIONALS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-brand-copper font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Corpo Clínico</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-6 font-black italic">Equipe <span className="not-italic text-brand-copper">Especialista.</span></h2>
          <p className="text-gray-500 font-medium">Um time multidisciplinar focado em proporcionar o melhor resultado estético e funcional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PROFESSIONALS.map((prof, idx) => (
            <div key={idx} className="group p-8 bg-brand-cream rounded-[2rem] border-2 border-transparent hover:border-brand-copper/30 hover:bg-white transition-all duration-500 luxury-shadow flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-navy text-brand-copper rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <h4 className="text-xl font-serif font-black text-brand-navy leading-tight italic">{prof.name}</h4>
                {prof.cro && <span className="text-[10px] font-black text-brand-copper tracking-[0.2em] uppercase mt-1 block">{prof.cro}</span>}
              </div>
              
              <div className="flex-grow">
                <p className="text-xs font-black text-gray-800 uppercase tracking-widest mb-4">{prof.role}</p>
                <ul className="space-y-2">
                  {prof.specialties.map((spec, i) => (
                    <li key={i} className="text-[11px] text-gray-500 leading-relaxed flex items-start gap-2">
                      <span className="text-brand-copper mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-current"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                 <a href="#contact" className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-copper hover:underline">Ver currículo detalhado</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
