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

                <Card heading={"Choliya"} description={"Also known as Chhaliya or Hudkeli, is a sword dance typically showcased during weddings and other festive gatherings."} link={"choliya"} img={"https://kafaltree.com/wp-content/uploads/2021/05/Choliya-Uttarakhand-Folk-Dance-1280x720.jpg"} imgDescription={"Choliya Image"}/>

                <Card heading={"Pandav Nritya"} description={""} link={""} img={""} imgDescription={"Pandav Nritya Image"}/>

                <Card heading={"Bhotia dance"} description={""} link={""} img={""} imgDescription={"Bhotia Dance Image"}/>

                <Card heading={"Mukhota dance"} description={""} link={""} img={""} imgDescription={"Mukhota Dance Image"}/>

                <Card heading={"Chanchari"} description={"Famous in the Danpur Patti of Bageshwar District"} link={""} img={""} imgDescription={"Chanchari Image"}/>

                <Card heading={"Ramola"} description={"Ramola is a popular dance form in the state and is mainly performed as worship to Lord Krishna"} link={""} img={""} imgDescription={"Ramola Image"}/>

                <Card heading={"Jagar"} description={"Jagar is a particular dance form which falls in the spiritual category of worship"} link={""} img={""} imgDescription={"Jagar Image"}/>

                <Card heading={"Jhumela"} description={""} link={""} img={""} imgDescription={"Jhumela Image"}/>

                <Card heading={"Thali – Jadda – Jhainta"} description={""} link={""} img={""} imgDescription={"Thali – Jadda – Jhainta Image"}/>

            </div>

        </div>
    );
}

export default Dance;