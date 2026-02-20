# 🏗️ Portfólio Mayara Gaspareto | Arquiteta & Engenheira

Este é um projeto de alta performance desenvolvido para a arquiteta e engenheira Mayara Gaspareto. O site foi construído seguindo conceitos de minimalismo, sofisticação e uma arquitetura de software moderna e escalável.

## 🛠️ Tecnologias e Ferramentas

* **Next.js 16 (App Router):** Framework principal que gerencia rotas dinâmicas e renderização otimizada.
* **React:** Biblioteca para criação de interfaces baseada em componentes reutilizáveis.
* **Tailwind CSS:** Framework de estilização utilitária para design responsivo e rápido.
* **Turbopack:** Motor de build de última geração para um ambiente de desenvolvimento instantâneo.
* **Git/GitHub:** Controle de versão e sincronização entre diferentes máquinas de trabalho.

---

## 📁 Estrutura do Projeto (Mapa do VS Code)

Para dar continuidade ao projeto, é fundamental entender a função de cada diretório:

### 1. `/src/app` (O Coração do Site)
* **`layout.js`**: A "moldura" global. Define fontes, metadados e mantém a `Navbar` fixa em todas as páginas.
* **`page.js`**: A página inicial (Home). Organiza a sequência das seções (Hero, Sobre, Projetos Selecionados).
* **`globals.css`**: Estilos globais e configurações de comportamento (ex: `scroll-behavior: smooth`).
* **`/projeto/[id]/page.js`**: **Rota Dinâmica**. É uma página "molde" que lê o ID da URL e busca automaticamente os dados do projeto correspondente no banco de dados local.

### 2. `/src/components` (Peças de LEGO)
* **`layout/Navbar.js`**: Cabeçalho de navegação. Contém a identidade visual "MAYARA GASPARETO | ARQ & ENG" com links inteligentes que funcionam tanto na Home quanto em páginas internas.
* **`portfolio/ProjectCard.js`**: O componente visual do card. Gerencia o zoom da imagem e a transição de cores ao passar o mouse.

### 3. `/src/data` (Inteligência e Conteúdo)
* **`projects.js`**: O banco de dados do projeto. Centraliza todas as informações (Textos, Áreas, Anos, Localizações e Galeria de Fotos). **Não é necessário mexer no HTML para adicionar projetos, apenas atualizar este arquivo.**

### 4. `/src/public` (Arquivos Estáticos)
* **`/images`**: Repositório de mídias. Todas as capas e fotos das galerias devem ser organizadas aqui.

---

## 🎨 Identidade Visual e Estilos

O projeto utiliza uma paleta de cores personalizada, configurada no `tailwind.config.js`:
* **Azul Marinho (`#001F3F`)**: Transmite autoridade, seriedade e luxo.
* **Laranja (`#D35400`)**: Traz criatividade, energia e destaque aos detalhes técnicos.

---

## 🔄 Como mudar de computador (Sincronização via GitHub)

Como configuramos o `.gitignore` para ignorar a pasta pesada `node_modules`, siga estes passos ao abrir o projeto em uma nova máquina:

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/DevMathAvila/Projeto-Mayara-Eng.git](https://github.com/DevMathAvila/Projeto-Mayara-Eng.git)
    ```
2.  **Instalar dependências (Obrigatório):**
    Este comando vai recriar a pasta `node_modules` com base no seu `package.json`.
    ```bash
    npm install
    ```
3.  **Rodar o ambiente de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

## 📝 Como Adicionar um Novo Projeto

Para inserir um novo trabalho no portfólio:
1.  Adicione as fotos em `public/images/`.
2.  No arquivo `src/data/projects.js`, adicione um novo objeto ao array:
    ```javascript
    {
      id: "4",
      title: "Novo Projeto",
      category: "Engenharia",
      image: "/images/capa.jpg",
      description: "Texto descritivo aqui...",
      details: { location: "Cidade, UF", area: "000m²", year: "2026" },
      gallery: ["/images/detalhe1.jpg", "/images/detalhe2.jpg"]
    }
    ```

---

## 🔒 Arquivos de Configuração Críticos
* **`.gitignore`**: Impede que arquivos temporários e pastas pesadas sejam enviados ao GitHub.
* **`jsconfig.json`**: Permite o uso do atalho `@/` para facilitar a importação de componentes.
* **`tailwind.config.js`**: Registra as cores da marca para que o Tailwind as reconheça.

---
**Desenvolvido com foco em excelência estética e técnica para Mayara Gaspareto.**