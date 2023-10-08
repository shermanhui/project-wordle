import React from "react";

function Guess({ word }) {
  return (
    <p className="guess">
      {word?.length > 0 &&
        word.split('').map((letter, index) => <span className="cell" key={`${letter}-${index}`}>{letter}</span>)}
      {!word && (
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
