import { useState } from "react";
import axios from "axios";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    axios.post("http://localhost:8080/api/add", {
      a: Number(a),
      b: Number(b)
    })
    .then((res) => {
      console.log(res.data);
      setResult(res.data.result);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      
      <h1>Addition App</h1>

      <input
        type="number"
        placeholder="Enter A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAdd}>Add</button>

      <br /><br />

      {result !== null && <h2>Result: {result}</h2>}

    </div>
  );
}

export default App;