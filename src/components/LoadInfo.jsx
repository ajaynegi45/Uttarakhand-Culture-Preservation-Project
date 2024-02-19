import { useState, useEffect } from "react";
import "../components/loadinfo.css";
import {Link} from "react-router-dom";

function LoadInfo() {
    const [isVisible, setIsVisible] = useState(true);
    const [load, setLoad] = useState(false);
    let style = { display: "none" };

    useEffect(() => {
        const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
        if (!hasVisitedBefore) {
            setTimeout(() => {
                setLoad(true);
                localStorage.setItem("hasVisitedBefore", true);
            }, 2000);
        }
    }, []);

    if (load) {
        style = { display: "block" };
    }

    const handleClose = () => {
        setIsVisible(false);
    };

    return isVisible ? (
            <div className="load-info-container" style={style}>
                <div>
                    <h3>Welcome to Uttarakhand Culture</h3>
                    <p>If you encounter any inaccuracies or discrepancies in our content, please don't hesitate to contact us through our <Link to={"/contact"}>contact form</Link>. Your valuable feedback will help us in updating and enhancing our information. We appreciate your understanding and support.</p>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
    ) : null;
}

export default LoadInfo;
