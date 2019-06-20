import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../config/firebase';
import {  Button, Input, Form, Icon, Typography } from 'antd';
// import { connect } from 'react-redux';
import styles from './auth.module.css';

const { Title } = Typography;

const renderInput = ({input, prefix, type, placeholder, meta}) => {
  const hasError = meta.touched && meta.invalid;
  return (     
    <Form.Item
        validateStatus={hasError ? "error" : "success"}
        help={hasError && meta.error}
    >
        <Input {...input} prefix={prefix} type={type} placeholder={placeholder}/>
    </Form.Item>    
  )
};

const onSubmit = values => {
  // let userDetails = JSON.stringify(values);
  // console.log(values);
  firebaseApp.auth().signInWithEmailAndPassword(values.email, values.password).then(cred=>{
    if(cred) {
      // this.props.push('/home')
    }
  })
  .catch(err=> {
      console.error(err);
  });
};

const required = val => {
  if(!val || val === '') {
    return "This field is required"
  } 
  return undefined;
};



const EmailLogin = ({handleSubmit, valid}) => (
  <div className="container center" style={{marginTop: 50}}>
     <Form onSubmit={handleSubmit} className={styles.form}>
         <Title level={4} className="center">Sign In</Title>
          <Field
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="email"
            type="email"
            placeholder="email"
            validate={required}
            component={renderInput}
          />
          <Field
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="password"
              type="password"              
              placeholder="Password"
              validate={required}
              component={renderInput}
          />
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" disabled={!valid}>
            Log in
          </Button>
        </Form.Item>
     </Form>
     <Link to='/signup' className="container">
       <Button  type="link">New user? Sign up</Button>
    </Link> 
  </div>
)

// EmailLogin = connect(
//   null,
//   { push }
// )(EmailLogin)


export default reduxForm({
  form: 'login-form',
  onSubmit,
  required,
})(EmailLogin);

