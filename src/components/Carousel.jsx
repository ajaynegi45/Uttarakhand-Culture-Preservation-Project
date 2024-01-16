
import lake from "../assets/images/lake.jpg";
import snow from "../assets/images/snow.jpg";
import trekking from "../assets/images/trekking.jpg";
import nanital from "../assets/images/nanital.jpg";
import "./carousel.css";

function Carousel() {
    return (
        <>
            <section className="carousel-wrapper">
                {/*Slides */}
                <div className="slide" data-slide>
                    <img src={lake} alt="lake"/>
                </div>

                <div className="slide" data-slide>
                    <img src={snow} alt=""/>
                </div>

                <div className="slide" data-slide>
                    <img src={trekking} alt=""/>
                </div>

                <div className="slide" data-slide>
                    <img src={nanital} alt=""/>
                </div>

                {/*Next and Previous Buttons*/}
                <button className="btn previous" data-button="previous">
                    <i className="bi bi-chevron-left" />
                </button>
                <button className="btn next" data-button="next">
                    <i className="bi bi-chevron-right"/>
                </button>
            </section>
        </>
    );
}

export default Carousel;