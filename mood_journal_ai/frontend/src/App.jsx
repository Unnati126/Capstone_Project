import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar.jsx";
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
        <Route path="/" element={<><Home /><Navbar /></>} />
        <Route path="/login" element={<><Home /><Navbar /><Login /></>} />
        <Route path="/register" element={<><Home /><Navbar /><Register /></>} />
        <Route path="/journal" element={<><Home /><Navbar /><Journal /></>} />
        <Route path="/dashboard" element={<><Home /><Navbar /><Dashboard /></>} />
        <Route path="/tips" element={<><Home /><Navbar /><Tips /></>} />
      </Routes>
    </BrowserRouter>
  );
}


// entry point for the React application
export default App;