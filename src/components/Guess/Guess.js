import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {value?.length > 0 &&
        value.map((guess, index) => (
          <span
            className={`cell ${guess.status}`}
            key={`${guess.letter}-${index}`}
          >
            {guess.letter}
          </span>
        ))}
      {!value && (
        <>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </>
      )}
    </p>
  );
}

export default Guess;
