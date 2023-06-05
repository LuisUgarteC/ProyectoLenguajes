import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDI-H5AI2--quVAGW9Q-uyK8NqbiN3OlG8",
    authDomain: "yojadablogs.firebaseapp.com",
    projectId: "yojadablogs",
    storageBucket: "yojadablogs.appspot.com",
    messagingSenderId: "31912250140",
    appId: "1:31912250140:web:3a063436405cd4d7e488d9"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();