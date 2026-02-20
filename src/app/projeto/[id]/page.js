import { projects } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Reveal from '@/components/ui/Reveal';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';

export default async function ProjetoPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-off-white min-h-screen">
      <Navbar />
      <WhatsAppFloating />
      
      {/* Header do Projeto com Reveal */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
        <Reveal>
          <Link 
            href="/#portfolio" 
            className="text-arq-orange text-sm font-bold uppercase tracking-widest hover:opacity-70 transition mb-12 block"
          >
            ← Voltar ao Portfólio
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div className="border-l-4 border-arq-orange pl-6">
              <span className="text-arq-orange font-bold uppercase tracking-widest text-xs">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-light text-arq-blue mt-4">
                {project.title}
              </h1>
            </div>
            <div className="text-gray-600 pb-2">
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Imagem de Capa com Reveal */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <Reveal delay={0.2}>
          <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              priority 
              className="object-cover" 
            />
          </div>
        </Reveal>
      </section>

      {/* Ficha Técnica e Galeria */}
      <section className="px-6 max-w-7xl mx-auto py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Ficha Técnica lateral */}
          <div className="md:col-span-1 space-y-10">
            <Reveal delay={0.3}>
              <div>
                <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-3">Localização</h4>
                <p className="text-gray-500 font-medium">{project.details.location}</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div>
                <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-3">Área Construída</h4>
                <p className="text-gray-500 font-medium">{project.details.area}</p>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div>
                <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-3">Ano do Projeto</h4>
                <p className="text-gray-500 font-medium">{project.details.year}</p>
              </div>
            </Reveal>
          </div>

          {/* Galeria de Fotos com Reveal em cascata */}
          <div className="md:col-span-3 grid grid-cols-1 gap-12">
            {project.gallery.map((img, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-md">
                  <Image 
                    src={img} 
                    alt={`Detalhe ${index + 1}`} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer com Reveal */}
      <footer id="contato" className="bg-arq-blue text-white py-24 px-6 mt-20">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="mb-16 text-center">
              <h3 className="text-3xl md:text-5xl font-light mb-8 italic tracking-tight">
                Vamos construir algo incrível?
              </h3>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                className="inline-block bg-arq-orange text-white px-12 py-5 rounded-sm font-bold uppercase text-[10px] tracking-[0.3em] hover:brightness-110 transition-all duration-300 shadow-xl"
              >
                Entrar em Contato
              </a>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-12"></div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
              <div className="text-center md:text-left">
                <span className="block text-[10px] uppercase tracking-[0.4em] text-white/50 mb-2">Fique por dentro</span>
                <a 
                  href="https://instagram.com/mayaragaspareto_arq" 
                  target="_blank"
                  className="text-lg font-serif italic hover:text-arq-orange transition-colors"
                >
                  @mayaragaspareto_arq
                </a>
              </div>

              <div className="text-[9px] uppercase tracking-[0.5em] text-white/30">
                © 2026 Mayara Gaspareto
              </div>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}