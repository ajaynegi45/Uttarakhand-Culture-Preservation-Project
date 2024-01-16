
import "./navbar.css"
function Navbar() {
    return (
        <>
            <header className="navbar-header">
                <h1 className="title">Dadi</h1>

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


