import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBF2odnwQ46dsd3WDjA-MMCSyou1ZB8NeI",
  authDomain: "cuisine-49a2d.firebaseapp.com",
  projectId: "cuisine-49a2d",
  storageBucket: "cuisine-49a2d.appspot.com",
  messagingSenderId: "161365241903",
  appId: "1:161365241903:web:fa3a47bb2cfa32382516da"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();