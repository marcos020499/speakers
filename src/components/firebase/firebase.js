import firebase from "firebase";
import firebaseConfig from "./config";
import "firebase/firestore";
const settings = { timestampsInSnapshots: true };
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
