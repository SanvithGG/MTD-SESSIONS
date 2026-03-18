import { useState } from "react";

function Prime() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkPrime = () => {
    const n = Number(number);

    if (n <= 1) {
      setResult("❌ Not Prime");
      return;
    }

    let isPrime = true;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    setResult(isPrime ? "✅ Prime" : "❌ Not Prime");
  };

  return (
    <div>
      <h2>Prime Checker</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number"
      />

      <button onClick={checkPrime}>Check</button>

      <h3>{result}</h3>
    </div>
  );
}

export default Prime;