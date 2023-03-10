const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};

function Keyboard({
  activeLetters,
  inactiveLetters,
  disabled = false,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className="keyboard-wrapper">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`keyboard-button ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            } }`}
            disabled={isActive || isInactive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
export default Keyboard;
