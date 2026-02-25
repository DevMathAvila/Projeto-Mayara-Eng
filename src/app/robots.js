export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '', // Permitimos que tudo seja lido, já que não há áreas restritas
    },
    sitemap: 'https://www.mayaragaspareto.com.br/sitemap.xml',
  };
}