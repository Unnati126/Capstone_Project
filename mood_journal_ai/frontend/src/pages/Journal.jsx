import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Footer from "../components/Footer.jsx";
import "./Journal.css";
import axios from "axios"; 

// Journal component that allows users to log their daily mood and reflections
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
  const [editingId, setEditingId] = useState(null); 

  const fetchEntries = async () => {
  try {
    const res = await API.get('/moods');
    setEntries(res.data); 
  } catch (err) {
    console.error("Failed to fetch entries:", err.response?.data || err.message);
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
    const token = localStorage.getItem("token");
    const entry = { ...ratings, note };

    try {
      if (editingId) {
        // update existing entry
        await axios.put(`http://localhost:5000/api/moods/${editingId}`, entry, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Entry updated successfully!");
        setEditingId(null);
      } else {
        // create new entry 
        await axios.post("http://localhost:5000/api/moods/add", entry, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Your mood check-in has been submitted!");
      }

      setNote("");
      setRatings({
        mood: 1,
        stress: 1,
        energy: 1,
        motivation: 1,
        sleep: 1,
      });

      fetchEntries();
    } catch (err) {
      console.error("Submission error:", err);
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

  const handleEdit = (entry) => {
    setEditingId(entry._id);
    setRatings({
      mood: entry.mood,
      stress: entry.stress,
      energy: entry.energy,
      motivation: entry.motivation,
      sleep: entry.sleep,
    });
    setNote(entry.note);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="journal-page">
     <div className="journal-wrapper">

      <form className="journal-container" onSubmit={handleSubmit}>
        <h2 className="journal-heading">
          {editingId ? "Update Mood Entry" : "Daily Mood Check-In"}
        </h2>

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
          {editingId ? "Update Entry" : "Submit"}
        </button>

        <button
          type="button"
          className="next-btn"
          onClick={() => navigate("/dashboard")}>
          Next
        </button>
      </form>

      <div className="entries-section">
        <h2>Your Previous Entries</h2>
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
              <button onClick={() => handleEdit(entry)}>✎</button>
              <button onClick={() => handleDelete(entry._id)}>✗</button>
            </div>
          ))
        )}
      </div>
      </div>

      <Footer />
    </div>
  );
}