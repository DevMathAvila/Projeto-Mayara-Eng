'use client';

import { projects } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import Reveal from '@/components/ui/Reveal';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjetoPage() {
  const params = useParams();
  const id = params?.id;
  const project = projects.find((p) => p.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) notFound();

  const isRegularizacao = project.id === "6";

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  // Função para detectar o deslize do dedo (Swipe)
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) nextSlide();
    if (info.offset.x > 50) prevSlide();
  };

  return (
    <main className="bg-[#F2F2F2] relative flex flex-col w-full">
      <Navbar />
      <WhatsAppFloating />

      {/* LIGHTBOX MODAL COM SUPORTE A TOUCH/SWIPE */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 touch-none"
          >
            {/* Botão Fechar */}
            <button 
              className="absolute top-6 right-6 text-white/70 text-4xl z-[110] p-2"
              onClick={() => setIsLightboxOpen(false)}
            >
              ✕
            </button>
            
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="relative w-full h-full max-w-6xl max-h-[85vh] cursor-grab active:cursor-grabbing"
            >
              <Image
                src={project.gallery[currentIndex]}
                alt="Zoom"
                fill
                unoptimized
                className="object-contain pointer-events-none"
              />
            </motion.div>
            
            {/* Indicador de fotos no rodapé do modal */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[9px] uppercase tracking-[0.4em] text-center">
              {currentIndex + 1} / {project.gallery.length} <br/>
              <span className="text-[7px]">Arraste para o lado para navegar</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[700px] h-[700px] bg-arq-blue/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-arq-orange/5 blur-[100px] rounded-full" />
      </div>

      <div className="flex-grow w-full">
        {/* HEADER DO PROJETO */}
        <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
          <Reveal>
            <Link href="/#projetos" className="text-arq-orange text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-70 transition mb-12 block">
              ← Voltar aos Projetos
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <span className="inline-block bg-arq-orange/10 text-arq-orange px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[9px] mb-4">
                  {project.category} {project.details?.location && `• ${project.details.location}`}
                </span>
                <h1 className="text-5xl md:text-7xl font-light text-arq-blue tracking-tighter font-serif italic">
                  {project.title}
                </h1>
              </div>
              <div className="text-gray-600 border-l-4 border-arq-orange/40 pl-8">
                <p className="text-lg leading-relaxed italic font-serif">"{project.description}"</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ÁREA DA GALERIA */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <div className={`grid grid-cols-1 ${isRegularizacao ? 'max-w-5xl mx-auto' : 'md:grid-cols-12'} gap-12`}>

            {!isRegularizacao && (
              <aside className="md:col-span-3 space-y-8 h-fit md:sticky md:top-32">
                <div className="bg-white/90 backdrop-blur-md p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-white rounded-3xl">
                  <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-6 border-b pb-2">Especificações</h4>
                  <div className="space-y-6 text-arq-blue">
                    <div>
                      <span className="block text-[9px] uppercase text-gray-400 font-bold">Local</span>
                      <p className="text-sm font-medium">{project.details.location}</p>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase text-gray-400 font-bold">Área</span>
                      <p className="text-sm font-medium">{project.details.area}</p>
                    </div>
                  </div>
                  <a href="https://wa.me/5519991219662" target="_blank" className="mt-8 block text-center bg-arq-blue text-white py-4 text-[9px] font-bold uppercase tracking-widest hover:bg-arq-orange transition-all shadow-lg rounded-xl">
                    Solicitar Similar
                  </a>
                </div>
              </aside>
            )}

            <div className={`${isRegularizacao ? 'w-full' : 'md:col-span-9'} space-y-16`}>
              <div className="relative group">
                <div 
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-white cursor-zoom-in"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.gallery[currentIndex]}
                        alt={`${project.title}`}
                        fill
                        priority
                        unoptimized
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Setas de Navegação Desktop */}
                  <div className="absolute inset-0 hidden md:flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/90 text-arq-blue flex items-center justify-center shadow-xl hover:bg-arq-orange hover:text-white transition-all transform hover:scale-110">
                      ←
                    </button>
                    <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/90 text-arq-blue flex items-center justify-center shadow-xl hover:bg-arq-orange hover:text-white transition-all transform hover:scale-110">
                      →
                    </button>
                  </div>

                  <div className="absolute bottom-8 right-8 bg-arq-blue/80 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em]">
                    {currentIndex + 1} / {project.gallery.length}
                  </div>
                </div>
                
                {/* Miniaturas */}
                <div className="flex gap-4 mt-8 overflow-x-auto pb-4 no-scrollbar">
                  {project.gallery.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-500 ${currentIndex === idx ? 'ring-2 ring-arq-orange scale-105' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <Image src={img} alt="thumb" fill unoptimized className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-arq-blue text-white py-16 px-6 relative rounded-t-[3rem] z-20 w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
        <Reveal>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-light mb-6 italic font-serif leading-tight">
                  {isRegularizacao ? 'Deseja legalizar seu' : 'Vamos projetar o seu'} <br/>
                  <span className="text-arq-orange not-italic font-sans font-bold text-2xl md:text-3xl uppercase tracking-tighter">Imóvel agora?</span>
                </h3>
                <Link href="https://wa.me/5519991219662" target="_blank" className="inline-block bg-white text-arq-blue px-10 py-4 rounded-full font-bold uppercase text-[9px] tracking-[0.4em] hover:bg-arq-orange hover:text-white transition-all duration-500 shadow-md">
                  Falar com a Mayara
                </Link>
              </div>
              <div className="h-[1px] w-full md:w-[1px] md:h-32 bg-white/10"></div>
              <div className="flex flex-col items-center md:items-end gap-4 text-[8px] uppercase tracking-[0.5em] text-white/20">
                <div className="text-center md:text-right">
                  <span className="block text-white/30 mb-1 lowercase tracking-normal">@eng.mayaragaspareto</span>
                  <p>© {new Date().getFullYear()} Mayara Gaspareto</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}