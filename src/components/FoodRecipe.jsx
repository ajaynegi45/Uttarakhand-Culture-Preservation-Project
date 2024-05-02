
// {img,imgDescription,heading,description,link}

function FoodRecipe({heading, description,utensils }) {
    return (
        <section className="recipe">
            <h1>{heading}</h1>
            <p>{description}</p>

            <h2>Utensils</h2>
            <h2>Utensils</h2>
            <ul>
                {utensils.map(utensil => (
                    <li key={utensil}>{utensil}</li>
                ))}
            </ul>

        </section>
    );
}

export default FoodRecipe;