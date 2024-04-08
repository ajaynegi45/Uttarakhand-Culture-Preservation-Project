import "./architecture.css"
import Card from "../../components/Card.jsx";
import house from "../../assets/Architecture/architecture.png"
import Kumaoni from "../../assets/Architecture/house.jpg"


function Architecture() {
    return (
        <div className={"architecture-container"}>
            <div className={"architecture-header"}>
                <img src={house} alt="Architecture Image"/>
            </div>

            <div className={""}>

            </div>

            <h1 className="explore-uttarakhand-title">Explore Uttarakhand Architecture</h1>
            <div className={"architecture-list"}>
                <Card heading={"Kumaon Region"} description={"The walls are made of stone while flooring is finished with wooden boards or mud to keep them insulated consistently. "} link={""} img={Kumaoni} imgDescription={"Kumaoni Architecture Image"}/>
                <Card heading={"Garhwal Region"} description={"Living and cooking regions are above the cattle and grain storage, serving warmth through winters. Construction is finished with stone and wood."} link={""} img={"https://theanamikapandey.com/wp-content/uploads/2021/12/Screenshot-2021-12-09-134020.jpg.webp"} imgDescription={"Garhwali Architecture Image"}/>

            </div>
        </div>
    );
}

export default Architecture;

// Source https://theanamikapandey.com/architecture-of-uttarakhand/