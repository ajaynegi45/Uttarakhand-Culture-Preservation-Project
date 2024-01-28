import { useState, useRef } from 'react';
import map from '../assets/images/map-uttarakhand.svg'; // Replace 'path-to-your-map-image' with the actual path to your map image

const MapComponent = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 });
    const mapContainerRef = useRef(null);

    const handleZoomIn = () => {
        setZoomLevel(zoomLevel + 0.1);
    };

    const handleZoomOut = () => {
        if (zoomLevel > 1) setZoomLevel(zoomLevel - 0.1);
    };

    const handleScroll = () => {
        setScrollPosition({
            left: mapContainerRef.current.scrollLeft,
            top: mapContainerRef.current.scrollTop,
        });
    };

    const handleMove = (direction) => {
        const step = 50; // Adjust this value as needed
        let newScrollPosition = { ...scrollPosition };

        if (direction === 'left') {
            newScrollPosition.left -= step;
        } else if (direction === 'right') {
            newScrollPosition.left += step;
        } else if (direction === 'up') {
            newScrollPosition.top -= step;
        } else if (direction === 'down') {
            newScrollPosition.top += step;
        }

        mapContainerRef.current.scrollTo(newScrollPosition.left, newScrollPosition.top);
        setScrollPosition(newScrollPosition);
    };

    return (
        <div className={"uttarakhand-map"}>
            <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
            <p>Detailed map of Uttarakhand</p>
            <div className={"uttarakhand-map-container"}>
                <div
                    className="image-container"
                    style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <img
                        src={map}
                        alt="Important Map of Uttarakhand"
                        decoding="async"
                        style={{
                            transform: `scale(${zoomLevel})`,
                            marginLeft: `-${scrollPosition.left}px`,
                            marginTop: `-${scrollPosition.top}px`,
                        }}
                    />
                </div>
            </div>
            <p onClick={handleZoomIn}>+</p>
            <p onClick={handleZoomOut}>-</p>
            <button onClick={() => handleMove('left')}>Left</button>
            <button onClick={() => handleMove('right')}>Right</button>
            <button onClick={() => handleMove('up')}>Up</button>
            <button onClick={() => handleMove('down')}>Down</button>
            <p>Zoom and move to view Map</p>
        </div>
    );
};

export default MapComponent;

