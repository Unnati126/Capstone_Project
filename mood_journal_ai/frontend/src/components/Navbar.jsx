import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Navbar() {
    const { token, logout } =useContext(AuthContext);
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
}