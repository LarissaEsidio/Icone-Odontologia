
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-navy text-white pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Newsletter / CTA Box */}
        <div className="bg-white/5 rounded-[3rem] p-12 mb-24 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-black mb-4">Pronto para o seu <span className="text-brand-copper italic">novo sorriso?</span></h2>
              <p className="text-gray-400 font-medium">Agende hoje mesmo uma avaliação e comece sua transformação com quem entende.</p>
           </div>
           <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" className="px-12 py-5 bg-white text-brand-navy font-black rounded-2xl hover:bg-brand-copper hover:text-white transition-all duration-500 uppercase tracking-widest text-xs whitespace-nowrap">
              Falar com atendente
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-brand-copper rounded-2xl flex items-center justify-center">
                <span className="text-brand-navy font-serif font-black text-2xl italic">Í</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-2xl tracking-widest leading-none">ÍCONE</span>
                <span className="text-[11px] tracking-[0.4em] font-black text-brand-copper">ODONTOLOGIA</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10 max-w-xs">
              Excelência em odontologia há 20 anos. Nossa missão é oferecer resultados premium com atendimento humanizado.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-copper transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-brand-copper">Navegação</h4>
            <ul className="space-y-6 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">A Clínica</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Especialistas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tratamentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-brand-copper">Contatos</h4>
            <ul className="space-y-6 text-gray-400 text-sm font-medium">
              <li className="flex flex-col gap-1">
                <span className="text-white font-black text-[10px] uppercase tracking-widest">WhatsApp</span>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="hover:text-brand-copper transition-colors">{CONTACT_INFO.whatsapp}</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-black text-[10px] uppercase tracking-widest">Telefone Fixo</span>
                {CONTACT_INFO.phone}
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-black text-[10px] uppercase tracking-widest">Localização</span>
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-brand-copper">Atendimento</h4>
             <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-2 h-2 rounded-full bg-brand-copper animate-pulse"></div>
                   <span className="text-xs font-black uppercase tracking-widest">Estamos Abertos</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                   Segunda a Sexta-feira<br/>
                   08h às 12h — 13h30 às 18h30
                </p>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          <p>© {new Date().getFullYear()} ÍCONE ODONTOLOGIA. DESENVOLVIDO POR SALUDDIGITAL®.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Política</a>
            <span className="text-brand-copper">CRO-SC CL-1433</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
