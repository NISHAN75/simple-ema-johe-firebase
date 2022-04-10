import React, { useState } from "react";
import {useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from '../../firebase.init';

const Login = () => {
  const [email ,setEmail]=useState('');
  const [passwords,setPasswords]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [
    signInWithEmailAndPassword,
    user,loading,error
  ] = useSignInWithEmailAndPassword(auth);
  const navigate=useNavigate();

  console.log(error?.message)
  const handleEmailBlur=event =>{
    setEmail(event.target.value)
  }
  const handlePasswordsBlur=event =>{
    setPasswords(event.target.value)
  }
  const handleConfoirmPasswordsBlur= event =>{
    setConfirmPassword(event.target.value)
  }
    
   if(user){
     navigate('/shop');
   }

  const  handleUserSignIn =event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email,passwords)
    .then(()=>{

    })
    .catch(error=>{
        console.log(error)
    })

  }






  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="" required id="" />
            <br />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Passwords</label>
            <input onBlur={handleConfoirmPasswordsBlur} type="password" name="" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordsBlur}  type="password" name="" id="" />
          </div>
           <p>{error?.message}</p>
           {
             loading && <p>Loading...</p>
           }
          <input className="login-btn" required type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john? <Link className="form-link" to='/signup'>Create a New Account</Link>
        </p>

        <button>Google login</button>
      </div>
    </div>
  );
};

export default Login;
