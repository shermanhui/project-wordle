import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  let numRows = NUM_OF_GUESSES_ALLOWED - guesses?.length

  const placeholderRows = range(0, numRows)

  return (
    <div className="guess-results">
      {guesses.length > 0 &&
        guesses.map((guess, index) => <Guess key={`${guess}-${index}`} word={guess} />)}
      {placeholderRows.length > 0 && placeholderRows.map((row, index) => <Guess key={`${row}-${index}`} />)}
    </div>
  );
}

export default GuessResults;
