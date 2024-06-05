// public/service-worker.js
const CACHE_NAME = 'lottie-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  // add more URLs as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
