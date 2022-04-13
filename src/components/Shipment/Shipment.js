import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [address, setAddress] = useState("");
  const [phone, setPHone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur=event =>{
    setEmail(event.target.value)
  }
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPHone(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const shipping={name,address,email,phone};
    console.log(shipping)
  };

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Shipping information</h1>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              required
              id=""
            />
            <br />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input

              value={user?.email}
              readOnly 
              onBlur={handleEmailBlur}
              type="email"
              name=""
              required
              id=""
            />
            <br />
          </div>
          <div className="input-group">
            <label htmlFor="text">Your Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="number">Your Phone</label>
            <input onBlur={handlePhoneBlur} type="number" name="" id="" />
          </div>
          <input
            className="login-btn"
            required
            type="submit"
            value="Add Shipping"
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
