import { Link } from "react-router-dom";
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
}


/*export default function Home() {
    return <h1>Welcome to Mood Journal AI</h1>;
}*/