import React from 'react';
import {Link} from "react-router-dom";
import Linguistic from "../assets/images/Linguistic.webp";

function Card() {
    return (
            <div className="explore-card-list">
                <div className="explore-card">
                    <Link to={"/language"} className="explore-card-link" >
                        <div className="explore-card-image-container">
                            <img src={Linguistic} alt="Linguistic Survey of India Book Image"
                                 className="explore-card-image" loading="lazy" decoding="async" />
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Language</p>
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default Card;