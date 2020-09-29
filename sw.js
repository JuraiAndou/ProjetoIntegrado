self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./style.css",
                "./script.js",
                "./data.json",
                "./index.js",
                "./assets/icons/theme.png",
                "./assets/icons/icon-192.png"
            ])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});