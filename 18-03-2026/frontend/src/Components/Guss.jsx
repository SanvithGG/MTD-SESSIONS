import { useState } from "react";

function Guess() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const userNumber = Number(input);

    if (!userNumber) {
      setMessage("⚠️ Enter a valid number");
      return;
    }

    if (userNumber === randomNumber) {
      setMessage("🎉 Correct!");
    } else if (userNumber > randomNumber) {
      setMessage("📉 Too high!");
    } else {
      setMessage("📈 Too low!");
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setInput("");
    setMessage("");
  };

  return (
    <div>
      <h2>Guess the Number (1–10)</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
      />

      <button onClick={handleGuess}>Guess</button>

      <h3>{message}</h3>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default Guess;