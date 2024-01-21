import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../components/zoomimage.css';

function ZoomImage({ imageUrl }) {
    // const [scale, setScale] = useState(1);
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    // const imageRef = useRef(null);
    // const containerRef = useRef(null);
    // const isDragging = useRef(false);
    //
    // const handleZoom = useCallback((increment) => {
    //     setScale((prevScale) => Math.max(1, prevScale + increment));
    // }, []);
    //
    // const handleMouseDown = useCallback((e) => {
    //     e.preventDefault();
    //     isDragging.current = true;
    //
    //     let startX = e.clientX;
    //     let startY = e.clientY;
    //
    //     const handleMouseMove = (e) => {
    //         if (!isDragging.current) return;
    //
    //         const deltaX = e.clientX - startX;
    //         const deltaY = e.clientY - startY;
    //
    //         setPosition((prevPosition) => ({
    //             x: clamp(prevPosition.x + deltaX / scale, -10, containerSize.width - imageRef.current.width + 10),
    //             y: clamp(prevPosition.y + deltaY / scale, -10, containerSize.height - imageRef.current.height + 10),
    //         }));
    //
    //         startX = e.clientX;
    //         startY = e.clientY;
    //     };
    //
    //     const handleMouseUp = () => {
    //         isDragging.current = false;
    //         document.removeEventListener('mousemove', handleMouseMove);
    //         document.removeEventListener('mouseup', handleMouseUp);
    //     };
    //
    //     document.addEventListener('mousemove', handleMouseMove);
    //     document.addEventListener('mouseup', handleMouseUp);
    // }, [scale, containerSize]);
    //
    // useEffect(() => {
    //     const image = imageRef.current;
    //     const container = containerRef.current;
    //
    //     const updateContainerSize = () => {
    //         setContainerSize({
    //             width: container.clientWidth,
    //             height: container.clientHeight,
    //         });
    //     };
    //
    //     updateContainerSize(); // Initial size
    //
    //     window.addEventListener('resize', updateContainerSize);
    //
    //     return () => {
    //         window.removeEventListener('resize', updateContainerSize);
    //     };
    // }, []);
    //
    // const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    return (
        // <div
        //     ref={containerRef}
        //     style={{
        //         backgroundColor: '#ffffff',
        //         borderRadius: '10px',
        //         position: 'relative',
        //         overflow: 'hidden',
        //     }}
        // >
        //     <div className="btn-container">
        //         <button onClick={() => handleZoom(0.1)}>
        //             <span>Add</span>
        //         </button>
        //         <button onClick={() => handleZoom(-0.1)}>
        //             <span>Remove</span>
        //         </button>
        //     </div>
        //     <img
        //         src={imageUrl}
        //         alt="Map"
        //         ref={imageRef}
        //         style={{
        //             width: '50vw',
        //             height: 'auto',
        //             cursor: 'move',
        //             transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        //         }}
        //         onMouseDown={handleMouseDown}
        //         onMouseUp={() => (isDragging.current = false)}
        //         draggable={false}
        //     />
        // </div>

        <>
        </>
    );
}

export default ZoomImage;
