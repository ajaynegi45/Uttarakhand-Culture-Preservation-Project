import React from 'react';
import { Link } from "react-router-dom";
import "./garhwali.css";

function Garhwali() {
    return (
        <div className={"garhwali-language-container"}>

            <div>
                <p>We are currently in the process of working on it. Meanwhile, you can explore the Kumaoni language. </p>
                <p>If you're a coder, you can contribute to this project <Link to={"https://github.com/ajaynegi45"}>Github Link</Link>.</p>
                <p>If you're not a coder, you can help by writing articles, providing assistance, or giving feedback to this <a href="mailto:ajaynegi3345@gmail.com">E-mail</a></p>
                <p>Your suggestions and feedback are highly appreciated.</p>

            </div>
        </div>
    );
}

export default Garhwali;
