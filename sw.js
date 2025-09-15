const CACHE_NAME = 'calculator-pwa-v1';
const urlsToCache = [
  '/calculator/',
  '/calculator/index.html',
  '/calculator/icons/icon-192x192.png',
  '/calculator/logo.svg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      }
    )
  );
});
