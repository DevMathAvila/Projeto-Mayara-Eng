🏗️ Mayara Gaspareto - Arquitetura & Engenharia
Este é um projeto Next.js 16+ de alto padrão, desenvolvido com foco em performance, estética minimalista e experiência do usuário (UX) fluida. O site serve como portfólio digital e ferramenta de conversão para serviços de arquitetura e legalização.

🚀 Implementações Recentes (O que mudou)
Lightbox Responsivo com Swipe: Sistema de visualização de fotos em tela cheia que aceita gestos de "arrastar" (framer-motion) no celular para trocar de imagem.

Seção "Sua Jornada Conosco": Implementação de um fluxo de trabalho (Workflow) educativo para o cliente, estrategicamente posicionado entre o Portfólio e o Sobre.

Lógica de Fallback de Imagens: O sistema agora é inteligente. Se um projeto for cadastrado sem imagem de capa (image), ele puxa automaticamente a primeira foto da gallery.

Limitação Dinâmica na Home: A página inicial agora exibe apenas os 6 projetos mais relevantes (via .slice(0, 6)), mantendo o carregamento ultra-rápido.

Proteção contra Erros de Renderização: Adição de verificações que impedem o site de "quebrar" caso algum dado de projeto venha incompleto ou vazio.

🗺️ Mapa do Projeto: "Quem fala com Quem"
Para manter a organização, o projeto é dividido em Dados, Páginas e Componentes:

O Coração (Dados):

src/data/projects.js: Onde tudo começa. Este é o único lugar que você mexe para adicionar projetos. Se mudar algo aqui, reflete no site todo.

As Telas (Pages):

src/app/page.js (Home): Consome os dados e exibe o resumo (6 projetos + Jornada + Sobre).

src/app/projetos/page.js: A vitrine completa. Lista todos os IDs sem limite.

src/app/projeto/[id]/page.js: A página interna detalhada. É ela quem gerencia o Lightbox e a galeria de cada projeto.

As Peças (Components):

ProjectCard.js: O cartão visual que aparece nas listagens. Ele recebe os dados e cria o link.

Reveal.js: O responsável pelos efeitos de "surgimento" suave quando você rola a página.

🛠️ Guia de Manutenção (Onde mexer?)
✅ Pode Alterar à Vontade:
Adicionar Projetos: Vá em src/data/projects.js. Basta copiar um bloco {...} e mudar o ID, título e fotos.

Textos da Jornada: No arquivo src/app/page.js, procure pela constante jornadas. Você pode editar as descrições dos 4 passos lá.

Links de Contato: Todos os botões apontam para o seu WhatsApp. Estão espalhados nos rodapés e no botão flutuante.

⚠️ Cuidado ao Mexer:
ProjectCard.js: Contém a lógica de tratamento de erro de imagem. Se deletar o tratamento de imageSrc, o console voltará a dar erro de string vazia.

layout.js: Contém as fontes e metadados globais.

Tailwind Config: As cores personalizadas como arq-blue e arq-orange estão travadas nas configurações globais de estilo.

🚨 Alertas para Próximas Atualizações
Imagens Pesadas: Sempre que subir fotos novas para a pasta public, tente usar imagens de no máximo 500kb a 800kb. Fotos de 5MB direto da câmera vão deixar o site lento.

Novas Categorias: Se você criar uma categoria nova (ex: "Interiores"), ela aparecerá no card, mas se quiser que ela apareça no filtro da página de listagem, precisará adicionar o botão de filtro manualmente lá.

IDs Únicos: Nunca repita um ID no arquivo de dados. Se houver dois projetos com id: "1", a página interna não saberá qual abrir.

🎨 Identidade Visual (Design Tokens)
Cor Primária: arq-blue (Confiança, Engenharia, Sobriedade)

Cor de Destaque: arq-orange (Ação, Criatividade, Calor)

Tipografia: Mix entre Serif Italic (Sofisticação) e Sans Serif Bold (Tecnicidade).

Nota do Desenvolvedor: Este código foi escrito para ser auto-sustentável. A estrutura de animações com framer-motion garante que, mesmo com muitos projetos, a transição entre páginas seja luxuosa e fluida.