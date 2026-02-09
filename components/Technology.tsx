
import React from 'react';

const Technology: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Odontologia Digital</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Tecnologia que Transforma Resultados.</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Scanner Intraoral 3D</h4>
                  <p className="text-gray-400">Eliminamos as moldagens desconfortáveis com o escaneamento digital de alta precisão.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Planejamento Digital Guiado</h4>
                  <h4 className="text-white font-bold text-xl mb-2">Laserterapia e Microscopia</h4>
                  <p className="text-gray-400">Procedimentos minimamente invasivos com recuperação acelerada e máxima precisão.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
             <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                 alt="Tecnologia Dental" 
                 className="rounded-2xl h-64 w-full object-cover"
               />
               <img 
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                 alt="Equipamentos Modernos" 
                 className="rounded-2xl h-64 w-full object-cover mt-8"
               />
             </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 -ml-48"></div>
    </section>
  );
};

export default Technology;
