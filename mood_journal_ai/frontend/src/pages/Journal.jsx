import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Footer from "../components/Footer.jsx";
import "./Journal.css";
import axios from "axios"; 

export default function Journal() {
  const navigate = useNavigate();

  const [ratings, setRatings] = useState({
    mood: 1,
    stress: 1,
    energy: 1,
    motivation: 1,
    sleep: 1,
  });

  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);

  // Fetch previous mood entries
  const fetchEntries = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/moods", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries(res.data);
    } catch (err) {
      console.error("Error fetching moods:", err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleRatingChange = (e) => {
    setRatings({ ...ratings, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const entry = { ...ratings, note };

    try {
      const token = localStorage.getItem("token");
      /*await API.post("/moods"*/ 
      await axios.post("http://localhost:5000/api/moods/add", entry, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Your mood check-in has been submitted!");
      setNote(""); // Reset form
      setRatings({
        mood: 1,
        stress: 1,
        energy: 1,
        motivation: 1,
        sleep: 1,
      });
      fetchEntries(); // Refresh entries
    } catch (err) {
      console.error("Error submitting mood:", err);
      alert("Failed to submit mood entry.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/moods/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEntries();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="journal-page">
      <form className="journal-container" onSubmit={handleSubmit}>
        <h2 className="journal-heading">Daily Mood Check-In</h2>

        <div className="rating-question">
          <label>1. How are you feeling today?</label>
          <input
            type="range"
            min="1"
            max="5"
            name="mood"
            value={ratings.mood}
            onChange={handleRatingChange}
          />
        </div>

        <div className="rating-question">
          <label>2. How stressed do you feel?</label>
          <input
            type="range"
            min="1"
            max="5"
            name="stress"
            value={ratings.stress}
            onChange={handleRatingChange}
          />
        </div>

        <div className="rating-question">
          <label>3. How energetic are you right now?</label>
          <input
            type="range"
            min="1"
            max="5"
            name="energy"
            value={ratings.energy}
            onChange={handleRatingChange}
          />
        </div>

        <div className="rating-question">
          <label>4. How motivated do you feel?</label>
          <input
            type="range"
            min="1"
            max="5"
            name="motivation"
            value={ratings.motivation}
            onChange={handleRatingChange}
          />
        </div>

        <div className="rating-question">
          <label>5. How well did you sleep last night?</label>
          <input
            type="range"
            min="1"
            max="5"
            name="sleep"
            value={ratings.sleep}
            onChange={handleRatingChange}
          />
        </div>

        <div className="note-box">
          <label>📝 Write anything you want to reflect on:</label>
          <textarea
            placeholder="Your thoughts, reflections, or anything you’d like to note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>

        <button
          type="button"
          className="next-btn"
          onClick={() => navigate("/dashboard")}
        >
          Next
        </button>
      </form>

      <div className="entries-section">
        <h3>Your Previous Entries</h3>
        {entries.length === 0 ? (
          <p>No mood entries yet.</p>
        ) : (
          entries.map((entry) => (
            <div key={entry._id} className="entry-card">
              <p>😌 Mood: {entry.mood}</p>
              <p>😰 Stress: {entry.stress}</p>
              <p>⚡ Energy: {entry.energy}</p>
              <p>🔥 Motivation: {entry.motivation}</p>
              <p>🛌 Sleep: {entry.sleep}</p>
              <p>📝 {entry.note}</p>
              <button onClick={() => handleDelete(entry._id)}>Delete</button>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}