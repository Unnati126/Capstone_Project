import Sentiment from 'sentiment';

// This module uses the Sentiment library to analyze the sentiment of text input.
const sentiment = new Sentiment();

// This function analyzes the sentiment of a given text and returns the mood as 'positive', 'negative', or 'neutral'.
export function analyzeMood(text) {
  const result = sentiment.analyze(text);
  if (result.score > 0) return 'positive';
  else if (result.score < 0) return 'negative';
  else return 'neutral';
}