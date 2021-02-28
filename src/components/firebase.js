import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBfCnp1tdR12oO3eKmb2ocfb-0erKpGQVk",
    authDomain: "twitter-clone-cd8a2.firebaseapp.com",
    projectId: "twitter-clone-cd8a2",
    storageBucket: "twitter-clone-cd8a2.appspot.com",
    messagingSenderId: "650553761595",
    appId: "1:650553761595:web:a68d8692a654cb5f69a11e"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  const db =  firebaseApp.firestore();

  export default db;
