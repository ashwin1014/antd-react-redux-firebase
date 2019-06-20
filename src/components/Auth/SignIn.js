import React, { useState } from 'react';
import EmailLogin from './EmailLogin'; 
import FirebaseOtpLogin from './firebaseOtpLogin';
import { Typography, Button } from 'antd';

const { Title } = Typography;




const SignIn = () => {
    const [LoginType, setLoginType] = useState('email');

    const handleLoginType = e => {
        setLoginType(e.target.dataset.type)
    };

    if(LoginType === 'email') {
        return (
         <>
            <EmailLogin/>
            <div className="center container">     
             or               
             <Button type="link" data-type="otp" onClick={handleLoginType}>Login Via OTP insted?</Button>  
            </div>
          </>
        ) 
    } else {
            return (
            <div style={{marginTop: 50}}>
               <Title level={4} className="center">Sign In</Title>
               <FirebaseOtpLogin/>
               <br/>
               <div className="container center">     
                <Button type="link" data-type="email" onClick={handleLoginType}>Login Via Email insted?</Button>          
               </div>
            </div>      
            )
        }
}

export default SignIn
