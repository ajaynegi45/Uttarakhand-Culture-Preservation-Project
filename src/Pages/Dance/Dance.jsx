import Card from "../../components/Card.jsx";
import "./dance.css"
import DanceImage from "../../assets/App/dress.webp"


function Dance() {
    return (
        <div className={"dance-container"}>
            <div className={"dance-header"}>
                <img src={DanceImage}
                     alt="Pahadi Dance Image"/>
            </div>

            <div className={""}></div>

            <h1 className="explore-uttarakhand-title">Explore Uttarakhand Dance</h1>
            <div className={"dance-list"}>
                <Card heading={"Jhoda"} description={"Participants form circles, with a lead singer in the center playing the Hudki drum. The dance follows rhythmic beats set by the \"Hurka\" player."} link={"jhoda"} img={DanceImage} imgDescription={"Jhoda Image"}/>

                <Card heading={"Choliya"} description={""} link={"choliya"} img={""} imgDescription={"Choliya Image"}/>

            </div>

        </div>
    );
}

export default Dance;