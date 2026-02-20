'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { projects } from '@/data/projects';
import About from '@/components/sections/About'; 
import Reveal from '@/components/ui/Reveal';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';

export default function Home() {
  return (
    <main className="bg-off-white">
      <Navbar />
      <WhatsAppFloating /> 
      
      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <div className="relative">
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] md:leading-[0.85]">
            <Reveal>
              <span className="text-arq-orange/40 block mb-4">
                Transformando
              </span>
            </Reveal>
            
            <Reveal delay={0.4}>
              <span className="italic font-serif text-arq-blue block">
                visões em 
                <span className="relative inline-block ml-4">
                  realidade
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-0 h-[3px] bg-arq-orange/30 rounded-full"
                  />
                </span>
                .
              </span>
            </Reveal>
          </h2>

          <Reveal delay={0.8}>
            <div className="mt-16 flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-[1px] w-12 bg-arq-orange/60"></div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 max-w-sm leading-relaxed">
                Arquitetura Contemporânea & Engenharia de Precisão
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PORTFÓLIO */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100/50">
        <Reveal>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-[1px] w-12 bg-arq-orange"></div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-arq-blue uppercase">
              Projetos Selecionados
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <ProjectCard project={item} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. SOBRE */}
      <section id="sobre" className="bg-white/50 py-20">
        <Reveal delay={0.2}>
          <About />
        </Reveal>
      </section>

      {/* 4. CONTATO (Footer com Efeito Magnético) */}
      <footer id="contato" className="bg-arq-blue text-white py-24 px-6 mt-20 overflow-hidden relative">
        {/* Detalhe de luz sutil ao fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />

        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="mb-16 text-center">
              <h3 className="text-4xl md:text-6xl font-light mb-12 italic tracking-tight">
                Vamos construir algo incrível?
              </h3>
              
              {/* Botão Magnético */}
              <motion.a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseMove={(e) => {
                  const { clientX, clientY } = e;
                  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                  const x = (clientX - (left + width / 2)) * 0.25;
                  const y = (clientY - (top + height / 2)) * 0.25;
                  e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translate(0px, 0px)`;
                }}
                className="inline-block bg-arq-orange text-white px-16 py-6 rounded-sm font-bold uppercase text-[11px] tracking-[0.4em] shadow-2xl hover:brightness-110 transition-shadow duration-300"
              >
                Entrar em Contato
              </motion.a>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-12"></div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
              <div className="text-center md:text-left group cursor-pointer">
                <span className="block text-[10px] uppercase tracking-[0.4em] text-white/50 mb-2 transition-colors group-hover:text-arq-orange">Fique por dentro</span>
                <a 
                  href="https://instagram.com/mayaragaspareto_arq" 
                  target="_blank"
                  className="text-xl font-serif italic hover:text-arq-orange transition-all duration-300"
                >
                  @mayaragaspareto_arq
                </a>
              </div>
              
              <div className="text-[9px] uppercase tracking-[0.6em] text-white/20 hover:text-white/40 transition-colors">
                © 2026 Mayara Gaspareto • Design & Engenharia
              </div>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}