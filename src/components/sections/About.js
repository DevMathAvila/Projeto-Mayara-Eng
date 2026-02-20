export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Lado da Imagem */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/mayara-perfil.jpg" 
                alt="Mayara Arquiteta" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Detalhe decorativo dourado */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lux-gold/20 -z-10 rounded-full blur-2xl"></div>
          </div>

          {/* Lado do Texto */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-lux-gold uppercase mb-4">
              Trajetória
            </h2>
            <h3 className="text-4xl font-serif text-gray-900 mb-6">
              Design que conta histórias e <br /> transforma realidades.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Com mais de X anos de experiência, Mayara iniciou sua carreira focada na fusão entre funcionalidade e estética minimalista. Cada projeto é uma tela em branco onde os planos futuros do cliente ganham forma.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa missão é criar espaços que não apenas abrigam, mas inspiram. O foco atual do escritório é a expansão para projetos sustentáveis e tecnologia Smart Home integrada.
            </p>
            
            {/* Números/Conquistas */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div>
                <span className="block text-2xl font-bold text-gray-900">50+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Projetos</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900">10+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Anos</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900">03</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Prêmios</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}