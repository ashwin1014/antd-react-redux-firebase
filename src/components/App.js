import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { firebaseApp } from '../config/firebase';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import SignIn from './Auth/SignIn';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import SignUp from './Auth/SignUp';
import Cart from './cart/Cart';
import Checkout from './Checkout/Checkout';
import PageNotFound from './NotFound/PageNotFound';

 class App extends Component {

  state = {
    isAuthenticated: false
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user=>{
      if(user) {
        const { email, phoneNumber } = user;
        let signedInType = email ? email:phoneNumber;
        console.log(signedInType);
        console.log('User signed in')
        // this.props.push('/home')
        this.setState({
          isAuthenticated: true
        });
      } else {
        console.log('User signed out')
        this.props.push('/')
      }
    })
  };
  

  render() {
  return (
        <>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/home" component={Home} />
            <Route path="/adminpage" component={Admin} />
            <Route path="/signup" component={SignUp} />
            <Route path="/viewcart" component={Cart} />
            <Route path="/Checkout" component={Checkout} />
            <Route component={PageNotFound} />
          </Switch>
        </>
    )
  }
};


export default connect(null, {push})(App);