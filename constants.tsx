
import React from 'react';
import { Service, Testimonial, Professional, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'prevencao',
    title: 'Prevenção',
    description: 'Foco para evitar o aparecimento das doenças bucais. É esse o objetivo da Odontologia Preventiva.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    id: 'periodontia',
    title: 'Periodontia',
    description: 'Ciência que estuda e trata as doenças do sistema de implantação e suporte dos dentes.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  },
  {
    id: 'dentistica',
    title: 'Dentística',
    description: 'Ramo da odontologia que atua na área da cosmética e restauração dental.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>,
  },
  {
    id: 'cirurgia',
    title: 'Cirurgia Oral',
    description: 'Especialidade responsável pelo tratamento cirúrgico de problemas relacionados aos dentes, ossos, gengivas e bochechas.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" /></svg>,
  },
  {
    id: 'protese',
    title: 'Prótese Dentária',
    description: 'Recupera dentes perdidos ou danificados devolvendo a função natural dos dentes e estética.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.322a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 002.828 0l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.322-.644a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022l-1.16-1.16a2 2 0 00-2.828 0l-1.16 1.16a2 2 0 000 2.828l1.16 1.16z" /></svg>,
  },
  {
    id: 'ortodontia',
    title: 'Aparelho Ortodôntico',
    description: 'Prevenção e tratamento dos problemas de crescimento, desenvolvimento dos arcos dentários e da oclusão.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
  },
  {
    id: 'endodontia',
    title: 'Endodontia',
    description: 'Especialidade responsável pelo estudo da polpa dentária, de todo o sistema de canais radiculares e tecidos periapicais.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    id: 'implante',
    title: 'Implante',
    description: 'Ramo da Odontologia que se destina ao tratamento com reabilitações protéticas suportadas ou retidas por implantes dentários.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
  },
  {
    id: 'harmonizacao',
    title: 'Harmonização Facial',
    description: 'Alternativa para quem deseja fazer pequenas mudanças estéticas no rosto, equilibrando traços faciais.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    details: [
      'Amenização das linhas de expressão',
      'Retardo os sinais do envelhecimento',
      'Melhora a autoestima',
      'Procedimento minimamente invasivo',
      'Oferece mais harmonia e simetria',
    ]
  },
];

export const PROFESSIONALS: Professional[] = [
  { name: 'Dr. Rogério Leite Reis', cro: 'CRO 5417', role: 'Cirurgião Dentista', specialties: ['Graduado Unifenas (1997)', 'Especialista em Implantodontia e Cirurgia', 'Pós graduação em Prótese Dentária', 'Especialista em Ortodontia'] },
  { name: 'Dra. Flávia Schiavotelo', cro: 'CRO 5876', role: 'Cirurgiã Dentista', specialties: ['Graduada pela UFU - MG', 'Especialista em Periodontia pela PUC-PR', 'Especialista em Implantodontia pela Uniasselvi'] },
  { name: 'Dra. Simone Werner', cro: 'CRO 6152', role: 'Cirurgiã Dentista', specialties: ['Graduada pela PUC/PR', 'Especialista em Endodontia'] },
  { name: 'Dra. Gsuany dos Santos', cro: 'CRO 23164', role: 'Cirurgiã Dentista', specialties: ['Graduada pela Unifenas (1997)', 'Clínico Geral'] },
  { name: 'Dra. Manuella Beluzzo', cro: 'CRO 14702', role: 'Cirurgiã Dentista', specialties: ['Formada Univille em 2015', 'Especialista em Ortodontia desde 2018', 'Pós Graduada e Professora em Harmonização Orofacial', 'Speaker Multinacional Sinclair'] },
  { name: 'Dra. Mariana Almeida dos Santos Venzon', cro: 'CRO 21622', role: 'Cirurgiã Dentista', specialties: ['Formada pela Universidade Federal do Paraná (UFPR)', 'Clínico Geral'] },
  { name: 'Dra. Márcia Frezzatti', cro: 'CRO 14499', role: 'Cirurgiã Dentista', specialties: ['Formada Univille em 2012', 'Especialista em Ortodontia'] },
  { name: 'Dra. Francyelle Dayane Knop Souza', cro: 'CRO 12899', role: 'Cirurgiã Dentista', specialties: ['Graduada pela Univille - Ano 2012', 'Aperfeiçoamento em cirurgia Oral menor', 'Especialista em Ortodontia pelo Thum - Ano 2017'] },
  { name: 'Michelle B. Reis', role: 'Fisioterapeuta', specialties: ['Técnica em saúde bucal', 'Administrativo'] },
  { name: 'Nathalia Lentz', role: 'Recepcionista', specialties: ['Cursando Publicidade e Propaganda - Faculdade Ielusc'] },
  { name: 'Gabriela Alves Pereira', role: 'Auxiliar em saúde bucal', specialties: ['Administrativo', 'Cursando Odontologia - Faculdade Unisociesc'] },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'JOÃO CIDRAL',
    role: 'Paciente',
    content: 'Passando para agradecer pelo ótimo serviço que estão prestando ao nosso tratamento... Nota 10. Sem dúvidas indicamos esta clínica. Muito obrigado.',
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Entenda de uma vez por todas para que serve o aparelho expansor',
    excerpt: 'O estreitamento do palato é uma condição bastante comum que afeta cerca de 20% da população em geral.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Como ter um sorriso perfeito? Veja 7 dicas para arrasar!',
    excerpt: 'Não há maquiagem, botox ou qualquer outro tratamento facial que chame tanto a atenção como dentes bonitos.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
  },
];

export const CONTACT_INFO = {
  phone: '(47) 3466-0749',
  whatsapp: '(47) 99150-9137',
  address: 'Rua Monsenhor Gercino, 4477 - Itaum, Joinville - SC, 89230-290',
  email: 'contato@iconeodontologiajoinville.com.br',
  instagram: '@iconeodontologia',
  hours: 'Segunda a Sexta - 8h às 12h e 13h30 às 18h30',
};
