self.addEventListener('fetch', (event) => {
  // Este es un Service Worker básico para permitir la instalación
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});