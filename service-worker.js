self.addEventListener('install', function(e) {
  console.log('[서비스워커] 설치됨');
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(e) {
  console.log('[서비스워커] 활성화됨');
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});