import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import MoodChart from "../components/MoodChart.jsx";
import Footer from "../components/Footer.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const res = await API.get("/moods");
        setMoods(res.data);
      } catch (err) {
        console.error("Error loading mood data", err);
      }
    };

    fetchMoods();
  }, []);

  return (
      <div className="dashboard-page">
      <div className="dashboard-content">
      <div className="dashboard-box">
        <h2>Your Mood Sentiment Chart</h2>
        <div className="chart-container">
          <MoodChart moods={moods} />
        </div>
      </div>

      <div className="dashboard-buttons">
        <button type="button" className="back-btn" onClick={() => navigate("/journal")}>
          Back
        </button>

        <button className="next-btn" onClick={() => navigate("/tips")}>
          Next
        </button>
      </div>
      </div>

      <Footer />
    </div>
  );
}