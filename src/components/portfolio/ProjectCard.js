import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    // O Link faz a mágica de levar para a página do projeto usando o ID
    <Link href={`/projeto/${project.id}`} className="block">
      <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay suave usando o Azul da marca */}
          <div className="absolute inset-0 bg-arq-blue/20 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        
        <div className="p-6">
          {/* Categoria em Laranja */}
          <span className="text-xs font-semibold uppercase tracking-wider text-arq-orange">
            {project.category}
          </span>
          
          {/* Título em Azul Escuro */}
          <h3 className="mt-2 text-xl font-bold text-arq-blue">
            {project.title}
          </h3>
          
          {/* Botão de detalhes em Laranja */}
          <div className="mt-4 flex items-center text-sm font-medium text-arq-orange">
            Ver detalhes
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}