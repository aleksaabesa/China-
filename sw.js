// Service Worker for China ამანათი Notifications
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// შეტყობინების მიღება
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'ამანათი გზაშია! 📦';
    
    const options = {
        body: data,
        icon: 'IMG_4717.PNG',
        badge: 'IMG_4717.PNG',
        vibrate: [200, 100, 200],
        tag: 'order-update',
        data: {
            url: 'index.html'
        }
    };

    event.waitUntil(
        self.registration.showNotification('China ამანათი', options)
    );
});

// შეტყობინებაზე დაჭერისას საიტის გახსნა
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('index.html')
    );
});
