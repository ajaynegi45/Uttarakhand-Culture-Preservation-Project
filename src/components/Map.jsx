import React, { useRef } from 'react';
import Mapuk from "../assets/map-uttarakhand.pdf";

const Map = () => {
    const pdfViewerRef = useRef(null);

    const handleZoomIn = () => {
        if (pdfViewerRef.current) {
            const currentZoom = parseFloat(pdfViewerRef.current.style.zoom || 1);
            pdfViewerRef.current.style.zoom = `${currentZoom + 0.1}`;
        }
    };

    const handleZoomOut = () => {
        if (pdfViewerRef.current) {
            const currentZoom = parseFloat(pdfViewerRef.current.style.zoom || 1);
            pdfViewerRef.current.style.zoom = `${currentZoom - 0.1}`;
        }
    };

    return (
        <div className={"uttarakhand-map"}>
            <h1 className={"uttarakhand-map-heading"}>Map of Uttarakhand</h1>
            <p>Detailed map of Uttarakhand</p>
            <div className={"uttarakhand-map-container"}>
                <div className={"pdf-viewer-container"}>
                    <embed
                        ref={pdfViewerRef}
                        src={Mapuk}
                        type="application/pdf"
                        width="100%"
                        height="600px"
                        style={{ border: '1px solid black', width: '100%', height: '100%' }}
                    />
                </div>
            </div>
            <div className={"zoom-button-container"}>
                <button onClick={handleZoomIn} className={"zoom-level-button"}>Zoom In</button>
                <button onClick={handleZoomOut} className={"zoom-level-button"}>Zoom Out</button>
            </div>
        </div>
    );
};

export default Map;