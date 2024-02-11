import './imageSlider.css';
import lake from "../assets/images/lake.webp";
import lakeMin from "../assets/images/lake-min.webp";
import {useEffect} from "react";
// import snowImage from "../assets/images/snow.webp";
// import snow500 from "../assets/images/snow-min.webp";
// import trekkingImage from "../assets/images/trekking.webp";
// import nainitalImage from "../assets/images/nanital.webp";
const ImageSlider = () => {
    // const [width, setWidth] = useState(window.innerWidth);
    // const [images, setImages] = useState([
    //     { src: lakeImage, alt: "Lake Image" },
    //     { src: width >= 500 ? snowImage : snow500, alt: "Snow Image" },
    //     { src: trekkingImage, alt: "Trekking Image" },
    //     { src: nainitalImage, alt: "Nainital Image" },
    // ]);
    // const [currentIndex, setCurrentIndex] = useState(0);
    //
    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    // };
    //
    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };
    //
    // useEffect(() => {
    //     const updateWidth = () => {
    //         setWidth(window.innerWidth);
    //     };
    //
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 4000);
    //
    //     window.addEventListener('resize', updateWidth);
    //
    //     return () => {
    //         clearInterval(interval);
    //         window.removeEventListener('resize', updateWidth);
    //     };
    // }, [currentIndex, images]);
    //
    // useEffect(() => {
    //     setImages((prevImages) => [
    //         { src: lakeImage, alt: "Lake Image" },
    //         { src: width >= 500 ? snowImage : snow500, alt: "Snow Image" },
    //         { src: trekkingImage, alt: "Trekking Image" },
    //         { src: nainitalImage, alt: "Nainital Image" },
    //     ]);
    // }, [width]);

    useEffect(() => {
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        if (isSafari()) {
            const carouselWrapper = document.getElementById('carousel-wrapper-image');
            if (carouselWrapper) {
                carouselWrapper.classList.remove('carousel-wrapper-animation');
            }
        }
    }, []);


    return (
        <div className={"animation-header-image"}>
        <section id="carousel-wrapper-image" className="carousel-wrapper carousel-wrapper-animation">
            {/* Slides */}
            {/*<div className="slide">*/}
            {/*    <button className="btn previous" onClick={prevSlide}>*/}
            {/*        ❰*/}
            {/*    </button>*/}
            {/*    <img src={images[currentIndex].src} alt={`Slide ${images[currentIndex].alt}`}/>*/}
            {/*    <button className="btn next" onClick={nextSlide}>*/}
            {/*        ❱*/}
            {/*    </button>*/}
            {/*</div>*/}

            <div className="slide">

                <picture className={"slide-img"}>
                    <source media="(max-width: 400px)" srcSet={lakeMin}/>
                    <img
                        src={lake}
                        alt={"Lake Image"}
                        // sizes="(max-width: 500px) 500vw, 800vw"
                        // srcSet={`${snowImage} 800w, ${lake} 1200w`}
                        decoding="async"
                        loading="eager"
                    />
                </picture>

            </div>


        </section>
        </div>
    );
};
export default ImageSlider;