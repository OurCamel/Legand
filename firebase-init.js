// === تهيئة Firebase لمشروع KUW LEGENDS ===

const firebaseConfig = {
  apiKey: "AIzaSyDpiuqt2m8OdmHUhI9yrTTY21_Qc-GpEp4",
  authDomain: "kuw-legends.firebaseapp.com",
  projectId: "kuw-legends",
  storageBucket: "kuw-legends.firebasestorage.app",
  messagingSenderId: "602698701824",
  appId: "1:602698701824:web:1fe2d60bdc2f6f6b7d0ce5",
  measurementId: "G-BHGMEFKN73"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
