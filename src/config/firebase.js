// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import * as firebase from 'firebase/app';

// import 'firebase/auth';
// import 'firebase/database';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// // const config = { stuff };

// // firebase.initializeApp(config);

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const storage = firebase.storage();

var firebaseConfig = {
  apiKey: "AIzaSyBehGcRgIWT0Dz8czDzYCA_6v09GwbVdw4",
  authDomain: "chat-app-testing-13a29.firebaseapp.com",
  databaseURL: "https://chat-app-testing-13a29.firebaseio.com",
  projectId: "chat-app-testing-13a29",
  storageBucket: "chat-app-testing-13a29.appspot.com",
  messagingSenderId: "970591206587",
  appId: "1:970591206587:web:57937ecc0e0e062ecc7d9e",
  measurementId: "G-GPH8QNTE3N"
};
// Initialize Firebase
export const Firebase=firebase.initializeApp(firebaseConfig);
export default Firebase;
// export firebase.analytics();
// export {firebase, auth, firestore, storage,Firebase};