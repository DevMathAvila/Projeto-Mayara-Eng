📐 Mayara Gaspareto - Portfolio de Arquitetura & Engenharia
Este é um portfólio de alto padrão desenvolvido com Next.js, focado em performance, minimalismo e experiência do usuário (UX). O projeto utiliza animações fluidas para transmitir a sofisticação e a precisão técnica do trabalho da Mayara.

🛠️ Tecnologias e Ferramentas
Framework: Next.js 16 (App Router)

Estilização: Tailwind CSS

Animações: Framer Motion

Ícones: React Icons (Pacote Font Awesome)

Bundler: Turbopack (para builds rápidas em ambiente de desenvolvimento)

🎨 Identidade Visual (Cores & Estilo)
As cores foram centralizadas no arquivo tailwind.config.js para garantir a unidade visual do projeto:

Cor Primária (arq-blue): #001F3F — Utilizada em textos principais, títulos de seções, Navbar e fundo do Footer.

Cor de Destaque (arq-orange): #FF8C00 — Utilizada para elementos de atenção, linhas de design, ícones de skills e botões de ação (CTA).

Fundo (off-white): #FAF9F6 — Cor de fundo principal para reduzir o cansaço visual e destacar as imagens.

Tipografia: Uso de fontes Serifadas em Itálico para frases de impacto, conferindo um aspecto editorial e luxuoso ao site.

📂 Estrutura de Pastas e Arquivos Chave
src/app/page.js: Arquivo principal da Home. Controla a ordem das seções (Hero, Portfólio, Sobre e Contato).

src/app/projeto/[id]/page.js: Template dinâmico para as páginas individuais de cada projeto.

src/components/portfolio/ProjectCard.js: Card dos projetos com sistema de hover sofisticado e efeito de Parallax no scroll.

src/components/ui/Reveal.js: Componente wrapper que gerencia a animação de "surgimento" dos elementos durante a rolagem.

src/components/ui/WhatsAppFloating.js: Botão flutuante fixo para conversão imediata via WhatsApp.

src/data/projects.js: Banco de dados local onde todas as informações dos projetos (fotos, textos, áreas) são armazenadas.

✨ Atualizações e Modificações Implantadas
Inversão de Fluxo: O portfólio foi movido para o topo, logo após a Hero, priorizando a exibição do trabalho antes da biografia.

Destaque de Texto: Adição de uma linha animada na Hero Section que sublinha a palavra "realidade" com um atraso calculado (delay).

Scroll Parallax: As imagens dentro dos cards de projeto deslizam verticalmente em uma velocidade diferente do scroll da página.

Física Magnética: O botão de contato no footer atrai o cursor do mouse quando o usuário aproxima o ponteiro, aumentando a interatividade.

Layout Responsivo: Ajustes em todos os grids para garantir que o visual premium se mantenha em celulares e tablets.

📖 Manual do Usuário e Manutenção (Para Desenvolvedores)
Como Adicionar Novos Projetos
Para inserir um novo trabalho, basta editar o arquivo src/data/projects.js. Adicione um novo objeto ao array seguindo este padrão:

id: Identificador único (usado na URL).

title: Nome do projeto.

category: Tipo (Arquitetura, Interiores, etc).

image: Foto principal (Capa).

gallery: Array com caminhos das fotos adicionais.

details: Objeto contendo Localização, Área e Ano.

Edição de Contatos e Links
WhatsApp: O link deve ser atualizado em dois lugares: no componente WhatsAppFloating.js e no botão do Footer dentro de page.js.

Instagram: O link e o texto do @ estão localizados na seção de Footer do arquivo page.js.

Orientações de Estilo
Ao criar novos componentes, utilize as classes do Tailwind configuradas para este projeto (ex: text-arq-blue, text-arq-orange, bg-off-white). Evite o uso de cores hexadecimais soltas no código para facilitar mudanças globais de marca no futuro.

📝 Notas para Próximas Versões
Espaço reservado para implementação de sistema de filtros no portfólio.

Possibilidade de integração com CMS (Contentful ou Sanity) caso o volume de projetos cresça muito.

Otimização de SEO para termos específicos de arquitetura e engenharia na região de atuação.

Projeto desenvolvido com foco em exclusividade e performance. 🚀
