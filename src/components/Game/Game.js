import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const handleSubmitGuess = (guess) => {
    const checkedGuess = checkGuess(guess, answer);

    if (checkedGuess.every((value) => value.status === "correct")) {
      setIsCorrect(true)
      setIsGameOver(true)
    }

    setGuesses([...guesses, checkedGuess]);

    if (guesses.length + 1 === 6) {
      setIsCorrect(false)
      setIsGameOver(true)
      return
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isDisabled={isGameOver} />
      {isGameOver && (
        <div className={`${isCorrect ? "happy" : "sad"} banner`}>
            {isCorrect ? (
              <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>{guesses.length} guesses</strong>
              </p>
            ) : (
              <p>
                Sorry, the correct answer is{" "}
                <strong>{answer.toUpperCase()}</strong>.
              </p>
            )}
        </div>
      )}
    </>
  );
}

export default Game;
