import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jhajxJhJKZIQ0GNZVc8euoTzUp-FDG8",
  authDomain: "netflix-clone-e379b.firebaseapp.com",
  projectId: "netflix-clone-e379b",
  storageBucket: "netflix-clone-e379b.appspot.com",
  messagingSenderId: "572714853831",
  appId: "1:572714853831:web:22c523faa813bdcc5d25e2",
  measurementId: "G-BQ8H34Y42V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// initiate the firebase-app with firebase function above

const db = firebaseApp.firestore();
// Initiate the database with firestore function

const auth = firebase.auth();
//  Initiate the authentication with firebase auth fnction.

const storage = firebase.storage();
// Initiate the storage with firebase storage..

export {db, auth, storage}