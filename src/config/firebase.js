import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseui  from 'firebaseui';


const firebaseConfig = {
    apiKey: "AIzaSyDfnpnjV3WThKBcMhYuBetHK8uNAxCdqgg",
    authDomain: "food-items-22615.firebaseapp.com",
    databaseURL: "https://food-items-22615.firebaseio.com",
    projectId: "food-items-22615",
    storageBucket: "food-items-22615.appspot.com",
    messagingSenderId: "1098600604525",
    appId: "1:1098600604525:web:41e2732a0bc68bad"
  };

// firebaseui for otp
const uiConfig = ({
  signInSuccessUrl: '/home',
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // another option is 'audio'
        size: 'invisible', // other options are 'normal' or 'compact'
        badge: 'bottomright' // 'bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'IN'
    }
  ],
  tosUrl: '/terms-of-service' // This doesn't exist yet
})

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const startFirebaseUI = function (elementId) {
    ui.start(elementId, uiConfig)
}

export const db = firebase.firestore();

export const mapKey = 'AIzaSyDvlVnWowOl4bH7teWI7vIe46U5LtXHhhM';