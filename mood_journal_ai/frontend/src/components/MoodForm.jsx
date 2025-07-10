import { useState } from "react";
import API from "../api";
import "./MoodForm.css";

// This component allows users to submit their mood and related reflections
export default function MoodForm() {
  const [form, setForm] = useState({
    mood: 1,
    stressLevel: 1,
    energyLevel: 1,
    motivationLevel: 1,
    sleepQuality: 1,
    notes: "",
  });

  // Handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "notes" ? value : Number(value),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await API.post("/moods", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Mood entry saved!");
      setForm({
        mood: 1,
        stressLevel: 1,
        energyLevel: 1,
        motivationLevel: 1,
        sleepQuality: 1,
        notes: "",
      });
    } catch (err) {
      console.error("Error saving mood:", err);
      alert("Failed to save mood.");
    }
  };

  // Render the mood form with input fields for mood ratings and notes
  return (
    <form className="mood-form" onSubmit={handleSubmit}>
      <label>1. How are you feeling today?</label>
      <input
        type="range"
        name="mood"
        min="1"
        max="5"
        value={form.mood}
        onChange={handleChange}
      />

      <label>2. How stressed do you feel?</label>
      <input
        type="range"
        name="stressLevel"
        min="1"
        max="5"
        value={form.stressLevel}
        onChange={handleChange}
      />

      <label>3. How energetic are you right now?</label>
      <input
        type="range"
        name="energyLevel"
        min="1"
        max="5"
        value={form.energyLevel}
        onChange={handleChange}
      />

      <label>4. How motivated do you feel?</label>
      <input
        type="range"
        name="motivationLevel"
        min="1"
        max="5"
        value={form.motivationLevel}
        onChange={handleChange}
      />

      <label>5. How well did you sleep last night?</label>
      <input
        type="range"
        name="sleepQuality"
        min="1"
        max="5"
        value={form.sleepQuality}
        onChange={handleChange}
      />

      <label>📝 Write anything you want to reflect on:</label>
      <textarea
        name="notes"
        placeholder="Your thoughts, reflections, or anything you'd like to note..."
        value={form.notes}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}