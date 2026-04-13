self.addEventListener('install', (e) => {
  console.log('SW Installed');
});
self.addEventListener('fetch', (e) => {
  // Required for PWA
});
