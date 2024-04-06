import Card from "../../components/Card.jsx";
import "../Community/community.css";
import UnderWorkingPage from "../../components/UnderWorkingPage.jsx";


function Community() {
    return (
        <div className={"community-container"}>
            <div className={"community-header"}>
                <img
                    src="https://i0.wp.com/ukdigital.in/wp-content/uploads/2021/07/ukdigital-community-cover.jpg?fit=1300%2C333&ssl=1"
                    alt=""/>
            </div>

            <div className={"community-description"}>

            </div>

            <h1 className="explore-uttarakhand-title">Explore Uttarakhand Community</h1>

            <div className={"community-list"}>

                <UnderWorkingPage/>
                {/*<Card heading={""} description={""} link={""} img={""} imgDescription={""}/>*/}

            </div>

        </div>
    );
}

export default Community;