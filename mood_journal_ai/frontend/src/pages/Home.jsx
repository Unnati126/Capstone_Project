import { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import "./Home.css";

export default function Home() {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div className="home-container">
      <h1>Welcome to Mood Journal AI</h1>

      <div className="button-group">
        <button onClick={() => setActiveForm("login")}>Login</button>
        <button onClick={() => setActiveForm("register")}>Register</button>
      </div>

      {activeForm === "login" && <Login />}
      {activeForm === "register" && <Register />}
    </div>
  );
}


/*import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Mood Journal AI</h1>
      <div className="auth-buttons">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/register" className="home-button">Register</Link>
      </div>
    </div>
  );
}*/