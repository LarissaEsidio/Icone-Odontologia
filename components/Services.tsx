
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-copper font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Especialidades Clínicas</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-navy leading-tight font-black">Soluções <span className="italic">Completas</span> para <br/> o seu Sorriso.</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed">
            Temos o tratamento que você precisa para seu sorriso voltar a brilhar novamente, utilizando técnicas minimamente invasivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-brand-copper/20 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Card Number */}
              <div className="absolute -top-4 -right-4 text-9xl font-serif font-black text-brand-lightCopper opacity-40 -z-0 group-hover:text-brand-copper/10 transition-colors">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </div>

              <div className="w-14 h-14 bg-brand-navy text-brand-copper rounded-2xl flex items-center justify-center mb-10 group-hover:copper-gradient group-hover:text-white transition-all duration-500 relative z-10">
                {service.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-black text-brand-navy mb-4 italic group-hover:text-brand-copper transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm font-medium">{service.description}</p>
                
                {service.details && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.details.map((detail, dIdx) => (
                      <span key={dIdx} className="px-3 py-1 bg-brand-lightCopper text-brand-copper text-[9px] font-black uppercase tracking-widest rounded-full">
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-50 relative z-10">
                <a href="#contact" className="flex items-center justify-between w-full group/btn">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy group-hover/btn:text-brand-copper transition-colors">Solicitar Avaliação</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-brand-copper group-hover/btn:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
