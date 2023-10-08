import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  const onSubmitGuess = (e) => {
    e.preventDefault();
    console.info({ guess });
    handleSubmitGuess(guess)
    setGuess("");
  };

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase())
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={handleChange}
        value={guess}
        minLength={5}
        maxLength={5}
        pattern={"[a-zA-Z]{5}"}
        title="5 letter word"
      ></input>
    </form>
  );
}

export default GuessInput;
