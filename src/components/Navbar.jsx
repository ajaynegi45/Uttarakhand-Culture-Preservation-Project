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
                        <li>
                            <Link className="navbar-link" to={"/login"}>
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="navbar-backside-frame"></div>
        </>
    );
}
export default Navbar;


