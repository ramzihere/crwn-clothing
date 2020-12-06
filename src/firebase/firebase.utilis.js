import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDNYAgPgQmtEGfSsr5YhB1bxKpovKDMb9A",
  authDomain: "crwn-clothing-1e157.firebaseapp.com",
  projectId: "crwn-clothing-1e157",
  storageBucket: "crwn-clothing-1e157.appspot.com",
  messagingSenderId: "666214166675",
  appId: "1:666214166675:web:67150694444655594a1d66",
  measurementId: "G-41RFFN3983",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
