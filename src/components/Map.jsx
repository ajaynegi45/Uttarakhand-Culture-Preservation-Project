import { useRef } from 'react';
import map from "../assets/images/map-uttarakhand.svg";
import "./map.css";

const Map = () => {
    console.log("Map.jsx")
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
            <div className={"uttarakhand-map"}>
                <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
                <p>Detailed map of uttarakhand</p>
                <div className={"uttarakhand-map-container"}>
                    <img className={"map-image"} ref={mapImageRef} src={map} alt="Important Map of Uttarakhand"
                         decoding="async"/>
                </div>
                <div className={"zoom-button-container"}>
                    <p onClick={handleZoomIn} className={"zoom-level-button"}>+</p>
                    <p onClick={handleZoomOut} className={"zoom-level-button"}>-</p>
                </div>
                {/*<img className={"map-arrow"}*/}
                {/*     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADw0lEQVR4nO3aWaiVVRTA8Z2VlTTQQDZCt7w0CIYNpOVVKiia6ynKLPOhopcQmqOgsqh8CKKIKJAISQiifIkSisoKKyKbtBI1mrDMRs20+sXmrMv5uJ1J8dy7D9w/bA7f9629z1rf3nuttdc5KY3SGuyCq3FI6mXwoBofY4/Ui2A6/lbnkdRrYD98HQY8g834FxekXgLPhRFLsTPmxvWPODT1ApgTSv+KCbgGK/Fz3H8VY1LJqCn+eyh8RVwvwgwciO/j2e2pVLArloWiCxs83yeMymzF1FQimBdKrs1KV+7vjXtjfzyNJ0NudVWuCDAQrja3gSHPTsdj6IvrsXgvjHk2lYLaksmzIN78GBzTps/llfgyJ5UAFoZCy2KfHIDbGsjlmbgS72IVnop+f+DokdE+CM8kPNWE1AKchcU4b9D9RrDMfIDd0kiAPvwSity1Hf2Pw3f4LcZ4uDuatiCidY7amXewPO6f3G5mhiy1vujzV6Qw56bhJM9AGLEJK3Bs3J+yLes9XPP8ShD9AQd3VfnKl0+JgPYPzsD5OH47x7oj4spBeDmMWdL1FAZ7hcfJzN/BY2dj1sXYN+/IsRt92aMV/z+4tHL+tDwy3vtxFSa3GWduvPn3K21VJJqZLZjYTUMG3aXYnK04s8U4G9v03drVXAw7Yd/8Gdfj8nkcp2IW7q645IEmY+SgKTzVSTgx2lE4MtqeqYBiw6bIuf6nDC4LhTPrU6lgYij5SZPnj1f2wdpUKurJ4MrIvWY2MPSGkPkslQoeCiVfxzlD4wFOq7jYz1OpqAe1GS1kJoXMmlQq6m/7umapCg4PmW9Siai54cyfeCG71CZeqz/k1qUSUdsTmZdayGSvtSHkNqQSwa2tzhVxCJsUAS+nIJtTiWBBGHJti4L2l1FKzSmI4qooGbzdzmOFXH+UgjL9qTSwPpQb30ImFx8+jRpXZloqCezfyQaOUtFkvBLys1JJYGoo9laH8jeG/D2pJNQOU5kXcWm7czsuDPlFqSRw3+DSahYMK7Kzo46V+TCVhHq1cWYHsvlgdWe44NzGpVLAG2HI9A5kcyp/QqUu1rbPsFEpYvdV3vriJrLTIrlcE31uSiWgVnXcEnWusR32OaLyo1BDg4cdHBYKfVup6bYraOfy0ZvRb2MR+0Q9hnyBU/BVB2lKDqCX5ONu9L14+DRun75X+SnO7UsjtmSv9kS0XOt9IAdDvBbyC9JIg93DnT6Pj6IctK2sSKWhVsQbnyv04aEuij/WXI9bKm1ezExuZ4+03qOMkprzH18zjd0Q68Z3AAAAAElFTkSuQmCC"/>*/}
                <p>Zoom to view Map</p>
            </div>
        </div>
    );
};

export default Map;