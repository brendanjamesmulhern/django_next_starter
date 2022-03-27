import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';
import { IndexRoute } from '../services/service';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [setToTrade, setSetToTrade] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    getTheMessage();
  }, []);
  const getTheMessage = () => {
    IndexRoute()
      .then(res => {
        setMessage(res.data.message);
      })
      .catch(err => {
        console.error(err);
      });
  };  
  const register = () => {
    setLoggedIn(true);
  };
  const newUserFlow = () => {
    setNewUser(true);
  }; 
  const login = () => {
    setLoggedIn(true);
  };
  const kycVerification = () => {
    setSetToTrade(true);
  };
  const trade = () => {
    alert("You won!");
  };
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <Nav />
      <div style={{ backgroundColor: 'gray', height: '80vh', overflowY: 'scroll', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* { loggedIn ? 
          setToTrade ?
            <button onClick={trade}>Trading Console</button>
          :
            <button onClick={kycVerification}>KYC</button>
        :
          !newUser ? 
          <div>
            <button onClick={newUserFlow}>Login</button>
            <button onCLick={register}>Registration</button>
          </div>
          :
            <button onClick={login}>Login</button>
        } */}
        <div style={{ color: 'white' }}>{ message ? message : "No message" }</div>
      </div>
      <Footer />
    </div>
  )
};