import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
// import { push } from "connected-react-router";
import { firebaseApp } from '../../config/firebase';
import {  Button, Input, Form, Icon, Typography } from 'antd';
import { connect } from 'react-redux';
import styles from './auth.module.css';

const { Title } = Typography;

class EmailLogin extends React.Component {

  state = {
      error : {
          message: ''
      },
  }


  componentDidUpdate (prevProps) {
   if(prevProps.user.signedInUser.isAuthenticated) {
    this.handleReset()
   }
  }

  handleReset = () => {
    this.props.form.resetFields();
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        firebaseApp.auth().signInWithEmailAndPassword(values.username, values.password)
                   .catch(err=> {
                        this.setState({error: err})
                   });
      }
    });
  };
 

  
render() {
  const { getFieldDecorator } = this.props.form;
  return (
    <div className="container center" style={{marginTop: 50}}>  
        <div className={styles.form}>
        <Title level={4} className="center">Sign In</Title>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>         
        </Form.Item>
         {
            this.props.user.signedInUser.isAuthenticated ?
            <>
              Logged in Succesfully <br/>
              <Link to={'/home'}>Go To Home Page</Link>
            </>
            :null
         }
      </Form>
        </div>
        <br/>
         <Link to={'/signup'}>New User? Register</Link>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user
  }
}

// export default withRouter((Form.create({ name: 'normal_login' })(EmailLogin)));
export default withRouter(connect(mapStateToProps)(Form.create({ name: 'normal_login' })(EmailLogin)));

// const renderInput = ({input, prefix, type, placeholder, meta}) => {
//   const hasError = meta.touched && meta.invalid;
//   return (     
//     <Form.Item
//         validateStatus={hasError ? "error" : "success"}
//         help={hasError && meta.error}
//     >
//         <Input {...input} prefix={prefix} type={type} placeholder={placeholder}/>
//     </Form.Item>    
//   )
// };

// const onSubmit = values => {
//   // let userDetails = JSON.stringify(values);
//   // console.log(values);
//   firebaseApp.auth().signInWithEmailAndPassword(values.email, values.password).then(cred=>{
     
//   })
//   .catch(err=> {
//       console.error(err);
//   });
// };

// const required = val => {
//   if(!val || val === '') {
//     return "This field is required"
//   } 
//   return undefined;
// };




// const EmailLogin = ({handleSubmit, valid}) => (
//   <div className="container center" style={{marginTop: 50}}>
//      <Form onSubmit={handleSubmit} className={styles.form}>
//          <Title level={4} className="center">Sign In</Title>
//           <Field
//             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//             name="email"
//             type="email"
//             placeholder="email"
//             validate={required}
//             component={renderInput}
//           />
//           <Field
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               name="password"
//               type="password"              
//               placeholder="Password"
//               validate={required}
//               component={renderInput}
//           />
//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="login-form-button" disabled={!valid}>
//             Log in
            
//           </Button>
//         </Form.Item>
//      </Form>
//      <Link to='/signup' className="container">
//        <Button  type="link">New user? Sign up</Button>
//     </Link> 
//   </div>
// )

// export default withRouter(reduxForm({
//   form: 'login-form',
//   onSubmit,
//   required,
// })(EmailLogin));

