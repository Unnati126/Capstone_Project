import { Link } from "react-router-dom";
import "./Navbar.css";

// Navbar component that provides navigation links to different pages of the application
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Mood Journal AI</h1>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tips">Tips</Link>
      </div>
    </nav>
  );
}