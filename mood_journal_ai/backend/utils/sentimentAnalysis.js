import Sentiment from "sentiment";

// Initialize sentiment analysis library
const sentiment = new Sentiment();

// Utility function to calculate the combined mood sentiment
export function analyzeMood({ mood, stress, energy, motivation, sleep, note }) {
  const textScore = sentiment.analyze(note).score;

  const numericScore = (mood + energy + motivation + sleep - stress) / 5;

  const combinedScore = textScore + numericScore;

  console.log("Text score:", textScore, "Numeric score:", numericScore, "Combined:", combinedScore);
  if (combinedScore >= 1.5) return "positive";
  else if (combinedScore <= -1) return "negative";
  else return "neutral";
}