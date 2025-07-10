import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Journal from "./pages/Journal.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tips from "./pages/Tips.jsx";


// the main application component that sets up the routing for the app
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


// entry point for the React application 
export default App;