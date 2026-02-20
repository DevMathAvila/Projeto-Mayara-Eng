export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Lado da Imagem */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="/images/mayara-perfil.jpg" 
                alt="Mayara Gaspareto - Arquiteta e Engenheira" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-arq-orange/5 -z-10 rounded-full blur-3xl"></div>
          </div>

          {/* Lado do Texto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-arq-orange uppercase mb-4">
                Arquitetura & Engenharia
              </h2>
              <h3 className="text-4xl md:text-5xl font-light text-arq-blue leading-tight">
                Design de alta performance para <br />
                <span className="italic font-serif">quem busca exclusividade.</span>
              </h3>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-base">
              <p>
                Com formação híbrida em Arquitetura e Engenharia Civil, Mayara Gaspareto une a sensibilidade do design à precisão técnica. Cada projeto é uma fusão de estética minimalista e soluções estruturais sólidas.
              </p>
              
              {/* BOX DE LOCALIZAÇÃO ESTRATÉGICA */}
              <div className="bg-gray-50 p-6 border-l-4 border-arq-orange italic text-sm text-arq-blue/80">
                "Sediada em <strong>Indaiatuba/SP</strong>, com disponibilidade de atendimento presencial na região (Campinas, Salto e Itu) e projetos remotos para todo o Brasil sob consulta."
              </div>

              <p>
                Nossa missão é criar espaços que não apenas abrigam, mas inspiram, equilibrando funcionalidade e sofisticação em cada detalhe.
              </p>
            </div>
            
            {/* Números/Conquistas */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div>
                <span className="block text-3xl font-light text-arq-blue">50+</span>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Projetos</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-arq-blue">07+</span>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Anos de Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-arq-blue">Indat</span>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Sede Regional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}