import "./App.css";
import ExploreCard from "./components/ExploreCard.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Ajay from './assets/images/ajay.webp';
import Contributor from './assets/images/contributor.webp';
import mapAvif from "./assets/images/map-uttarakhand.avif"
import {Link} from "react-router-dom";
import {useEffect} from "react";
import Showfestival from "./components/Showfestival.jsx";
const App = () => {
    console.log("App.jsx");
    useEffect(() => {
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        if (isSafari()) {
            const carouselWrapper = document.getElementById('contributor-cardlist-ani');
            if (carouselWrapper) {
                carouselWrapper.classList.remove('contributor-cardlist-animation');
            }
        }
    }, []);
    return (
        <div>
            {/* Header Image Section */}
            <div>
                <ImageSlider/>
            </div>

            {/* Explore Card Section*/}
            <ExploreCard/>

            {/* Festival Section */}
            <Showfestival/>

            {/* Map Section */}
            <div>
                <Link to={"map"}>
                    <div className={"uttarakhand-map"}>
                        <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                        {/*<p>Detailed map of uttarakhand</p>*/}
                        <p>Click to view map</p>
                        <div className={"uttarakhand-fake-map-container"}>
                            <img className={"map-image"} src={mapAvif} alt="Important Map of Uttarakhand"
                                 decoding="async"/>
                        </div>
                        {/*<p>Click to view map</p>*/}
                    </div>
                </Link>
            </div>


            {/* Contributors Section */}
            <Link to={"/contributors"}>
              <div className={"contributor-section"}>
                <h1 className={"uttarakhand-map-heading"}>Contributor</h1>
                <div id={"contributor-cardlist-ani"} className={"contributor-cardlist contributor-cardlist-animation"}>
                    <div className={"contributor-profile"}>
                        <div className={"contributor-profile-image-container"}>
                            <img src={Ajay} alt="ajay Image" loading="lazy" decoding="async"/>
                        </div>
                        <div className={"contributor-profile-name"}>
                            <p className={"profile-name"}>Ajay Negi</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className={"contributor-profile"}>
                        <div className={"contributor-profile-image-container"}>
                            <img src={Contributor} alt="ajay Image" loading="lazy" decoding="async"/>
                        </div>
                        <div className={"contributor-profile-name"}>
                            <p className={"profile-name"}>Waiting 🌟</p>
                        </div>
                    </div>
                </div>

                  <p>Click to view more</p>
              </div>
            </Link>
        </div>
    );
};
export default App;