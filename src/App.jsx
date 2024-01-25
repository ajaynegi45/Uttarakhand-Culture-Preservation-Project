import "./App.css";
import ExploreCard from "./components/ExploreCard.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import map from "./assets/images/map-uttarakhand.svg";
import Ajay from './assets/images/ajay.webp';
import Contributor from './assets/images/contributor.webp'
const App = () => {
    return (
        <div>
            <div>
                <ImageSlider />
            </div>
            <ExploreCard/>
            <div className={"uttarakhand-map"}>
                <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                <p>Detailed map of uttarakhand</p>
                <div className={"uttarakhand-map-container"}>
                    <img src={map} alt="Important Map of Uttarkhand" loading="eager" decoding="async" />
                </div>
                <p>Zoom to view Map</p>
            </div>
            <div className={"contributor-section"}>
                <h1 className={"uttarakhand-map-heading"}>Contributor</h1>
                <div className={"contributor-cardlist"}>
                    <div className={"contributor-profile"}>
                        <div className={"contributor-profile-image-container"}>
                            <img src={Ajay} alt="ajay Image" loading="lazy"  decoding="async"/>
                        </div>
                        <div className={"contributor-profile-name"}>
                            <p className={"profile-name"}>Ajay Negi</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className={"contributor-profile"}>
                        <div className={"contributor-profile-image-container"}>
                            <img src={Contributor} alt="ajay Image" loading="lazy" decoding="async" />
                        </div>
                        <div className={"contributor-profile-name"}>
                            <p className={"profile-name"} >Waiting 🌟</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;