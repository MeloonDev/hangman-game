function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t", "s"];

  return (
    <div className="word-wrapper">
      {word.split("").map((letter, index) => (
        <span className="word-letter" key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
export default HangmanWord;
