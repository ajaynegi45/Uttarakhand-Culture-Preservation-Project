import Card from "../../components/Card.jsx";
import "./music.css"
import musicBannser from "../../assets/Music/music.jpeg"

function Music() {
    return (
        <div className={"music-container"}>
            <div className={"music-header"}>
                <img src={musicBannser}
                     alt=" Image"/>
            </div>

            <div className={""}></div>

            <h1 className="explore-uttarakhand-title">Explore Musical Instruments</h1>
            <div className={"music-list"}>
                <Card heading={""} description={""} link={"dd"} img={""} imgDescription={" Image"}/>
            </div>
        </div>
    );
}

export default Music;