import { useState } from "react";

function Count() {
    const [number, setNumber] = useState (0);

    const increment = () => {
        setNumber(number + 1)
    };
    const decrement = () => {
        setNumber(number - 1);
    };
    const reset = () => {
        setNumber (0);
    };
    return (
        <div>
            <h3>{number}</h3>
            <button className="increment" onClick={increment}>Click to increment</button>
            <button className="decrement" onClick={decrement}>Click to decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
}

export default Count;