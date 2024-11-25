import { useState } from "react";
import '../color-picker.css';

function ColorPick () {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorPick (e) {
        setColor(e.target.value);
    }
    return (
        <div>
            <h1>Pick a colour!</h1>
            <div className="color-square" style={{backgroundColor: color}}></div>
            <input type="color" onChange={handleColorPick} />
            <p>Your color is {color}</p>

        </div>
    );
}
export default ColorPick;