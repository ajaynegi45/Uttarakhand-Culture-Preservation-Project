import React from 'react';
import {Link} from "react-router-dom";

function Contribution() {

    const check = {
        margin:"20px",
        color:"white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '40vh',
    }
    return (
        <section>
            <div style={check}>
                <h3>Currently working on this page</h3>
                <p>Mean while checkout <Link to={"https://github.com/ajaynegi45/Uttarakhand-Culture-Preservation-Project"} >Github</Link></p>
            </div>
        </section>
    );
}

export default Contribution;