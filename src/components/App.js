import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { firebaseApp } from '../config/firebase';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { logUser } from './../actions/userActions';
import { Spin } from 'antd';
import SignIn from './Auth/SignIn';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import SignUp from './Auth/SignUp';
import Cart from './cart/Cart';
import Checkout from './Checkout/Checkout';
import PageNotFound from './NotFound/PageNotFound';
import  ProtectedRoute  from './Auth/protected.route';


 class App extends Component {

  state = {
    signedInUser: [],
    loading: true
  }

  
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user=>{
      if(user) {
        const { email, phoneNumber, uid } = user;
        let signedInType = email ? email:phoneNumber;
        const signedInUser = {
          signedInUser: signedInType,
          isAuthenticated: true,
          isAdmin: false,
          uid
        }
        this.props.logUser(signedInUser)
        console.log('User signed in');
        // console.log(this.props.user.signedInUser) 
        this.setState({
          signedInUser: this.props.user.signedInUser,
          loading: false
        })   
        // console.log('state',this.state.signedInUser.isAuthenticated)
      } else {
        console.log('User signed out');
        const signedInUser = {
          signedInUser: null,
          isAuthenticated: false,
          isAdmin: false,
          uid: null
        }
        this.props.logUser(signedInUser);    
        this.setState({
          signedInUser: this.props.user.signedInUser,
          loading: false
        })       
      }
    })
  };
  

  render() {
    const { signedInUser, loading } = this.state;
    if (loading) {
      return <Spin size="large"/>;
    }
  return (
        <>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <ProtectedRoute exact path="/home" authenticated={signedInUser.isAuthenticated} component={Home} />
            <ProtectedRoute exact path="/adminpage" authenticated={signedInUser.isAuthenticated} component={Admin} />            
            <ProtectedRoute exact path="/viewcart" authenticated={signedInUser.isAuthenticated} component={Cart} />
            <ProtectedRoute exact path="/Checkout" authenticated={signedInUser.isAuthenticated} component={Checkout} />
            <Route component={PageNotFound} />
          </Switch>
        </>
    )
  }
};

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user
  }
}


export default withRouter(connect(mapStateToProps, {push, logUser, pure: false})(App));