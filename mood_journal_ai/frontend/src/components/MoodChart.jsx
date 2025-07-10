import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// This component renders a line chart to visualize mood data over time.
export default function MoodChart({ moods }) {
  const data = {
    labels: moods.map(m => new Date(m.createdAt).toLocaleDateString()),
    datasets: [{
      label: "Sentiment",
      data: moods.map(m => m.sentiment === "positive" ? 1 : m.sentiment === "negative" ? -1 : 0),
      borderColor: "blue"
    }]
  };

  return <Line data={data} />;
}