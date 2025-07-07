import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../context/AuthContextInstance";
import "../pages/Register.css";

export default function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registering:", form);
    try {
      const res = await API.post("/auth/register", form);
      const token = res.data.token;
      login(token); // stores token in context and localStorage
      alert("Registration successful!");
      navigate("/dashboard"); // or wherever you want
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}



/*import { useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContextInstance";
import "../pages/Register.css"

export default function Register() {
    const { login } = useContext(AuthContext);
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await API.post("/auth/register", form);
        login(res.data.token);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
}*/