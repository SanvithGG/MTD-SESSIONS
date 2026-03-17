import { useState } from "react";
import "./Calculate.css";

function Calculate() {

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const calculate = () => {
    try {
      const res = eval(expression);
      setResult(res);
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calc-wrapper">

      <h2 className="calc-title">Calculator</h2>

      <h3 className="calc-expression">{expression}</h3>
      <h1 className="calc-result">{result}</h1>

      <div className="calc-buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="btn-operator" onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="btn-operator" onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="btn-operator" onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button className="btn-equals" onClick={calculate}>=</button>
        <button className="btn-clear" onClick={clear}>C</button>
        <button className="btn-operator" onClick={() => handleClick("/")}>/</button>
      </div>

    </div>
  );
}

export default Calculate;