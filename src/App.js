import React from 'react';
import AppLayout from './components/AppLayout/AppLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserForm from './components/auth/userForm';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserForm}/>
        <Route path="/Home" component={AppLayout}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
