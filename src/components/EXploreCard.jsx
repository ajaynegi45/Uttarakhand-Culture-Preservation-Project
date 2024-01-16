import "./explorecard.css"

import aipanArt from "../assets/images/aipanart.png";

function EXploreCard() {
    return (
        <>

            <section className="explore-section">
                <h1 className="explore-uttarakhand">Explore Uttarakhand</h1>

                <div className="explore-card-list">


                    <div className="explore-card">

                            <img src={aipanArt} alt=""/>
                            <div className="explore-card-description">
                                <p>Architectural Wonders</p>
                            </div>

                    </div>


                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Art and Painting</p>
                        </div>
                    </div>


                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Festivals and Fairs</p>
                        </div>
                    </div>

                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Temples of Uttarakhand</p>
                        </div>
                    </div>

                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Cuisine</p>
                        </div>
                    </div>

                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Traditional Dresses</p>
                        </div>
                    </div>
                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Flora and Fauna</p>
                        </div>
                    </div>
                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Music & Dance</p>
                        </div>
                    </div>
                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Peaks & Mountains</p>
                        </div>
                    </div>

                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>History of Uttarakhand</p>
                        </div>
                    </div>

                    <div className="explore-card">
                        <img src={aipanArt} alt=""/>
                        <div className="explore-card-description">
                            <p>Language</p>
                        </div>
                    </div>


                </div>
            </section>

        </>
    );
}

export default EXploreCard;