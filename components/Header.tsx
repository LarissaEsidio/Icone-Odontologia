
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'A Clínica', href: '#about' },
    { name: 'Profissionais', href: '#team' },
    { name: 'Tratamentos', href: '#services' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={`hidden lg:block bg-brand-navy text-white/70 py-2 border-b border-white/5 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0 h-0' : 'translate-y-0 opacity-100'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3 text-brand-copper" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Joinville - SC
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3 text-brand-copper" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              Seg - Sex: 8h às 18h30
            </span>
          </div>
          <div className="flex gap-6">
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-copper transition-colors">{CONTACT_INFO.phone}</a>
            <div className="flex gap-3">
              <a href="#" className="hover:text-brand-copper transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-copper transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-500 ${isScrolled ? 'glass-header shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-500 ${isScrolled ? 'bg-brand-navy border-brand-copper/30' : 'bg-white/10 border-white/20'}`}>
              <span className="text-brand-copper font-serif font-bold text-2xl group-hover:scale-110 transition-transform italic">Í</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl tracking-wider leading-none transition-colors duration-500 ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>ÍCONE</span>
              <span className="text-[10px] tracking-[0.3em] font-extrabold leading-none text-brand-copper">ODONTOLOGIA</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all hover:text-brand-copper relative group ${
                  isScrolled ? 'text-brand-navy' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-copper transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="copper-gradient text-white px-8 py-3 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] hover:shadow-xl hover:shadow-brand-copper/30 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Agendar Avaliação
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 bg-brand-navy z-[60] transition-all duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <span className="text-white font-serif font-bold text-2xl tracking-widest italic">ÍCONE</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-serif text-3xl hover:text-brand-copper transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center copper-gradient py-5 rounded-2xl text-white font-bold uppercase tracking-widest">
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
