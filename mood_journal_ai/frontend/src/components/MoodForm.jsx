import { useState } from "react";
import API from "../api";

export default function MoodForm({ onSuccess }) {
  const [moodText, setMoodText] = useState("");
  const [moodEmoji, setMoodEmoji] = useState("😊");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/moods", { moodText, moodEmoji });
    setMoodText("");
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={moodText} onChange={(e) => setMoodText(e.target.value)} required />
      <select value={moodEmoji} onChange={(e) => setMoodEmoji(e.target.value)}>
        <option>😊</option>
        <option>😢</option>
        <option>😡</option>
        <option>😌</option>
        <option>😕</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}