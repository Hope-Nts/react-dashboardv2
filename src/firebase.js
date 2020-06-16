import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyB0oX5Xy9lPE6Sd70EVT484pmdBFtA-UNI",
    authDomain: "credit-2c0f0.firebaseapp.com",
    databaseURL: "https://credit-2c0f0.firebaseio.com",
    projectId: "credit-2c0f0",
    storageBucket: "credit-2c0f0.appspot.com",
    messagingSenderId: "252336910491",
    appId: "1:252336910491:web:9403786e8156f6f2c0163e",
    measurementId: "G-R93R4HHYND"
  };

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();


export default firebase;