// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDpERVmyx4n6t1yW7YxHPKVsfmY4bOVBv0",
  authDomain: "html-website-auth-v2.firebaseapp.com",
  projectId: "html-website-auth-v2",
  storageBucket: "html-website-auth-v2.firebasestorage.app",
  messagingSenderId: "789981394325",
  appId: "1:789981394325:web:f012a35a12d3b49584f29c",
  measurementId: "G-HNCGD9YYG2"
};

export const app = initializeApp(firebaseConfig);