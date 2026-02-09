
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-32 bg-brand-lightCopper/50 relative">
      <div className="absolute inset-0 section-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-copper font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Educação e Saúde</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-navy font-black italic">Acompanhe nosso <br/> <span className="not-italic text-brand-copper">Blog.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post, idx) => (
            <div key={idx} className="group bg-white rounded-[3rem] overflow-hidden luxury-shadow hover:scale-[1.02] transition-all duration-700 flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="md:w-3/5 p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-[9px] font-black text-brand-copper uppercase tracking-[0.3em] border border-brand-copper/20 px-3 py-1 rounded-full">Odontologia</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-brand-navy mb-4 leading-snug italic group-hover:text-brand-copper transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                   <button className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border-b-2 border-brand-copper/30 pb-1 group-hover:border-brand-copper transition-all">
                     Ler artigo completo
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
