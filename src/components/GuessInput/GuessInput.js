import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const onSubmitGuess = (e) => {
    e.preventDefault();
    console.info({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        value={guess}
        minLength={5}
        maxLength={5}
        pattern={"[a-z][A-Z]{5}"}
        title="5 letter word"
      ></input>
    </form>
  );
}

export default GuessInput;
