import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyD1AuISVBXkPMLUeDKB5ssbmkwRLUAmPEg",
    authDomain: "sweta-a5b82.firebaseapp.com",
    databaseURL: "https://sweta-a5b82-default-rtdb.firebaseio.com",
    projectId: "sweta-a5b82",
    storageBucket: "sweta-a5b82.appspot.com",
    messagingSenderId: "251726670448",
    appId: "1:251726670448:web:2a7f1b59931716e6b2e2b5",
    measurementId: "G-8STMBK2QBL"
  };
  
  // Initialize Firebase
  var firebaseDB = firebase.initializeApp(firebaseConfig);
  export default firebaseDB.database().ref();
