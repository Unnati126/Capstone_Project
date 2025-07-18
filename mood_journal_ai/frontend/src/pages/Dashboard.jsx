import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import MoodChart from "../components/MoodChart.jsx";
import Footer from "../components/Footer.jsx";
import "./Dashboard.css";

// Dashboard component that displays mood statistics and a sentiment chart
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

  // Calculate mood statistics
  const positiveDays = moods.filter(m => m.sentiment === "positive").length;
  const neutralDays = moods.filter(m => m.sentiment === "neutral").length;
  const negativeDays = moods.filter(m => m.sentiment === "negative").length;

  // Weekly streak logic
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);
  const weeklyStreak = moods.filter(
    (m) => new Date(m.createdAt) >= oneWeekAgo
  ).length;

  // Streak message based on the number of entries
  const streakMessage = weeklyStreak >= 3 ? "You're on fire! Keep the streak alive!"
    : weeklyStreak >= 2 ? "Great consistency! Keep it up!"
    : weeklyStreak > 0 ? "Nice start! Try for more tomorrow!"
    : "Let's get started! Your journey awaits.";

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">

        <div className="top-row">
          <div className="dashboard-box">
            <h3>📈 Mood Sentiment Chart</h3>
            <div className="chart-container">
              <MoodChart moods={moods} />
            </div>
          </div>

          <div className="summary-box">
            <h3>📚 Mood Summary</h3>
            <p>Total Entries: {moods.length}</p>
            <p>😊 Positive Days: {positiveDays}</p>
            <p>😐 Neutral Days: {neutralDays}</p>
            <p>😔 Negative Days: {negativeDays}</p>
          </div>
        </div>

        <div className="streak-row">
          <div className="streak-box">
            <h3>🔥Weekly Streak</h3>
            <p>You’ve checked in <strong>{weeklyStreak}</strong> time(s) this week!</p>

          <br/>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${(weeklyStreak / 4) * 100}%` }}></div>
            </div>
              <p className="streak-msg">{streakMessage}</p>
            </div>
          </div>

        <div className="dashboard-buttons">
          <button className="back-btn" onClick={() => navigate("/journal")}>
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