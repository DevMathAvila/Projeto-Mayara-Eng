'use client';

import Navbar from '@/components/layout/Navbar';
import Reveal from '@/components/ui/Reveal';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';
import { ClipboardCheck, ShieldCheck, HardHat } from 'lucide-react';
import Link from 'next/link';

export default function VistoriaPage() {
  const diferenciais = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Laudo Detalhado",
      desc: "Relatório completo com fotos e descritivos técnicos de cada irregularidade encontrada."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Segurança Jurídica",
      desc: "Documentação robusta para entrega de chaves ou vistorias de vizinhança."
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Rigor Técnico",
      desc: "Análise feita por engenheira especializada, seguindo normas da ABNT."
    }
  ];

  return (
    <main className="relative bg-[#EAEAEA] min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <WhatsAppFloating />

      
      <div className="absolute inset-0 z-0 pointer-events-none">
      
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2F2F2] via-[#E5E7EB] to-[#D1D5DB] opacity-50" />
        
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-arq-blue/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[700px] h-[700px] bg-arq-orange/15 blur-[130px] rounded-full" />
        
        <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line x1="-10%" y1="10%" x2="110%" y2="90%" stroke="#001F3F" strokeWidth="2" strokeDasharray="10 20" />
          <line x1="110%" y1="20%" x2="-10%" y2="80%" stroke="#FF8C00" strokeWidth="1" />
        
          <circle cx="20%" cy="30%" r="150" stroke="#001F3F" strokeWidth="0.5" fill="none" opacity="0.2" />
          <circle cx="80%" cy="70%" r="200" stroke="#FF8C00" strokeWidth="0.5" fill="none" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 flex-grow">
        
        <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-arq-blue text-white px-4 py-2 rounded-full mb-8 shadow-xl">
               <span className="w-2 h-2 bg-arq-orange rounded-full animate-ping" />
               <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Serviço Especializado</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-light text-arq-blue tracking-tighter font-serif italic mb-8 drop-shadow-sm">
              Vistoria <span className="font-sans not-italic font-bold block md:inline">Técnica</span>
            </h1>
            <p className="text-arq-blue/70 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed font-serif italic border-l-2 border-arq-orange pl-6 py-2">
              "Garantindo a integridade e o valor do seu patrimônio através do olhar técnico."
            </p>
          </Reveal>
        </section>

        <section className="px-6 max-w-7xl mx-auto pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {diferenciais.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="group bg-white/40 backdrop-blur-2xl p-12 rounded-[3.5rem] border border-white/50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:bg-white/80 transition-all duration-700">
                  <div className="w-16 h-16 bg-arq-blue text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-arq-orange group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-arq-blue text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-arq-blue/60 text-base leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-6 max-w-5xl mx-auto pb-40">
          <Reveal>
            <div className="relative bg-gradient-to-br from-arq-blue to-[#00152b] rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-white/10">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-arq-orange opacity-20 blur-[80px] rounded-full" />
              
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight">
                   Pronto para um laudo <br/>
                   <span className="text-arq-orange italic font-serif font-light underline decoration-1 underline-offset-8">Inquestionável?</span>
                </h2>
                <Link 
                  href="https://wa.me/5519994092433" 
                  target="_blank"
                  className="bg-arq-orange text-white px-16 py-6 rounded-2xl font-bold uppercase text-sm tracking-[0.3em] hover:bg-white hover:text-arq-blue transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="bg-arq-blue text-white py-12 px-6 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
          <p>© {new Date().getFullYear()} Mayara Gaspareto</p>
          <p>Engenharia & Arquitetura</p>
        </div>
      </footer>
    </main>
  );
}