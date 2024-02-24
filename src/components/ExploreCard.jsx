import "./explorecard.css"
import {Link} from "react-router-dom";
import aipanArt from '../assets/App/aipanart.webp';
import Linguistic from '../assets/Language/Linguistic.webp';
import Food1 from '../assets/App/foodUk.webp';
import Temple from '../assets/App/Temple.webp';
import Dance from '../assets/App/dress.webp';
import Dress from '../assets/App/dressArt.webp';
import Dhol from '../assets/App/Dhol.webp';
import Architecture from '../assets/App/Architecture.webp';
import {useEffect} from "react";
import Jewellery from "../assets/App/Jewellery.jpeg"
function ExploreCard() {
    function showAlert() {
        alert("We are currently working on it. You can come back after a few days to check.\nCurrently, only the Language card is live, you can check it out. \n\nThank you for your patience! ❤️");
    }

    useEffect(() => {
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        if (isSafari()) {
            const carouselWrapper = document.getElementById('explore-card');
            if (carouselWrapper) {
                carouselWrapper.classList.remove('explore-card-animation');
            }
        }
    }, []);

    return (
        <section className="explore-section">
            <h1 className="explore-uttarakhand">Explore Uttarakhand</h1>
            <p className={"explore-uttarakhand-info"}>Click card to know about them</p>

            <div className="explore-card-list">

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={'/language'} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Linguistic}`} alt="Linguistic Survey of India Book Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Language</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/food"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Food1}`} alt="Food Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Food</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/temple"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`https://i.pinimg.com/564x/2b/ed/85/2bed85b89037e104e94b8a3d3397819f.jpg`}
                                 alt="Temple Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Temples</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/jewellery"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`https://ukacademe.com/Images/UKPedia/CultureAndReligion/Header_Bulakh_1557369910.jpg`}
                                alt="Jewellery Image"
                                className="explore-card-image jewellery" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Jewellery</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/dance"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Dance}`} alt="Dance Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Dance</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation not-active-card">
                    <Link to={"/dress"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Dress}`} alt="Dress Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Traditional Dresses</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/art"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${aipanArt}`} alt="Aipan Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Art</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/music"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Dhol}`} alt="Dhol Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Music</p>
                        </div>
                    </Link>
                </div>


                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/architecture"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Architecture}`} alt="Dhol Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Architecture</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/community"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`https://uttarakhandjournal.com/wp-content/uploads/2022/08/Raji-Tribe-of-Uttarakhand.png`} alt="Community Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Community</p>
                        </div>
                    </Link>
                </div>


            </div>

        </section>
    );
}

export default ExploreCard;