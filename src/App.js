import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return <h1>Hello App</h1>;
}

export default App;
