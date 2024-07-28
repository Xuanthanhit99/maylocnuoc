import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// More about firebase config on https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA9Vs3m4OuCSkh2KLQkyfgus-I3DV8uISQ",
    authDomain: "chat-mln.firebaseapp.com",
    projectId: "chat-mln",
    storageBucket: "chat-mln.appspot.com",
    messagingSenderId: "464401968732",
    appId: "1:464401968732:web:ab246232a587a1cad4c099",
    measurementId: "G-LF37Z8H2V8"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export const firestore = firebase.firestore()

export default firebase