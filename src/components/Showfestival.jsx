// src/components/Showfestival.jsx
import "./showfestival.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUpcomingFestival } from "../data/festivals";

function Showfestival() {
    const [festival, setFestival] = useState("");
    const [festivalDescription, setFestivalDescription] = useState("");
    const [festivalDate, setFestivalDate] = useState("");

    useEffect(() => {
        // use the Next.js-style logic to pick the upcoming festival
        const next = getUpcomingFestival();

        if (next) {
            setFestival(next.title || "");
            setFestivalDescription(next.description || "");
            // prefer subTitle.date if present, else fall back to the dd-mm string
            setFestivalDate(next.subTitle?.date || next.date || "");
        } else {
            setFestival("None");
            setFestivalDescription("No upcoming festival found.");
            setFestivalDate("");
        }
    }, []); // run once

    return (
        <section className={"display-festival-container"}>
            <Link to={`/festival/${festival.replace(/\s/g, "").toLowerCase()}`}>
                <h1>Upcoming Uttarakhand Festival</h1>
                <p className={"display-festival-container-info"}>Click to view more</p>

                <div className={"festival-container"}>
                    <h3>{festival}</h3>
                    <p className={"festival-date"}>{festivalDate}</p>
                    <p>{festivalDescription}</p>
                </div>
            </Link>
        </section>
    );
}

export default Showfestival;
