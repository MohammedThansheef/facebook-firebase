import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-jsgWH28BkGV1CIaDDlLMG88M9oUVMlo",
  authDomain: "facebook-clone-6fa93.firebaseapp.com",
  databaseURL: "https://facebook-clone-6fa93.firebaseio.com",
  projectId: "facebook-clone-6fa93",
  storageBucket: "facebook-clone-6fa93.appspot.com",
  messagingSenderId: "410032419537",
  appId: "1:410032419537:web:934b8d305a6fa42bfd0bf0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
