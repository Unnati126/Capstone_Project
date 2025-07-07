import { useEffect, useState } from "react";
import API from "../api";
import MoodChart from "../components/MoodChart.jsx";

export default function Dashboard() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    API.get("/moods").then(res => setMoods(res.data));
  }, []);

  return (
    <div>
      <h2>Your Mood History</h2>
      <MoodChart moods={moods} />
    </div>
  );
}