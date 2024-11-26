import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/count">Counter</Link></li>
                    <li><Link to="/color-pick">Color Picker</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
