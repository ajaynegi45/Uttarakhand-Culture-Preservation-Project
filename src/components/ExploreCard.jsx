import "./explorecard.css"
import {Link} from "react-router-dom";

import aipanArt from '../assets/images/aipanart.png';
import Linguistic from '../assets/images/Linguistic.png';
import Food1 from '../assets/images/foodUk.jpg';
import Temple from '../assets/images/Temple.jpg';
import dress from '../assets/images/dress.png';
import dressArt from '../assets/images/dressArt.jpg';
import Dhol from '../assets/images/Dhol.png'
import "./explorecard.css"

function ExploreCard() {

    function showAlert() {
        alert("We are currently working on it. You can come back after a few days to check.\nCurrently, only the Language card is live, you can check it out. \n\nThank you for your patience! ❤️");
    }

    return (
        <>

            <section className="explore-section">
                <h1 className="explore-uttarakhand">Explore Uttarakhand</h1>

                <div className="explore-card-list">

                    <div className="explore-card">
                        <Link to={"/language"} className="explore-card-link">
                            <div className="explore-card-image-container">
                                <img src={Linguistic} alt="Linguistic Survey of India Book Image"
                                     className="explore-card-image"/>
                            </div>
                            <div className="explore-card-text-container">
                                <p className="explore-card-text">Language</p>
                            </div>
                        </Link>
                    </div>

                    <div className="explore-card">
                        <Link to={"#"} className="explore-card-link" onClick={showAlert} >
                            <div className="explore-card-image-container">
                                <img src={Food1} alt="Linguistic Survey of India Book Image"
                                     className="explore-card-image"/>
                            </div>
                            <div className="explore-card-text-container">
                                <p className="explore-card-text">Cuisine</p>
                            </div>
                        </Link>
                    </div>

                    <div className="explore-card">
                        <Link to={"#"} className="explore-card-link"  onClick={showAlert} >
                            <div className="explore-card-image-container">
                                <img src={Temple} alt="Linguistic Survey of India Book Image"
                                     className="explore-card-image"/>
                            </div>
                            <div className="explore-card-text-container">
                                <p className="explore-card-text">Temples</p>
                            </div>
                        </Link>
                    </div>

                    <div className="explore-card">
                        <Link to={"#"} className="explore-card-link"  onClick={showAlert} >
                            <div className="explore-card-image-container">
                                <img src={dressArt} alt="Linguistic Survey of India Book Image"
                                     className="explore-card-image"/>
                            </div>
                            <div className="explore-card-text-container">
                                <p className="explore-card-text">Traditional Dresses</p>
                            </div>
                        </Link>
                    </div>

                    <div className="explore-card">
                        <Link to={"#"} className="explore-card-link"  onClick={showAlert} >
                            <div className="explore-card-image-container">
                                <img src={aipanArt} alt="Linguistic Survey of India Book Image"
                                     className="explore-card-image"/>
                            </div>
                            <div className="explore-card-text-container">
                                <p className="explore-card-text">Art</p>
                            </div>
                        </Link>
                    </div>

                    <div className="explore-card">
                        <Link to={"#"} className="explore-card-link"  onClick={showAlert} >
                            <div className="explore-card-image-container">
                                <img src={dress} alt="Linguistic Survey of India Book Image"
                                     className="explore-card-image"/>
                            </div>
                            <div className="explore-card-text-container">
                                <p className="explore-card-text">Dance</p>
                            </div>
                        </Link>
                    </div>

                    <div className="explore-card">
                        <Link to={"#"} className="explore-card-link"  onClick={showAlert} >
                            <div className="explore-card-image-container">
                                <img src={Dhol} alt="Linguistic Survey of India Book Image"
                                     className="explore-card-image"/>
                            </div>
                            <div className="explore-card-text-container">
                                <p className="explore-card-text">Music</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ExploreCard;