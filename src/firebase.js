import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyBjlk7BvfanJHJXd2QncsyOmQh0tG0VGLA",
    authDomain: "todo-app-1984c.firebaseapp.com",
    projectId: "todo-app-1984c",
    storageBucket: "todo-app-1984c.appspot.com",
    messagingSenderId: "571943189835",
    appId: "1:571943189835:web:eda08476598f7bd2087cce",
    measurementId: "G-HR2ECCXM6X"
  });

  const db=firebaseApp.firestore();
  
  export default db;