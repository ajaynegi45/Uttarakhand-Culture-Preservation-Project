import { useEffect, useState } from 'react';
import './imageSlider.css';
import lakeImage from "../assets/images/lake.webp";
import snowImage from "../assets/images/snow.webp";
import trekkingImage from "../assets/images/trekking.webp";
import nainitalImage from "../assets/images/nanital.webp";
const ImageSlider = () => {
    const images = [
        { src: lakeImage, alt: "Lake Image" },
        { src: snowImage, alt: "Snow Image" },
        { src: trekkingImage, alt: "Trekking Image" },
        { src: nainitalImage, alt: "Nainital Image" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <section className="carousel-wrapper">
            {/* Slides */}
            <div className="slide">
                <button className="btn previous" onClick={prevSlide}>
                    ❰
                </button>
                <img src={images[currentIndex].src} alt={`Slide ${images[currentIndex].alt}`} />
                <button className="btn next" onClick={nextSlide}>
                    ❱
                </button>
            </div>
        </section>
    );
};
export default ImageSlider;