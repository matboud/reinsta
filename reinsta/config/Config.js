import firebase from 'firebase';
  
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBhemHremBDICtxZUcd4iuUYR8iMt_0MjI",
    authDomain: "reinsta.firebaseapp.com",
    databaseURL: "https://reinsta.firebaseio.com",
    projectId: "reinsta",
    storageBucket: "reinsta.appspot.com",
    messagingSenderId: "760351253961",
    appId: "1:760351253961:web:0707fed068b29480"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const f= firebase;
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();