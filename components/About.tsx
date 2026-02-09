
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative group">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden h-64 luxury-shadow">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Consultório 1" />
                </div>
                <div className="rounded-3xl overflow-hidden h-80 luxury-shadow">
                  <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Consultório 2" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden h-80 luxury-shadow">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Consultório 3" />
                </div>
                <div className="rounded-3xl overflow-hidden h-64 luxury-shadow">
                  <img src="https://images.unsplash.com/photo-1600170311833-c2cf37807b9f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Consultório 4" />
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-copper rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-8 border-white group-hover:scale-110 transition-transform duration-500">
              <span className="text-4xl font-serif font-black italic">20+</span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">Anos de História</span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-10">
              <span className="text-brand-copper font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Bem-vindo à Experiência Ícone</span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-8 leading-[1.15] font-black italic">
                A Arte de Transformar <br/> <span className="text-brand-copper not-italic">Sorrisos Reais.</span>
              </h2>
              <div className="space-y-6 text-gray-500 leading-relaxed text-lg font-medium">
                <p>
                  Localizada em Joinville, a Ícone Odontologia é fruto de duas décadas de dedicação à excelência. Nosso centro especializado foi projetado para quem não abre mão de <span className="text-brand-navy font-bold">resultados superiores</span> e <span className="text-brand-navy font-bold">atendimento humanizado</span>.
                </p>
                <p>
                  Unimos diversas especialidades em um ambiente moderno e acolhedor, otimizando o seu tempo e garantindo uma jornada de tratamento confortável do início ao fim.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 py-10 border-y border-gray-100 mb-10">
               <div>
                  <div className="text-brand-navy font-serif text-3xl font-black mb-1">Joinville</div>
                  <div className="text-brand-copper font-black uppercase tracking-widest text-[9px]">Nossa Sede Própria</div>
               </div>
               <div>
                  <div className="text-brand-navy font-serif text-3xl font-black mb-1">Premium</div>
                  <div className="text-brand-copper font-black uppercase tracking-widest text-[9px]">Atendimento Exclusivo</div>
               </div>
            </div>

            <a href="#team" className="inline-flex items-center gap-4 text-brand-navy font-black uppercase tracking-widest text-xs hover:text-brand-copper transition-colors group">
              Conheça nossa equipe especialista
              <span className="w-12 h-12 bg-brand-lightCopper rounded-full flex items-center justify-center group-hover:bg-brand-copper group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
