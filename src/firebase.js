import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB43bX3JrFLX4ZwhVTJpCObVBUQnTC_QvQ",
  authDomain: "store-31aab.firebaseapp.com",
  databaseURL: "https://store-31aab.firebaseio.com",
  projectId: "store-31aab",
  storageBucket: "store-31aab.appspot.com",
  messagingSenderId: "59831587589",
  appId: "1:59831587589:web:b09584da1e926dfad61d6c",
  measurementId: "G-MSRMS1RNGT"

});

var db = firebaseApp.firestore();
var auth=firebaseApp.auth();
var storage=firebaseApp.storage()


export { db ,auth,storage};
