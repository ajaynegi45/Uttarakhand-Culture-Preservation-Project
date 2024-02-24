import Card from "../../components/Card.jsx";
import "./utensil.css"


function Utensil() {
    return (
        <section className={"utensils-container"}>

            <div className={"utensils-header-container"}>
                <div className={"utensils-img-container"}>
                    <img src="https://rah-geer.com/wp-content/uploads/2018/01/DSC03013.jpg" alt="Utensil Image" />
                </div>

                <div className={"utensils-description-container"}>

                </div>
            </div>

            <h1 className="explore-uttarakhand">Explore Uttarakhand Utensils</h1>

            <div className={"utensils-list"}>
                <Card heading={"Gagar / Gagri"} description={""} link={""} img={""} imgDescription={""}/>
                <Card heading={"Bhaddu"} description={""} link={""} img={""} imgDescription={""}/>
                <Card heading={""} description={""} link={""} img={""} imgDescription={""}/>
                <Card heading={""} description={""} link={""} img={""} imgDescription={""}/>
                <Card heading={""} description={""} link={""} img={""} imgDescription={""}/>
                <Card heading={""} description={""} link={""} img={""} imgDescription={""}/>
                <Card heading={""} description={""} link={""} img={""} imgDescription={""}/>
                <Card heading={""} description={""} link={""} img={""} imgDescription={""}/>
            </div>
        </section>
    );
}

export default Utensil;