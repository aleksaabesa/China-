importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAMY4f0Bb5ilLoiDyxgKB2s8ReHGn-UQCN0",
  authDomain: "china-amanati.firebaseapp.com",
  projectId: "china-amanati",
  storageBucket: "china-amanati.firebasestorage.app",
  messagingSenderId: "632384520098",
  appId: "1:632384520098:web:d5d01912d4522f6117fcfb"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'IMG_4717.PNG' // დარწმუნდი, რომ ეს ფაილი GitHub-ზეა!
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
