import React from 'react';
import logo from './logo.svg';
import './App.css';
import authenticationSingleton from "./AuthenticationSingleton";
import CLoginForm from "./component/CLoginForm";

function App() {
  //authenticationSingleton.login("123", "123");
  return (
    <div className="App">
      <CLoginForm/>
    </div>
  );
}

export default App;
