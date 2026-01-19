// Nó: Cérebro (Decisor)
// Função: Define aleatoriamente se postará uma notícia técnica ou uma interação social.

// CONFIGURAÇÃO DOS FEEDS RSS
const feeds = [
  'https://www.tabnews.com.br/recentes/rss',
  'https://dev.to/feed',
  'https://techcrunch.com/feed/'
];

// 1. DECIDE: É NOTÍCIA OU INTERAÇÃO? (60% Interação / 40% Notícia)
const isInteractive = Math.random() < 0.6;

if (isInteractive) {
  // 2. SE FOR INTERAÇÃO, QUAL TIPO? (Sorteio Igualitário)
  // Tipos: question (pergunta), joke (piada), fact (curiosidade)
  const types = ['question', 'joke', 'fact'];
  const selectedType = types[Math.floor(Math.random() * types.length)];
  
  return [{ 
    json: { 
      mode: 'interactive', 
      subType: selectedType, 
      feedUrl: '' 
    } 
  }];
} else {
  // 3. SE FOR NOTÍCIA, ESCOLHE UM FEED ALEATÓRIO
  const randomFeed = feeds[Math.floor(Math.random() * feeds.length)];
  
  return [{ 
    json: { 
      mode: 'news', 
      subType: 'news', 
      feedUrl: randomFeed 
    } 
  }];
}