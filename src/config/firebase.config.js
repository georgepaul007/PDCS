import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsNJgzrpzk8A8qMb9yeX_wyrA5zBJ27CU",
  authDomain: "quickstart-1610359194941.firebaseapp.com",
  projectId: "quickstart-1610359194941",
  storageBucket: "quickstart-1610359194941.appspot.com",
  messagingSenderId: "663487344072",
  appId: "1:663487344072:web:a743fd347cb5c3d0ab64fd",
  measurementId: "G-EDB08R06T3",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
