import { useState } from "react"

function CounterButton(){
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    const handleReset = () =>{
        setCount(0)
    }
    
    return (
        <div className="button-container">
            <button className="counter" onClick={handleClick}>{count}</button>
            <button className="reset" onClick={handleReset}>¡Haz reset!</button>
        </div>
    )
}

export default CounterButton