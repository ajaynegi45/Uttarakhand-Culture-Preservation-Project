import "./App.css";
import ExploreCard from "./components/ExploreCard.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import lakeImage from "./assets/images/lake.webp";
import snowImage from "./assets/images/snow.webp";
import trekkingImage from "./assets/images/trekking.webp";
import nainitalImage from "./assets/images/nanital.webp";
import map from "./assets/images/map-uttarakhand.svg";
import Ajay from './assets/images/ajay.webp';
import Contributor from './assets/images/contributor.webp'
const App = () => {
    const images = [
        { src: lakeImage, alt: "Lake Image" },
        { src: snowImage , alt: "Snow Image" },
        { src: trekkingImage, alt: "Trekking Image" },
        { src: nainitalImage, alt: "Nainital Image" },
    ];
    return (
            <div>
                <div>
                    <ImageSlider images={images}/>
                </div>
                <ExploreCard/>
                <div className={"uttarakhand-map"}>
                    <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                    <p>Detailed map of uttarakhand</p>
                    <div className={"uttarakhand-map-container"}>
                        <img src={map} alt="Important Map of Uttarkhand" loading="lazy" />
                    </div>
                    <p>Zoom to view Map</p>
                </div>
                <div className={"contributor-section"}>
                    <h1 className={"uttarakhand-map-heading"}>Contributor</h1>
                    <div className={"contributor-cardlist"}>
                        <div className={"contributor-profile"}>
                            <div className={"contributor-profile-image-container"}>
                                <img src={Ajay} alt="ajay Image" loading="lazy" />
                            </div>
                            <div className={"contributor-profile-name"}>
                                <h3>Ajay Negi</h3>
                                <p>Developer</p>
                            </div>
                        </div>
                        <div className={"contributor-profile"}>
                            <div className={"contributor-profile-image-container"}>
                                <img src={Contributor} alt="ajay Image" loading="lazy" />
                            </div>
                            <div className={"contributor-profile-name"}>
                                <h3>Waiting 🌟</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default App;