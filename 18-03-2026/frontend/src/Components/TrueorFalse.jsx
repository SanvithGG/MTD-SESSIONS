import { useState } from "react";

function TrueorFalse()
{
  const [count, setCount] = useState(true);

  const setincrement = () => {
    setCount(!count);
  };
  return(
    <>
     <div>
        <h2>TRUE OR FALSE</h2>
        {count && <div>true</div>}
        {!count && <div>false</div>}
        <button onClick={setincrement}>update state</button> 
     </div>
   </>
  );
}

export default TrueorFalse;