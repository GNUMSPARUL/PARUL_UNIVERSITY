// This is the minimum code required for PWA installability
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Even an empty fetch handler allows the PWA to be installed
});
