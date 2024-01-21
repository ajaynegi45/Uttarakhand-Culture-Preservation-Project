import "./navbar.css"
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <>
            <header className="navbar-header">
                <Link to={"/"}>
                    <h1 className="title">UK Culture</h1>
                </Link>

                <nav className="navbar">
                    <ul className="navbar-list">
                        <li><a className="navbar-link" href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
            <div className="navbar-backside-frame"></div>
        </>
    );
}

export default Navbar;


