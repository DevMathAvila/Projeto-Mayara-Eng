'use client';

import { Analytics } from "@vercel/analytics/next"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { projects } from '@/data/projects';
import About from '@/components/sections/About'; 
import Reveal from '@/components/ui/Reveal';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const jornadas = [
    {
      step: "01",
      title: "Briefing & Viabilidade",
      desc: "Analisamos seus desejos e as normas da prefeitura para garantir que o projeto seja realizável e seguro."
    },
    {
      step: "02",
      title: "Criação & 3D",
      desc: "Onde o sonho ganha forma. Você visualiza a fachada e ambientes em imagens fotorrealistas antes da obra."
    },
    {
      step: "03",
      title: "Aprovação Técnica",
      desc: "Cuidamos de toda a burocracia e protocolos junto aos órgãos competentes para a emissão do alvará."
    },
    {
      step: "04",
      title: "Execução & Suporte",
      desc: "Entrega do projeto detalhado (o manual da obra) e suporte técnico para que tudo saia como planejado."
    }
  ];

  return (
    <main className="bg-[#F8F9FA] min-h-screen relative overflow-x-hidden w-full">
      <Navbar />
      <WhatsAppFloating /> 
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 md:pt-56 pb-20 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-arq-blue/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-arq-orange/10 blur-[80px] md:blur-[130px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#001F3F 1px, transparent 1px), linear-gradient(90deg, #001F3F 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-[115px] font-light tracking-tighter leading-[1] md:leading-[0.8]">
            <Reveal>
              <span className="bg-gradient-to-r from-arq-blue via-arq-blue/80 to-arq-blue/40 bg-clip-text text-transparent block mb-4 md:mb-6">
                Transformando
              </span>
            </Reveal>
            
            <Reveal delay={0.4}>
              <span className="italic font-serif text-arq-blue block">
                visões em 
                <span className="relative inline-block ml-2 md:ml-4">
                  <span className="relative z-10">realidade</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 md:-bottom-2 left-0 h-[2px] md:h-[4px] bg-arq-orange rounded-full shadow-[0_0_25px_rgba(211,84,0,0.5)]"
                  />
                </span>
                <span className="text-arq-orange font-sans not-italic ml-1 md:ml-2">.</span>
              </span>
            </Reveal>
          </h2>

          <Reveal delay={0.8}>
            <div className="mt-16 md:mt-28 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 md:w-20 bg-arq-orange"></div>
                <div className="h-2 w-2 rounded-full bg-arq-orange animate-ping"></div>
              </div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.7em] text-arq-blue/60 max-w-sm leading-relaxed font-bold">
                Arquitetura Contemporânea <br className="hidden md:block" />
                <span className="text-arq-orange">Engenharia de Precisão</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PROJETOS - LIMITADOS A 3 */}
      <section id="projetos" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <Reveal>
          <div className="flex items-center justify-between mb-16 md:mb-24">
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="h-[1px] w-12 md:w-16 bg-arq-orange"></div>
              <h2 className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-arq-blue uppercase">
                Portfólio em Destaque
              </h2>
            </div>
            <Link href="/projetos" className="hidden md:block text-[9px] uppercase tracking-[0.3em] text-arq-blue/40 hover:text-arq-orange transition-colors">
              Ver todos os projetos →
            </Link>
          </div>
        </Reveal>

        {/* Slice ajustado para 3 itens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {projects.slice(0, 3).map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="group transition-all duration-700 hover:-translate-y-4">
                 <ProjectCard project={item} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/projetos" className="bg-arq-blue/5 text-arq-blue px-8 py-4 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-arq-blue hover:text-white transition-all duration-500">
            Explorar Portfólio Completo
          </Link>
        </div>
      </section>

      {/* 2.5 JORNADA DO CLIENTE */}
      <section className="bg-arq-blue py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="mb-16 md:mb-24">
              <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.5em] mb-4">O Caminho do seu Projeto</h2>
              <p className="text-white/50 text-2xl md:text-4xl font-serif italic max-w-2xl">Transparência em cada etapa, da primeira conversa até a aprovação final.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jornadas.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-2xl">
                  <span className="block text-arq-orange text-4xl font-serif italic mb-6 group-hover:scale-110 transition-transform duration-500">{item.step}</span>
                  <h4 className="text-white group-hover:text-arq-blue font-bold uppercase text-[11px] tracking-widest mb-4">{item.title}</h4>
                  <p className="text-white/40 group-hover:text-arq-blue/70 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-arq-orange/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* 3. SOBRE */}
      <section id="sobre" className="bg-white py-20 md:py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <Reveal delay={0.2}>
            <About />
          </Reveal>
        </div>
      </section>

      {/* 4. CONTATO / FOOTER */}
      <footer id="contato" className="bg-arq-blue text-white py-20 md:py-32 px-6 overflow-hidden relative rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1000px] h-[500px] bg-white/5 blur-[80px] md:blur-[130px] rounded-full pointer-events-none" />

        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="mb-16 md:mb-20 text-center w-full">
              <h3 className="text-4xl md:text-7xl font-light mb-10 md:mb-16 italic tracking-tight font-serif leading-tight">
                Vamos projetar sua <br/><span className="text-arq-orange not-italic font-sans font-bold">próxima conquista?</span>
              </h3>
              
              <motion.a 
                href="https://wa.me/5519994092433" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-arq-blue px-10 md:px-20 py-5 md:py-7 rounded-full font-bold uppercase text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.5em] shadow-xl hover:bg-arq-orange hover:text-white transition-all duration-500"
              >
                Solicitar Orçamento
              </motion.a>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-12 md:mb-16"></div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-10">
              <div className="text-center md:text-left group">
                <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-white/30 mb-2 md:mb-3">Mayara Gaspareto</span>
                <a href="https://instagram.com/eng.mayaragaspareto" target="_blank" className="text-xl md:text-2xl font-serif italic hover:text-arq-orange transition-all duration-300">
                  @eng.mayaragaspareto
                </a>
              </div>
              
              <div className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/20 text-center md:text-right font-light leading-loose">
                Engenharia de Precisão <span className="mx-1 md:mx-2">•</span> Arquitetura Contemporânea <br/>
                <span suppressHydrationWarning={true}>
                  © {mounted ? new Date().getFullYear() : '2024'} Todos os direitos reservados
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}