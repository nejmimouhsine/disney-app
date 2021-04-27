import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaDCFxHG_M8DRemP43irHYsJUSB_wK7ZM",
  authDomain: "disney-app-832df.firebaseapp.com",
  projectId: "disney-app-832df",
  storageBucket: "disney-app-832df.appspot.com",
  messagingSenderId: "911433796229",
  appId: "1:911433796229:web:c3a0a1087815ceda5d37ec",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
