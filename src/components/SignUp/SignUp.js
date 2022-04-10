import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
  const [email ,setEmail]=useState('');
  const [passwords,setPasswords]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const[error,setError]=useState('');
  const [createUserWithEmailAndPassword ,user]=useCreateUserWithEmailAndPassword(auth);
  const navigate=useNavigate();

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
    navigate('/shop')
  }
const handleCreateUser=event =>{
  event.preventDefault();
  if( passwords !== confirmPassword){
      setError('Your Tow passwords did not match')
      return;

  }
  setError('')
  if(passwords.length <6){
     setError('Passwords Must be 6 characters logger')
     return;
  }
  setError('')
  createUserWithEmailAndPassword(email,passwords);
}


  return (
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title">Login</h1>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="" required id="" />
              <br />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordsBlur} type="password" name="" required id="" />
            </div>
            <div className="input-group">
              <label htmlFor="password"> Confoirm Your Password</label>
              <input onBlur={handleConfoirmPasswordsBlur} type="password" name="" required id="" />
            </div>
            {
              <p>{error}</p>
            }
            <input className="login-btn" type="submit" value="Submit" />
          </form>
          <p>
            already Have Account ?
            <Link className="form-link" to="/login">
              Go Login in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
