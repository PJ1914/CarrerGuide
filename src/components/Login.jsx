import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Label.css";
import loginImage from "../assets/image 1.jpeg"; 

function Login() {
  const [userdata, setuserdata] = useState(null);

  const handlesubmit = (id, password) => {
    setuserdata({ id, password });
  };

  return (
    <div className="login-container">
      {/* Left Side - Image */}
      <div className="login-image">
        <img src={loginImage} alt="Login Visual" /> 
      </div>

      {/* Right Side - Login Form */}
      <div className="login-form">
        <h1 className="H1">Login for your Career Guidance AI</h1>
        <Form onSubmit={handlesubmit} />

        {userdata && (
          <div>
            <p>
              Your ID is: <strong>{userdata.id}</strong>
            </p>
            <p>
              Your Password is: <strong>{userdata.password}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Form({ onSubmit }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleformsubmit = (e) => {
    e.preventDefault();
    onSubmit(id, password);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/user", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const login = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div>
      <form className="form_container" onSubmit={handleformsubmit}>
        <div className="Label">
          <label htmlFor="user_id">User ID: </label>
          <input
            type="text"
            id="user_id"
            className="input-field"
            placeholder="Enter your ID"
            onChange={(e) => setId(e.target.value)}
          />

          <label htmlFor="user_password">User Password: </label>
          <input
            type="password"
            id="user_password"
            className="input-field"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button id="submit">Submit</button>
      </form>
      <button onClick={login}>Google</button>
    </div>
  );
}

export default Login;
