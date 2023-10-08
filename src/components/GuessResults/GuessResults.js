import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.length > 0 &&
        guesses.map((guess, index) => <div className="guess" key={`${guess}-${index}`}>{guess}</div>)}
    </div>
  );
}

export default GuessResults;
