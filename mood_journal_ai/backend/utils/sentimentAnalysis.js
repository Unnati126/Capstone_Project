const Sentiment = require('sentiment');
const sentiment = new Sentiment();

// This function analyzes the sentiment of a given text and returns the mood as 'positive', 'negative', or 'neutral'.
function analyzeMood(text) {
    const result = sentiment.analyze(text);
    if (result.score > 0) return 'positive';
    else if (result.score < 0) return 'negative';
    else return 'neutral';
}

// Export the analyzeMood function
module.exports = {analyzeMood};