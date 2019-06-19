import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {  Button, Input, Form, Icon, Typography } from 'antd';
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
  let userDetails = JSON.stringify(values);
  console.log(userDetails);
};

const required = val => {
  if(!val || val === '') {
    return "This field is required"
  } 
  return undefined;
};


const EmailLogin = ({handleSubmit, valid}) => (
  <div className="container">
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
  </div>
)

export default reduxForm({
  form: 'login-form',
  required,
  onSubmit,
})(EmailLogin);
