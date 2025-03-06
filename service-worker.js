const CACHE_NAME = "delay-time-calculator-v1";
const urlsToCache = [
    "index.html",
    "styles.css",
    "script.js",
    "manifest.json",
    "icon.png"
];

// インストール時にキャッシュする
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// オフライン時にキャッシュから表示
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
