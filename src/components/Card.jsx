import {Link} from "react-router-dom";
import "./card.css";
import {useEffect} from "react";

function Card({img,imgDescription,heading,description,link}) {

    useEffect(() => {
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        if (isSafari()) {
            const carouselWrapper = document.getElementById('card-container');
            if (carouselWrapper) {
                carouselWrapper.classList.remove('card-container-animation');
            }
        }
    }, []);

    console.log("Card Render");
    return (
        <div id={"card-container"} className={"card-container card-container-animation"}>

            <div className={"card-image-container"} >
                <img src={img} alt={imgDescription} className={"card-image"} />
            </div>

            <div className={"card-description-container"} >
                <h4 className={"card-description-heading"} >{heading}</h4>
                <p className={"card-description"} >{description}</p>

                <Link to={link}>
                    <button className={"card-description-button"} >Read more</button>
                </Link>
            </div>

        </div>
    );
}

export default Card;