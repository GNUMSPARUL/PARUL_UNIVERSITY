const CACHE_NAME = 'pnums-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Mandatory fetch listener for PWA installability
self.addEventListener('fetch', (event) => {
  // For student projects, we keep this simple. 
  // It allows the app to be installed without complex offline caching.
  event.respondWith(fetch(event.request).catch(() => {
    return caches.match(event.request);
  }));
});
