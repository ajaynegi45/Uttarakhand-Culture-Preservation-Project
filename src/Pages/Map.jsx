import {useRef} from 'react';
import map from "../assets/map-uttarakhand.svg";
import "./map.css";

const Map = () => {

    console.log("Map.jsx");

    const zoomLevelRef = useRef(1);
    const marginLeftLevelRef = useRef(0);
    const marginTopLevelRef = useRef(0);
    const mapImageRef = useRef();
    const mapBoxHeightRef= useRef(null);
    const increaseMapBoxHeightRef = useRef(6930);

    const handleZoomIn = () => {
        if(mapImageRef.current) {
            mapBoxHeightRef.current.style.aspectRatio = `10800/${increaseMapBoxHeightRef.current+=3000}`;
        }
        zoomLevelRef.current += 1;
        marginLeftLevelRef.current += 46.2;
        marginTopLevelRef.current += 29;
        updateMapStyle();
    };

    const handleZoomOut = () => {
        if(increaseMapBoxHeightRef.current > 6930) {
            mapBoxHeightRef.current.style.aspectRatio = `10800/${increaseMapBoxHeightRef.current-=3000}`;
        }
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
            <div className={"uttarakhand-map"}>
                <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                <p>Detailed map of uttarakhand</p>
                <div ref={mapBoxHeightRef} className={"uttarakhand-map-container"}>
                        <img className={"map-image"} ref={mapImageRef} src={map} alt="Important Map of Uttarakhand"
                         decoding="async"/>
                </div>
                <div className={"zoom-button-container"}>
                    <p onClick={handleZoomIn} className={"zoom-level-button"}>+</p>
                    <p onClick={handleZoomOut} className={"zoom-level-button"}>-</p>
                </div>
               <p>Zoom to view Map</p>
            </div>
        </div>
    );
};

export default Map;