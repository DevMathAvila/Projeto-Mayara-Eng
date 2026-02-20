import Navbar from '@/components/layout/Navbar';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { projects } from '@/data/projects';
// 1. O IMPORT VAI AQUI:
import About from '@/components/sections/About'; 

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-none">
          Transformando <br /> 
          <span className="italic font-serif text-slate-400">visões em realidade.</span>
        </h2>
      </section>

      {/* 2. O COMPONENTE SOBRE VAI AQUI: */}
      <About />

      {/* Grid de Projetos */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-12">
          Projetos Selecionados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </section>

      {/* Seção de Contato */}
      <footer id="contato" className="bg-slate-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-8">Vamos construir algo incrível?</h3>
          <a href="https://wa.me/seunumeroaqui" className="inline-block border border-white px-12 py-4 hover:bg-white hover:text-black transition uppercase text-xs tracking-widest font-bold">
            Entrar em Contato
          </a>
        </div>
      </footer>
    </main>
  );
}