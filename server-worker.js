var cacheName = 'petstore-v1';
var cacheFiles = ['index.html',
    'product.js',
    'petstore.webmanifest',
    'images/cat.jpg',
    'images/icon-icon.jpg'
    ];

self.addEventListener('install',(e) =>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        cache.open(cacheName).then((cache) =>{
        console.log('[Service Worker] Caching all the files');
        return cache.addAll(cacheFiles);
    })
    );
});