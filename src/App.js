import logo from './logo.svg';
import './App.css';
import List from "./components/List/List";
import Input from "./components/Input";
import state from "./state";

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState} from "react-firebase-hooks/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBjdMVFjxSsi0PuIguuE1bY27u2DIh1yBw",
    authDomain: "portfolio-f656b.firebaseapp.com",
    projectId: "portfolio-f656b",
    storageBucket: "portfolio-f656b.appspot.com",
    messagingSenderId: "481293606628",
    appId: "1:481293606628:web:3ace295224a69e0041d6f1",
    measurementId: "G-XMBB2CBC0H"
})

function App() {
  return (
    <div className="App">
      <List state={state}/>
      <Input state={state}/>
    </div>
  );
}

export default App;
