//import { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import "./Home.css";

export default function Home() {
  //const [activeForm, setActiveForm] = useState(null);

  return (
    <div className="home-page">
      <div className="form-wrapper">
        
        <div className="login-box">
            <h2>Login</h2>
            <Login />
          </div>

          <div className="register-box">
            <h2>Register</h2>
            <Register />
          </div>
        </div>
    </div>

    /*<div className="auth-section">
        <div className="auth-toggle-buttons">
          <button onClick={() => setActiveForm("login")}>Login</button>
          <button onClick={() => setActiveForm("register")}>Register</button>
        </div>

        <div className="form-box">
          {activeForm === "login" && <Login />}
          {activeForm === "register" && <Register />}
        </div>
      </div>
    </div> */
  );
}