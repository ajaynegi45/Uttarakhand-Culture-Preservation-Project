import { useEffect, useState } from 'react';
import './imageSlider.css';
import lakeImage from "../assets/images/lake.webp";
import snowImage from "../assets/images/snow.webp";
import snow500Image from "../assets/images/snow-min.webp";
import trekkingImage from "../assets/images/trekking.webp";
import nainitalImage from "../assets/images/nanital.webp";

const ImageSlider = () => {
    const images = [
        { src: lakeImage, alt: "Lake Image" },
        { src: trekkingImage, alt: "Trekking Image" },
        { src: nainitalImage, alt: "Nainital Image" },
        { src: snowImage, alt: "Snow Image" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

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

        window.addEventListener('resize', updateScreenWidth);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, [currentIndex]);

    const getSnowImage = () => {
        return screenWidth === 500 ? snow500Image : snowImage;
    };

    return (
        <section className="carousel-wrapper">
            {/* Slides */}
            <div className="slide">
                <button className="btn previous" onClick={prevSlide}>
                    ❰
                </button>
                <img src={getSnowImage()} alt={`Slide ${images[currentIndex].alt}`} />
                <button className="btn next" onClick={nextSlide}>
                    ❱
                </button>
            </div>
        </section>
    );
};

export default ImageSlider;
