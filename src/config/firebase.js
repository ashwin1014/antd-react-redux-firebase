import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfnpnjV3WThKBcMhYuBetHK8uNAxCdqgg",
    authDomain: "food-items-22615.firebaseapp.com",
    databaseURL: "https://food-items-22615.firebaseio.com",
    projectId: "food-items-22615",
    storageBucket: "food-items-22615.appspot.com",
    messagingSenderId: "1098600604525",
    appId: "1:1098600604525:web:41e2732a0bc68bad"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const recipes = firebase.database().ref('recipes');
export const db = firebase.firestore(); 