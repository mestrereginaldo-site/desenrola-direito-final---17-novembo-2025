import express from 'express';

const app = express();

// Configura CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

// Dados dos artigos (vou colocar apenas 2 para teste, depois você adiciona o resto)
const articles = [
  {
    id: 1,
    title: "Golpes online: Como identificar e evitar fraudes ao consumidor",
    slug: "golpes-online-fraudes-consumidor",
    excerpt: "Aprenda a identificar e evitar os principais golpes online, conheça seus direitos como consumidor digital e saiba como proceder caso seja vítima de fraudes.",
    content: `# Golpes online: Como identificar e evitar fraudes ao consumidor

    Conteúdo completo do artigo sobre golpes online...`,
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80",
    publishDate: "2025-04-18",
    categoryId: 1,
    featured: 0
  },
  {
    id: 2,
    title: "Auxílio-doença: Como solicitar, requisitos e documentos necessários",
    slug: "auxilio-doenca-como-solicitar",
    excerpt: "Guia completo sobre o auxílio-doença do INSS: quem tem direito, como solicitar, documentos necessários e como recorrer em caso de negativa.",
    content: `# Auxílio-doença: Como solicitar, requisitos e documentos necessários
    
    Conteúdo completo do artigo sobre auxílio-doença...`,
    imageUrl: "https://images.unsplash.com/photo-1631815590068-dd304256bcd2?auto=format&fit=crop&w=800&q=80",
    publishDate: "2025-01-15",
    categoryId: 6,
    featured: 0
  }
];

// Rotas da API
app.get('/', (req, res) => {
  res.json({ 
    message: 'API do Desenrola Direito funcionando! 🚀',
    endpoints: {
      all_articles: '/api/articles',
      single_article: '/api/articles/:slug',
      categories: '/api/categories'
    }
  });
});

// Todos os artigos
app.get('/articles', (req, res) => {
  res.json(articles);
});

// Artigo específico
app.get('/articles/:slug', (req, res) => {
  const article = articles.find(a => a.slug === req.params.slug);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: 'Artigo não encontrado' });
  }
});

// Categorias
app.get('/categories', (req, res) => {
  res.json([
    { id: 1, name: "Direito do Consumidor", slug: "direito-consumidor" },
    { id: 2, name: "Direito Trabalhista", slug: "direito-trabalhista" },
    { id: 3, name: "Direito Médico", slug: "direito-medico" },
    { id: 4, name: "Direito Penal", slug: "direito-penal" },
    { id: 5, name: "Direito de Família", slug: "direito-familia" },
    { id: 6, name: "Direito Previdenciário", slug: "direito-previdenciario" }
  ]);
});

export default app;
