import { useState } from "react";
import { z } from "zod";

function ListVal() {
  const [percent, setpercent] = useState("");
  const [grade, setgrade] = useState("");
  const [error, setError] = useState("");

  const schema = z
    .number()
    .refine((val) => !isNaN(val), "Enter a valid number")
    .min(0, "Min 0")
    .max(100, "Max 100");

  const handlegrade = () => {
    const m = Number(percent);

    const result = schema.safeParse(m);

    if (!result.success) {
      setError(result.error.issues[0]?.message || "Invalid input");
      setgrade("");
      return;
    }

    setError("");

    if (m >= 90) setgrade("A");
    else if (m >= 80) setgrade("B");
    else if (m >= 70) setgrade("C");
    else if (m >= 60) setgrade("D");
    else if (m >= 50) setgrade("F");
    else setgrade("FAIL");
  };

  return (
    <div>
      <h1>PERCENTAGE TO GRADE CONVERTER</h1>

      <input
        type="text"
        placeholder="ENTER PERCENTAGE"
        value={percent}
        onChange={(e) => setpercent(e.target.value)}
      />

      <br /><br />

      <button onClick={handlegrade}>SUBMIT</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {grade && <h1>Your Grade is : {grade}</h1>}
    </div>
  );
}

export default ListVal;