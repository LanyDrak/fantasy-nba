// Service Worker Minimaliste pour PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installé');
});

self.addEventListener('fetch', (e) => {
  // On laisse passer toutes les requêtes vers le réseau
  // (Pas de cache, comme ça les scores sont toujours à jour)
  e.respondWith(fetch(e.request));
});
