import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDfnpnjV3WThKBcMhYuBetHK8uNAxCdqgg",
    authDomain: "food-items-22615.firebaseapp.com",
    databaseURL: "https://food-items-22615.firebaseio.com",
    projectId: "food-items-22615",
    storageBucket: "food-items-22615.appspot.com",
    messagingSenderId: "1098600604525",
    appId: "1:1098600604525:web:41e2732a0bc68bad"
};

app.initializeApp(firebaseConfig);
app.firestore();

export default app;