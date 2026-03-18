import { useState } from "react";

function GradingSystem()
{
    const[percent,setpercent]=useState("")
    const[grade,setgrade]=useState("")

    const handlegrade =() =>
    {
        const m=Number(percent)

        if(m<=100 && m>=90)
        {
            setgrade("A")
        }
        else if(m<90 && m>=80)
        {
            setgrade("B")
        }
        else if(m<80 && m>=70)
        {
            setgrade("C")
        }
        else if(m<70 && m>=60)
        {
            setgrade("D")
        }
        else if(m<60 && m>=50)
        {
            setgrade("F")
        }
        else if(m<50 && m>=0)
        {
            setgrade("FAIL")
        }

    }
    return(
    <>
    <h1>PERCENTAGE TO GRADE CONVERTER</h1>
    <input type="text" placeholder="ENTER PERCENTAGE" onChange={(e)=>setpercent(e.target.value)}/>
    <br></br>
    <br></br>
    <button onClick={handlegrade}>SUBMIT</button>
    <h1>Your Grade is : {grade}</h1>
    </>
    );
}
export default GradingSystem;