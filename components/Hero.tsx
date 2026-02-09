
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-navy pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-copper/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="absolute inset-0 section-pattern pointer-events-none"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-brand-copper"></span>
            <span className="text-brand-copper font-extrabold uppercase tracking-[0.4em] text-[10px]">Especialidade em Joinville</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] text-balance font-black">
            Cuidando da sua <br/> <span className="text-brand-copper italic font-light">Melhor Versão.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
            A Ícone Odontologia combina <span className="text-white">tecnologia de ponta</span> e <span className="text-white">20 anos de tradição</span> para oferecer tratamentos que transformam sorrisos e vidas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 copper-gradient text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-copper/20"
            >
              Agendar Avaliação
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-gray-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Paciente" />
                  </div>
                ))}
              </div>
              <div className="text-xs">
                <div className="flex text-brand-copper gap-0.5">
                   {[1,2,3,4,5].map(i => <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">+10k pacientes satisfeitos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="relative z-10 animate-float">
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200" 
                alt="Sorriso Perfeito" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Info Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl animate-float delay-700">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-lightCopper rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                 </div>
                 <div>
                   <div className="text-brand-navy font-black text-2xl">99%</div>
                   <div className="text-gray-500 text-[9px] font-extrabold uppercase tracking-widest">Sucesso em Implantes</div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-brand-copper/20 rounded-full -z-10 animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
