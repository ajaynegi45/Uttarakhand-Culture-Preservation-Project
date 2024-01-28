import "./App.css";
import ExploreCard from "./components/ExploreCard.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import map from "./assets/images/map-uttarakhand.svg";
import Ajay from './assets/images/ajay.webp';
import Contributor from './assets/images/contributor.webp';
import MapUk from "../src/assets/map-uttarakhand.pdf#toolbar=0"
import PdfViewer from "../src//components/PdfViewer.jsx";
import {useState} from "react";
const App = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [marginLeftLevel, setMarginLeftLevel] = useState(0);
    const [marginTopLevel, setMarginTopLevel] = useState(0);
    const handleZoomIn = () => {
        setZoomLevel(zoomLevel + 1);
        setMarginLeftLevel(marginLeftLevel + 45.8);
        setMarginTopLevel(marginTopLevel + 29);
    };
    const handleZoomOut = () => {
        if(zoomLevel>1) setZoomLevel(zoomLevel - 1);
        if(marginLeftLevel>2) setMarginLeftLevel(marginLeftLevel - 45.8);
        if(marginTopLevel>1) setMarginTopLevel(marginTopLevel - 29);


    };


    return (
        <div>

            <div>
                <ImageSlider/>
            </div>
            <ExploreCard/>
            <div className={"uttarakhand-map"}>
                <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                <p>Detailed map of uttarakhand</p>
                <div className={"uttarakhand-map-container"} >
                    <img src={map} alt="Important Map of Uttarakhand" decoding="async" style={{transform: `scale(${zoomLevel})`, marginTop: `${marginTopLevel}vw`,marginLeft:`${marginLeftLevel}vw`}}/>
                </div>
                <div className={"zoom-button-container"}>
                    <p onClick={handleZoomIn}  className={"zoom-level-button"}>+</p>
                    <p onClick={handleZoomOut} className={"zoom-level-button"} >- </p>
                </div>
                <p>Zoom to view Map</p>
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