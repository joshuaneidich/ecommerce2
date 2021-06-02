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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log(userAuth);
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log('userRef', userRef);
    const snapShot = await userRef.get();
    console.log('snapShot', snapShot);
    if (!snapShot.exists) {
        console.log("snapshot doesn't exist")
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName: displayName,
                email: email,
                createdAt: createdAt,
                // photoUrl: photoUrl,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e)
        }
    }

    return userRef;

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);

        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {
            title,
            items
        } = doc.data();

        return {
            routeName: encodeURI(title),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});


export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;