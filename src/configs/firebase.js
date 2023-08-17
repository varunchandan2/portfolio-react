import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAXVLteyK9yH0rqciNpztUYdHThHqHJo2E",
    authDomain: "test-portfolio-f442b.firebaseapp.com",
    projectId: "test-portfolio-f442b",
    storageBucket: "test-portfolio-f442b.appspot.com",
    messagingSenderId: "32305285645",
    appId: "1:32305285645:web:1ee84ac6bbcbb418956344"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export default firebase;