import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Footer from "../components/Footer.jsx";
import "./Home.css";

export default function Home() {

  return (
    <div className="home-page">
     <div className="home-content">
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

        <div className="home-subtext">
            Track your mood. <br /> Understand yourself. Grow.
        </div>
    </div>
    <Footer />
    </div>
  );
}