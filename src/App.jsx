import "./App.css";
import ExploreCard from "./components/ExploreCard.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import map from "./assets/images/map-uttarakhand.svg";
import Ajay from './assets/images/ajay.webp';
import Contributor from './assets/images/contributor.webp';
import {useRef} from "react";
import Map from "./components/Map.jsx";
const App = () => {
    console.log("App.jsx");

    const zoomLevelRef = useRef(1);
    const marginLeftLevelRef = useRef(0);
    const marginTopLevelRef = useRef(0);
    const mapImageRef = useRef(null);

    const handleZoomIn = () => {
        zoomLevelRef.current += 1;
        marginLeftLevelRef.current += 46.2;
        marginTopLevelRef.current += 29;
        updateMapStyle();
    };

    const handleZoomOut = () => {
        if (zoomLevelRef.current > 1) {
            zoomLevelRef.current -= 1;
            marginLeftLevelRef.current -= 46.2;
            marginTopLevelRef.current -= 29;
            updateMapStyle();
        }
    };

    const updateMapStyle = () => {
        if (mapImageRef.current) {
            mapImageRef.current.style.transform = `scale(${zoomLevelRef.current})`;
            mapImageRef.current.style.marginTop = `${marginTopLevelRef.current}vw`;
            mapImageRef.current.style.marginLeft = `${marginLeftLevelRef.current}vw`;
        }
    };
    return (
        <div>
            <div>
                <ImageSlider/>
            </div>
            <ExploreCard/>

            <div>
                <div className={"uttarakhand-map"}>
                    <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                    <p>Detailed map of uttarakhand</p>
                    <div className={"uttarakhand-map-container"}>
                        <img className={"map-image"} ref={mapImageRef} src={map} alt="Important Map of Uttarakhand" decoding="async"/>
                    </div>
                    <div className={"zoom-button-container"}>
                        <p onClick={handleZoomIn} className={"zoom-level-button"}>+</p>
                        <p onClick={handleZoomOut} className={"zoom-level-button"}>-</p>
                    </div>
                    <p>Zoom to view Map</p>
                </div>
                {/*<Map/>*/}
            </div>
            <div className={"contributor-section"}>
                <h1 className={"uttarakhand-map-heading"}>Contributor</h1>
                <div className={"contributor-cardlist"}>
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
            </div>


            {/*<PdfViewer pdfUrl={MapUk}/>*/}
        </div>
    );
};
export default App;