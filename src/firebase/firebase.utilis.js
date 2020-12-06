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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
