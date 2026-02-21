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

  const isRegularizacao = project.id === "6";
  const isTechnical = project.serviceType === 'tecnico';

  return (
    <main className="min-h-screen bg-[#F2F2F2] relative overflow-x-hidden flex flex-col">
      <Navbar />
      <WhatsAppFloating />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-10%] w-[700px] h-[700px] bg-arq-blue/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-arq-orange/5 blur-[100px] rounded-full" />
      </div>

      <div className="flex-grow">
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
              {isRegularizacao && (
                <Reveal>
                  <div className="relative bg-arq-blue p-12 md:p-20 shadow-[0_60px_100px_-20px_rgba(0,31,63,0.4)] rounded-[3rem] overflow-hidden mb-24 border border-white/5">
                    <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-arq-orange/15 blur-[100px] rounded-full" />
                    <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] mb-16 relative z-10">
                      Processo de <span className="font-bold text-arq-orange italic">Aprovação</span>
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3 relative z-10">
                      {project.steps?.map((step, idx) => (
                        <div key={idx} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                          <div className="text-arq-orange font-bold text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">
                            0{idx + 1}
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed font-light">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              <div className={`grid gap-12 ${isTechnical || isRegularizacao ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                {project.gallery.map((img, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    {/* Altura reduzida de h-[600px] para h-[500px] para imagens mais cleans */}
                    <div className={`relative w-full rounded-[2.5rem] overflow-hidden bg-white shadow-[0_50px_90px_-20px_rgba(0,0,0,0.35)] group transition-all duration-700 hover:-translate-y-4 ${isTechnical || isRegularizacao ? 'h-[450px]' : 'h-[500px] md:h-[550px]'}`}>
                      <Image
                        src={img}
                        alt="Projeto"
                        fill
                        quality={100}
                        unoptimized={true}
                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-arq-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-arq-blue text-white py-16 px-6 relative rounded-t-[3rem] z-20 mt-0">
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