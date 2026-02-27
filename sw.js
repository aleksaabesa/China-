self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// ნოტიფიკაციის ჩვენების ფუნქცია
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const options = {
            body: event.data.body,
            icon: 'IMG_4717.PNG',
            badge: 'IMG_4717.PNG',
            vibrate: [200, 100, 200]
        };
        event.waitUntil(
            self.registration.showNotification('China ამანათი', options)
        );
    }
});
