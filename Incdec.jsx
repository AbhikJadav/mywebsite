import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Incdec=()=>{

    const [count,setcount]=useState(0);
    const add=()=>{
        setcount(count+1);
    }
    const sub=()=>{
        if(count<=0)
        {
            alert("Sorry,Zero Limit Reached");
        }
        else
        {
            setcount(count-1);
        }
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                <h1 className="heading">{count}</h1>
                <div className="button">
                <button className="btn btn-outline-primary" onClick={add}>Increment</button>
                {"  "}<button className="btn btn-outline-secondary" onClick={sub}>Decrement</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default Incdec;