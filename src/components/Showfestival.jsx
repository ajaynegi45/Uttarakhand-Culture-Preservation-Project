import "./showfestival.css";

function Showfestival() {

    // const currentDate = new Date().getDate() ;
    // const currentMonth = new Date().getMonth() + 1 ;



    const currentDate =  2;
    const currentMonth =  5;

    console.log(currentDate);
    console.log(currentMonth);

    if ( (currentDate >= 1 && currentMonth >= 1 ) && (currentDate <= 15 && currentMonth <= 3 ) ) {
        console.log("Holi");
    } else {
        console.log("Else");
    }

    return (
        <section className={"display-festival-container"}>
            <h1>Upcoming Festival</h1>
            <div>
                <h4> </h4>
                <p></p>
            </div>
        </section>
    );
}

export default Showfestival;
