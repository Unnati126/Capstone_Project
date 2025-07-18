import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink }  from "react-router-dom";

// Navbar component that provides navigation links to different pages of the application
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Mood Journal AI</h1>
      </div>
      <div className="navbar-right">
       
      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Home
      </NavLink>

      <NavLink to="/journal" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Journal
      </NavLink>

      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Dashboard
      </NavLink>

      <NavLink to="/tips" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Tips
      </NavLink>

      </div>
    </nav>
  );
}