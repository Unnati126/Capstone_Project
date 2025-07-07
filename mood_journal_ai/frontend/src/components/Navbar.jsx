import { Link } from "react-router-dom";
import "./Navbar.css"; // optional for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tips">Tips</Link></li>
      </ul>
    </nav>
  );
}


/*import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextInstance";

export default function Navbar() {
    const { token, logout } = useContext(AuthContext);
    return (
    <nav>
        <Link to ="/">Home</Link>  |
        {token ? (
            <>
                <Link to="/journal">Journal</Link>  |
                <Link to="/dashboard">Dashboard</Link>  |
                <Link to="/tips">Tips</Link>  |
                <button onCLick={logout}>Logout</button>
            </>
        ) : (
            <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </>
        )}
    </nav>
    );
}*/