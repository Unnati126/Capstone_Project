import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import MoodChart from "../components/MoodChart.jsx";
import Footer from "../components/Footer.jsx";
import "./Dashboard.css";

// Dashboard component that displays the user's mood history
export default function Dashboard() {
  const navigate = useNavigate();
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    API.get("/moods").then(res => setMoods(res.data));
  }, []);

  return (
     <div className="dashboard-page">
      <h2>Your Mood History</h2>
      <MoodChart moods={moods} />

       <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/journal")}
        >
          Back
        </button>


      <button
        className="next-btn"
        onClick={() => navigate("/tips")}
      >
        Next
      </button>

      <Footer />
    </div>
  );
}