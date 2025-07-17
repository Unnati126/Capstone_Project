import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// This component renders a line chart showing mood sentiment over time
const sentimentToValue = {
  positive: 1,
  neutral: 0,
  negative: -1
};

const valueToLabel = {
  1: "Positive",
  0: "Neutral",
  "-1": "Negative"
};

export default function MoodChart({ moods }) {
  const chartData = {
    labels: moods.map(m => new Date(m.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: "Mood Sentiment",
        data: moods.map(m => sentimentToValue[m.sentiment] ?? 0),
        borderColor: "#0077b6",
        backgroundColor: "#0077b6",
        fill: false,
        tension: 0.4,
        pointRadius: 5
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        min: -1,
        max: 1,
        ticks: {
          stepSize: 1,
          callback: (value) => valueToLabel[value] || ''
        }
      }
    }
  };

  return <Line data={chartData} options={chartOptions} />;
}