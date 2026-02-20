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

  if (!project) notFound();

  const isTechnical = project.serviceType === 'tecnico';

  return (
    <main className="bg-off-white min-h-screen">
      <Navbar />
      <WhatsAppFloating />
      
      {/* HEADER DINÂMICO */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
        <Reveal>
          <Link href="/#projetos" className="text-arq-orange text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-70 transition mb-12 block">
            ← Voltar aos Projetos
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block bg-arq-orange/10 text-arq-orange px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[9px] mb-4">
                {project.category} • {project.details.location}
              </span>
              <h1 className="text-5xl md:text-7xl font-light text-arq-blue">
                {project.title}
              </h1>
            </div>
            <div className="text-gray-600 border-l border-gray-200 pl-8">
              <p className="text-lg leading-relaxed italic font-serif">"{project.description}"</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GALERIA INTELIGENTE */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* FICHA TÉCNICA LATERAL (STICKY) */}
          <aside className="md:col-span-3 space-y-8 h-fit md:sticky md:top-32">
             <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-sm">
                <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-6 border-b pb-2">Especificações</h4>
                <div className="space-y-6">
                  <div>
                    <span className="block text-[9px] uppercase text-gray-400 font-bold">Local</span>
                    <p className="text-sm text-arq-blue font-medium">{project.details.location}</p>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase text-gray-400 font-bold">Área</span>
                    <p className="text-sm text-arq-blue font-medium">{project.details.area}</p>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase text-gray-400 font-bold">Status</span>
                    <p className="text-sm text-arq-blue font-medium">Concluído em {project.details.year}</p>
                  </div>
                </div>
                <a href="https://wa.me/5519999999999" className="mt-8 block text-center bg-arq-blue text-white py-4 text-[9px] font-bold uppercase tracking-widest hover:bg-arq-orange transition-colors">
                  Solicitar Similar
                </a>
             </div>
          </aside>

          {/* ÁREA DE IMAGENS */}
          <div className="md:col-span-9 space-y-12">
            {/* Imagem Principal */}
            <Reveal delay={0.2}>
              <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-sm shadow-xl">
                <Image src={project.image} alt={project.title} fill priority className="object-cover" />
              </div>
            </Reveal>

            {/* Galeria Secundária Dinâmica */}
            <div className={`grid gap-8 ${isTechnical ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {project.gallery.map((img, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className={`relative w-full rounded-sm overflow-hidden shadow-md group ${isTechnical ? 'h-[300px]' : 'h-[600px]'}`}>
                    <Image 
                      src={img} 
                      alt={`Detalhe ${index + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    {isTechnical && (
                      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-arq-blue">
                        Detalhamento Técnico
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER UNIFICADO (Importado do componente se houver, ou mantido aqui) */}
      <footer className="bg-arq-blue text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-serif italic mb-8">Interessado em um projeto em {project.details.location}?</h3>
          <Link href="/#contato" className="border border-white/30 px-10 py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-white hover:text-arq-blue transition-all">
            Falar com Mayara
          </Link>
        </div>
      </footer>
    </main>
  );
}