import "./Tips.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContextInstance";

// Tips component that provides useful tips and a logout option
export default function Tips() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    logout();
    setShowPopup(true);
  };

  // Redirect to home page after logout
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        window.location.href = "http://localhost:5173/";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="tips-page">
      <div className="tips-content">
        <h2>Useful Tips for You</h2>
        <ul>
          <li>🌿 Breathe deeply and relax your shoulders</li>
          <li>🚶‍♀️ Take a 10-minute walk outdoors</li>
          <li>✨ Write down what you're grateful for</li>
          <li>📵 Disconnect from screens for a while</li>
          <li>🧘‍♂️ Try a short meditation or mindfulness exercise</li>
          <li>🙏🏻 Pray to god and be thankful</li>
          <li>🎵 Listen to your favorite calming music</li>
        </ul>
      </div>

      <br />
      <div className="breathing-guide">
        <p>Follow this exercise to start...</p>
        <div className="breath-circle"></div>
        <p className="breath-text">Breathe In... Breathe Out...</p>
      </div>
      <br />

      <p className="sign-off">
        Remember: You’re doing better than you think.<br />
        Come back tomorrow and take another step toward a happier you!
      </p>

      <button type="button" className="back-btn" onClick={() => navigate("/dashboard")}>
        Back
      </button>

      <button type="button" className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {showPopup && (
        <div className="logout-popup">
          <div className="popup-content">
            <h3>Logged out successfully</h3>
            <p>Visit again!</p>
          </div>
        </div>
      )}
    </div>
  );
}