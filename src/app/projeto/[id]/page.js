import { projects } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

// Esta função gera as páginas para cada projeto baseado no ID
export default async function ProjetoPage({ params }) {
  // No Next.js 16, precisamos dar "await" nos params
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Projeto não encontrado.</h1>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Header do Projeto */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
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
      </section>

      {/* Imagem de Capa (Gigante) */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-2xl shadow-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* Ficha Técnica e Galeria */}
      <section className="px-6 max-w-7xl mx-auto py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Ficha Técnica Lateral */}
          <div className="md:col-span-1 space-y-10">
            <div>
              <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-3">Localização</h4>
              <p className="text-gray-500 font-medium">{project.details.location}</p>
            </div>
            <div>
              <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-3">Área Construída</h4>
              <p className="text-gray-500 font-medium">{project.details.area}</p>
            </div>
            <div>
              <h4 className="text-arq-blue font-bold uppercase text-[10px] tracking-[0.2em] mb-3">Ano do Projeto</h4>
              <p className="text-gray-500 font-medium">{project.details.year}</p>
            </div>
          </div>

          {/* Galeria de Fotos Extras */}
          <div className="md:col-span-3 grid grid-cols-1 gap-12">
            {project.gallery.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={img} 
                  alt={`Detalhe ${index + 1}`} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

{/* Seção de Contato (Igual à Home) */}
      <footer id="contato" className="bg-slate-900 text-white py-32 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-8">Gostou desse projeto? Vamos construir algo incrível?</h3>
          <a 
            href="https://wa.me/seunumeroaqui" 
            className="inline-block border border-white px-12 py-4 hover:bg-white hover:text-black transition uppercase text-xs tracking-widest font-bold"
          >
            Entrar em Contato
          </a>
        </div>
      </footer>
    </main>
  );
}