import React from 'react';
import AppLayout from './components/AppLayout/AppLayout';
import UserForm from './components/auth/userForm';
import './App.css';


const App = () => {
  return (
    <div className="App">
      {/* <AppLayout/> */} 
      <UserForm/>
    </div>
  );
};

export default App;
