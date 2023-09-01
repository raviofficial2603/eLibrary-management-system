import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Books from './components/Books';
import { useState } from 'react';
import UserContext from './components/UserContext';

function App() {
  const [loggedIn,setIsLoggedIn]=useState()
  function handleLogin() {
    console.log('akjsdfklja;lsjdf')
    setIsLoggedIn(true)
    setIsLoggedIn(true)
    setIsLoggedIn(true)
    setIsLoggedIn(true)
    setIsLoggedIn(true)
    console.log(loggedIn)
  }
  function handleLogout() {
    setIsLoggedIn(false)
  }
  return (
    <div className="App"> 
      {/* <RegisterForm/>
      <LoginForm/> */}
      <UserContext.Provider
        value={{
          loggedIn,
          handleLogout,
          handleLogin,
          
        }}
      >
      <Routes>
    <Route
      exact
      path="/"
      element={
        <><MyNavbar/> <Home/></>
      }
    />
    <Route
      exact
      path="/register"
      element={
        <><MyNavbar/><RegisterForm/></>
      }
    />
    <Route
      exact
      path="/login"
      element={
       <><MyNavbar/> <LoginForm/></>
      }
    /><Route
    exact
    path="/books"
    element={
     <><MyNavbar/> <Books/></>
    }
  />
    </Routes>
    </UserContext.Provider>
    </div>
    
  );
}

export default App;
