const CACHE_NAME = 'ayusutra-cache-v3';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/i18n.js',
  '/manifest.json'
];

// Install Event - Cache Static Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network First for API, Cache First for Static Assets
self.addEventListener('fetch', (event) => {
  // If it's an API request, bypass cache completely to get fresh data
  if (event.request.url.includes('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // For static assets, try cache first, then network
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Return from cache
      }
      return fetch(event.request).then((networkResponse) => {
        // Don't cache if not a valid response or if it's a cross-origin request we don't control
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        
        // Clone the response because it's a stream and can only be consumed once
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});
