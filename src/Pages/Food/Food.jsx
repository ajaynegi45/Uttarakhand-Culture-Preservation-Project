import React from 'react';
import "./food.css"

function Food() {
    return (
        <section className={"food"}>
            <div className={"food-banner"}>
                <img src="https://media.assettype.com/TNIE%2Fimport%2F2023%2F4%2F16%2Foriginal%2FBanner_Pyaz_ke_patte_ki_sabzi.jpg?auto=format%2Ccompress&fit=max&w=1200" alt="" loading={"lazy"}/>
            </div>
            <div>
                <p>Uttarakhand's cuisine is a fine blend of organically-grown grains and vegetables. With several lentil-based dishes, the pahadi (people of the mountains) cuisine is subtle in taste but high in protein and other nutrients. It will be a sin to come here and not try its flavourful and healthy food.
                </p>
            </div>


        </section>
    );
}

export default Food;