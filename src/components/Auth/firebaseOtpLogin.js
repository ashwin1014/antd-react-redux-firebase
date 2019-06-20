import React, {useEffect} from 'react';
import { startFirebaseUI } from '../../config/firebase';
import 'firebaseui/dist/firebaseui.css';

const FirebaseOtpLogin = () => {
    useEffect(()=>{
        startFirebaseUI ('#firebaseui')
    },[])

    return (
        <div className="container">
             <div id="firebaseui"></div>     
        </div>
    )
};

export default FirebaseOtpLogin;