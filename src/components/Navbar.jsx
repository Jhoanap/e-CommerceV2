import { Link } from "react-router-dom";
import"./Navbar.css"

export default function Navbar () {
        return (
            <nav className="navbar">
                <div>
                    <img className="logo" src="/src/assets/bus-logo.jpg" alt="logo" />
                </div>
                <Link to="/">Home</Link>  
                <Link to ="/products">Products</Link>  
                <Link to="/contact">Contact Us</Link>
            </nav>
        );
}