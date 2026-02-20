'use client';
import Navbar from '@/components/layout/Navbar';
import Reveal from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

export default function VistoriaPage() {
  return (
    <main className="bg-off-white min-h-screen">
      <Navbar />
      
      {/* HERO DA PÁGINA DE VISTORIA */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-arq-orange"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-arq-blue uppercase">Serviço Especializado</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-light text-arq-blue leading-tight mb-8">
                Vistoria Técnica <br />
                <span className="italic font-serif">& Laudos</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Garantimos a segurança do seu investimento em Indaiatuba e região. 
                Um olhar técnico detalhado para identificar o que olhos não treinados não veem.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Reveal delay={0.6}>
                <div className="border-l-2 border-arq-orange pl-6">
                  <h4 className="font-bold text-arq-blue uppercase text-xs tracking-widest mb-2">O que avaliamos</h4>
                  <p className="text-sm text-gray-500">Acabamentos, instalações elétricas/hidráulicas, nivelamento e conformidade com o memorial descritivo.</p>
                </div>
              </Reveal>
              <Reveal delay={0.7}>
                <div className="border-l-2 border-arq-orange pl-6">
                  <h4 className="font-bold text-arq-blue uppercase text-xs tracking-widest mb-2">O que entregamos</h4>
                  <p className="text-sm text-gray-500">Relatório fotográfico detalhado, lista de pendências para a construtora e emissão de ART.</p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.5}>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="/images/vistoria-detalhe.jpg" 
                  alt="Trabalho de Vistoria" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-xl hidden md:block">
                <span className="text-arq-orange font-bold text-5xl">100%</span>
                <p className="text-[10px] uppercase tracking-widest text-arq-blue font-bold">de Precisão Técnica</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ SIMPLIFICADO OU BOTÃO DE VOLTAR */}
      <section className="py-20 bg-arq-blue text-white text-center">
        <Reveal>
          <h2 className="text-3xl font-serif italic mb-10">Pronto para receber suas chaves com segurança?</h2>
          <a 
            href="https://wa.me/5519999999999" 
            className="bg-arq-orange px-12 py-5 uppercase text-xs font-bold tracking-[0.3em] hover:brightness-110 transition-all inline-block"
          >
            Solicitar Orçamento de Vistoria
          </a>
        </Reveal>
      </section>
    </main>
  );
}