export default function sitemap() {
  const baseUrl = 'https://www.mayaragaspareto.com.br';

  // Geramos as URLs para os projetos (se você tiver rotas dinâmicas como /projetos/[id])
  // Por enquanto, vamos focar nas rotas principais e na Home
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Como você está subindo projetos novos, 'weekly' é melhor que 'monthly'
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projetos`, // Caso você tenha essa rota
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/regularizacao`, // Para dar foco ao seu serviço técnico
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}