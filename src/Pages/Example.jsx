import React from 'react';
import Card from "../components/Card.jsx";

function Example() {
    return (
        <div className={"jewellery-container"}>
            <div className={"jewellery-header"}>
                <img src="https://ukacademe.com/Images/UKPedia/CultureAndReligion/Header_Bulakh_1557369910.jpg"
                     alt="Jewellery Image"/>
            </div>

            <div className={""}></div>

            <h1 className="explore-uttarakhand-title">Explore Uttarakhand Jewellery</h1>
            <div className={"jewellery-list"}>
                <Card heading={""} description={""} link={""} img={""} imgDescription={" Image"}/>
            </div>

        </div>
    );
}

export default Example;