import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBthklCZR9kp4Z2dMUjQ72do_eDwbqSRbg",
    authDomain: "crn-clothing-6c8a9.firebaseapp.com",
    projectId: "crn-clothing-6c8a9",
    storageBucket: "crn-clothing-6c8a9.appspot.com",
    messagingSenderId: "1025651666743",
    appId: "1:1025651666743:web:7d594ae8215bdc55bdf4b2",
    measurementId: "G-FP5DC0P7KM"
};
  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;