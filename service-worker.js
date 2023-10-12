
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Gebruik `workbox.routing.registerRoute()`..
navigator.serviceWorker.register('/service-worker.js', {
    scope: '/'
}).then(function (registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
})
