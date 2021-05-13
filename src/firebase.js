import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9GPZb_5NFV4BRW67XKe_8h6GNYMzK_Ww",
    authDomain: "linkedin-clone-5d49e.firebaseapp.com",
    projectId: "linkedin-clone-5d49e",
    storageBucket: "linkedin-clone-5d49e.appspot.com",
    messagingSenderId: "101470758657",
    appId: "1:101470758657:web:3a879ccd6976e216295d00"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;