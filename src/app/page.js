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
    <main className="bg-[#F8F9FA] min-h-screen relative">
      <Navbar />
      <WhatsAppFloating /> 
      
      {/* 1. HERO SECTION COM O "TCHAM" PROFISSIONAL */}
      <section className="relative pt-56 pb-32 px-6 overflow-hidden">
        
        {/* LUZES DE FUNDO (AQUELAS QUE DÃO O DIFERENCIAL) */}
        {/* Esfera Azul (Autoridade) */}
        <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-arq-blue/10 blur-[150px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Esfera Laranja (Criatividade/Tcham) */}
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-arq-orange/10 blur-[130px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

        {/* GRADE TÉCNICA (Sutil para remeter a projetos de engenharia) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#001F3F 1px, transparent 1px), linear-gradient(90deg, #001F3F 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-[115px] font-light tracking-tighter leading-[0.85] md:leading-[0.8]">
            <Reveal>
              {/* O "Transformando" agora usa um degradê elegante no Azul da paleta */}
              <span className="bg-gradient-to-r from-arq-blue via-arq-blue/80 to-transparent bg-clip-text text-transparent block mb-6">
                Transformando
              </span>
            </Reveal>
            
            <Reveal delay={0.4}>
              <span className="italic font-serif text-arq-blue block">
                visões em 
                <span className="relative inline-block ml-4">
                  <span className="relative z-10">realidade</span>
                  
                  {/* TRAÇO LARANJA COM GLOW (O ponto alto da sofisticação) */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-2 left-0 h-[4px] bg-arq-orange rounded-full shadow-[0_0_25px_rgba(211,84,0,0.5)]"
                  />
                </span>
                <span className="text-arq-orange font-sans not-italic ml-2">.</span>
              </span>
            </Reveal>
          </h2>

          <Reveal delay={0.8}>
            <div className="mt-28 flex flex-col md:flex-row md:items-center gap-10">
              {/* Indicador Técnico Laranja */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-20 bg-arq-orange"></div>
                <div className="h-2 w-2 rounded-full bg-arq-orange animate-ping"></div>
              </div>
              
              <p className="text-[11px] uppercase tracking-[0.7em] text-arq-blue/60 max-w-sm leading-relaxed font-bold">
                Arquitetura Contemporânea <br className="hidden md:block" />
                <span className="text-arq-orange">Engenharia de Precisão</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PROJETOS (GRID COM PROFUNDIDADE) */}
      <section id="projetos" className="max-w-7xl mx-auto px-6 py-32">
        <Reveal>
          <div className="flex items-center space-x-6 mb-24">
            <div className="h-[1px] w-16 bg-arq-orange"></div>
            <h2 className="text-xs font-bold tracking-[0.4em] text-arq-blue uppercase">
              Portfólio de Projetos
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="group transition-all duration-700 hover:-translate-y-4">
                 <ProjectCard project={item} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. SOBRE (LIMPO E PROFISSIONAL) */}
      <section id="sobre" className="bg-white py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.2}>
            <About />
          </Reveal>
        </div>
      </section>

      {/* 4. CONTATO (FINALIZANDO COM CHAVE DE OURO) */}
      <footer id="contato" className="bg-arq-blue text-white py-32 px-6 overflow-hidden relative rounded-t-[5rem]">
        {/* Glow de fundo no footer para não ser apenas uma cor chapada */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 blur-[130px] rounded-full pointer-events-none" />

        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="mb-20 text-center">
              <h3 className="text-5xl md:text-7xl font-light mb-16 italic tracking-tight font-serif">
                Vamos projetar sua <br/><span className="text-arq-orange not-italic font-sans font-bold">próxima conquista?</span>
              </h3>
              
              <motion.a 
                href="https://wa.me/5519991219662" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-arq-blue px-20 py-7 rounded-full font-bold uppercase text-[11px] tracking-[0.5em] shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:bg-arq-orange hover:text-white transition-all duration-500"
              >
                Solicitar Orçamento
              </motion.a>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-16"></div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
              <div className="text-center md:text-left group">
                <span className="block text-[10px] uppercase tracking-[0.5em] text-white/30 mb-3 group-hover:text-arq-orange transition-colors">Mayara Gaspareto</span>
                <a 
                  href="https://instagram.com/eng.mayaragaspareto" 
                  target="_blank"
                  className="text-2xl font-serif italic hover:text-arq-orange transition-all duration-300"
                >
                  @eng.mayaragaspareto
                </a>
              </div>
              
              <div className="text-[10px] uppercase tracking-[0.6em] text-white/20 text-center md:text-right font-light leading-loose">
                Engenharia de Precisão <span className="mx-2">•</span> Arquitetura Contemporânea <br/>
                © {new Date().getFullYear()} Todos os direitos reservados
              </div>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}