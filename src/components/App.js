import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './Auth/SignIn';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import SignUp from './Auth/SignUp';
import Cart from './cart/Cart';
import PageNotFound from './NotFound/PageNotFound';

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/adminpage" component={Admin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/viewcart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;