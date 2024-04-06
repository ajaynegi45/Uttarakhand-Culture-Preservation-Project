import Card from "../../components/Card.jsx";
import "./utensil.css"
import UtensilImage from "../../assets/Utensils/DSC03013.jpg"

function Utensil() {
    return (
        <section className={"utensils-container"}>

            <div className={"utensils-header-container"}>
                <div className={"utensils-img-container"}>
                    <img src={UtensilImage} alt="Utensil Image"/>
                </div>

                <div className={"utensils-description-container"}>

                </div>
            </div>

            <h1 className="explore-uttarakhand">Explore Uttarakhand Utensils</h1>

            <div className={"utensils-list"}>
                <Card   heading={"Gagar / Gagri"}     description={"Small handy Gagar used during puja rituals to large ones that people of this Himalayan region use for storing drinking water, which is good for health"} link={""} img={"https://m.media-amazon.com/images/I/4114rFrP0xL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"} imgDescription={""}/>
                <Card   heading={"Bhaddu"}            description={"Made of heavy bellmetal, the Bhaddu has been traditionally used in Kumaon to cook outdoors over a wood or coal fire. It’s the perfect barbecue vessel and great for cooking slow. It has also been used to slow cook high nutrition hardy lentils in Kumaon. In the traditional kitchen, a Katora is used to cover the Bhaddu. To add weight, water is filled in the Katora."} link={""} img={"https://cdn.dotpe.in/longtail/store-items/6747300/EX08hRZU.jpeg"} imgDescription={""}/>
            </div>
        </section>
    );
}

export default Utensil;