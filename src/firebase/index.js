import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);

const AUTH = firebase.auth();
const FIRESTORE = firebase.firestore();
const PROVIDER = {
  GOOGLE: firebase.auth.GoogleAuthProvider
};

export { AUTH, FIRESTORE, PROVIDER };
