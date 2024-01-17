import {useEffect, useState} from 'react';
import './imageSlider.css';

const ImageSlider = (images) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(
            nextSlide
        , 5000);

        // Clean up the interval when the component is unmounted or when the dependency array changes
        return () => clearInterval(interval);
    }, []); // Empty dependency array means the effect runs once when the component mounts

    return (
        <>
            <section className="carousel-wrapper">
                {/* Slides */}
                <div className="slide" >
                    <button className="btn previous" onClick={prevSlide}>
                        ❰
                    </button>
                    <img src={images.images[currentIndex].src} alt={`Slide ${images.images[currentIndex].alt}`} />
                    <button className="btn next" onClick={nextSlide}>
                        ❱

                    </button>
                </div>
            </section>
        </>
    );
};

export default ImageSlider;