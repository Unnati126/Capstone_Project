import "./Tips.css";

// Tips component that provides useful tips for mental well-being
export default function Tips() {
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
    </div>
  );
}

 /*🩵*/