import { useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContextInstance";

export default function Login() {
    const { login } = useContext(AuthContext);
    const [form, setForm] = useState({ email: "", password: "" });
    
    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await API.post("/auth/login", form);
        login(res.data.token);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
}