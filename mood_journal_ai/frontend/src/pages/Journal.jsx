import { useState } from "react";
import Footer from "../components/Footer.jsx";
import "./Journal.css";

export default function Journal() {
  const [ratings, setRatings] = useState({
    mood: 1,
    stress: 1,
    energy: 1,
    motivation: 1,
    sleep: 1,
  });

  const [note, setNote] = useState("");

  const handleRatingChange = (e) => {
    setRatings({ ...ratings, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { ...ratings, note };
    console.log("Submitted Entry:", entry);
    alert("Your mood check-in has been submitted!");
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

        <button className="submit-btn" type="submit">Submit</button>
      </form>

      <Footer />
    </div>
  );
}