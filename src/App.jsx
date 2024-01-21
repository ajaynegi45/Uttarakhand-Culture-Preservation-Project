import React from "react";
import "./App.css";
import ExploreCard from "./components/ExploreCard.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import lakeImage from "./assets/images/lake.webp";
import snowImage from "./assets/images/snow.webp";
import trekkingImage from "./assets/images/trekking.webp";
import nainitalImage from "./assets/images/nanital.webp";
import map from "./assets/images/map-uttarakhand (1).svg";
import Ajay from './assets/images/ajay.png';
import Contributor from './assets/images/contributor.png'

const App = () => {
    const images = [
        { src: lakeImage, alt: "Lake Image" },
        { src: snowImage, alt: "Snow Image" },
        { src: trekkingImage, alt: "Trekking Image" },
        { src: nainitalImage, alt: "Nainital Image" },
    ];

    // const zoomRef = useRef({
    //     scale: 1,
    //     panning: false,
    //     pointX: 0,
    //     pointY: 0,
    //     start: { x: 0, y: 0 },
    //     originalScale: 1,
    //     minScale: 1, // Adjust this value to set the minimum scale
    // });
    //
    // useEffect(() => {
    //     const handleWheel = (e) => {
    //         e.preventDefault();
    //
    //         const { pointX, pointY, scale, originalScale, minScale } = zoomRef.current;
    //         const xs = (e.clientX - pointX) / scale;
    //         const ys = (e.clientY - pointY) / scale;
    //         const delta = e.deltaY;
    //
    //         let newScale = scale * (delta > 0 ? 1.2 : 1 / 1.2);
    //
    //         // Ensure the new scale does not go below the minimum scale
    //         newScale = Math.max(newScale, minScale);
    //
    //         zoomRef.current.scale = newScale;
    //         zoomRef.current.pointX = e.clientX - xs * newScale;
    //         zoomRef.current.pointY = e.clientY - ys * newScale;
    //
    //         requestAnimationFrame(setTransform); // Use requestAnimationFrame for smoother animation
    //     };
    //
    //     if (zoomRef.current.zoom) {
    //         zoomRef.current.zoom.addEventListener("wheel", handleWheel, { passive: false });
    //     }
    //
    //     return () => {
    //         if (zoomRef.current.zoom) {
    //             zoomRef.current.zoom.removeEventListener("wheel", handleWheel);
    //         }
    //     };
    // }, []); // Empty dependency array to run the effect only once
    //
    // const setTransform = () => {
    //     const { pointX, pointY, scale } = zoomRef.current;
    //     zoomRef.current.zoom.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    // };
    //
    // const handleMouseDown = (e) => {
    //     e.preventDefault();
    //     const start = { x: e.clientX - zoomRef.current.pointX, y: e.clientY - zoomRef.current.pointY };
    //     zoomRef.current.panning = true;
    //     zoomRef.current.start = start;
    // };
    //
    // const handleMouseUp = () => {
    //     zoomRef.current.panning = false;
    // };
    //
    // const handleMouseMove = (e) => {
    //     e.preventDefault();
    //     const { panning, start } = zoomRef.current;
    //
    //     if (!panning) {
    //         return;
    //     }
    //
    //     zoomRef.current.pointX = e.clientX - start.x;
    //     zoomRef.current.pointY = e.clientY - start.y;
    //     requestAnimationFrame(setTransform);
    // };

    return (
        <>
            <div>
                <div>
                    <ImageSlider images={images}/>
                </div>
                <ExploreCard/>
                <div className={"uttarakhand-map"}>
                    <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                    {/*<div*/}
                    {/*    className={"uttarakhand-map-container"}*/}
                    {/*    ref={(element) => (zoomRef.current.zoom = element)}*/}
                    {/*    onMouseDown={handleMouseDown}*/}
                    {/*    onMouseUp={handleMouseUp}*/}
                    {/*    onMouseMove={handleMouseMove}*/}
                    {/*>*/}
                    {/*    <img src={map} alt="Important Map of Uttarkhand"/>*/}
                    {/*</div>*/}

                    <p>Detailed map of uttarakhand</p>

                    <div className={"uttarakhand-map-container"}>
                        <img src={map} alt="Important Map of Uttarkhand" loading="lazy"/>
                    </div>

                    <p>Zoom to view Map</p>
                </div>

                {/*<ZoomImage imageUrl={map}/>*/}

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


        </>
    );
};

export default App;
