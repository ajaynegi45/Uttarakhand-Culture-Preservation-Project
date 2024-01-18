import React from 'react';
import {Link} from "react-router-dom";
function Language() {
    return (
        <div>
            <br/>
            <Link to="/language/kumaoni">Kumaoni</Link>
            <br/>
            <br/>
            <Link to="/language/garhwali">Garhwali</Link>

        </div>
    );
}

export default Language;