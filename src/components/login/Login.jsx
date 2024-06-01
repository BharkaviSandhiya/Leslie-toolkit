import React, { useState } from "react";
import "./Login.scss";
import "boxicons";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      // Set email in local storage
      localStorage.setItem("email", email);
      
      // Redirect to dashboard
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">
          <span>Welcome to</span>
          <span>Leslie's Sales Toolkit!</span>
        </h2>
        <div className="formName">
          <span className="formSpan">
            Hey, please enter your details to get sign in to your account.
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="input"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="input"
          />
          {error && <p className="error">{error}</p>}
          <button className="button">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
