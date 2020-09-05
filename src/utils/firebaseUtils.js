import firebase from 'firebase';
import 'firebase/firestore'

const config = {
    
    apiKey: "AIzaSyCSox82OLV5AqieFZa3FNiv-xUqAX_9ymQ",
    authDomain: "contablack-9.firebaseapp.com",
    databaseURL: "https://contablack-9.firebaseio.com",
    projectId: "contablack-9",
    storageBucket: "contablack-9.appspot.com",
    messagingSenderId: "200463592597",
    appId: "1:200463592597:web:7f0b49520ff842e06bbf9c",
    measurementId: "G-8SRD1VXY6F"
};

//initialize Firebase
firebase.initializeApp(config);

export default firebase  