const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

function Keyboard() {
  return (
    <div className="keyboard-wrapper">
      {KEYS.map((key) => (
        <button className={`keyboard-button `} key={key}>
          {key}
        </button>
      ))}
    </div>
  );
}
export default Keyboard;
