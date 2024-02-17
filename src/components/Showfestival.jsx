import "./showfestival.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Showfestival() {
    const currentDate = new Date().getDate() ;
    const currentMonth = new Date().getMonth() + 1 ;

    // let festival;
    // let festivalDescription;


    const [festival, setFestival] = useState("");
    const [festivalDescription, setFestivalDescription] = useState("");
    const [festivalDate, setFestivalDate] = useState("");

    useEffect(() => {
        // const currentDate = 2;
        // const currentMonth = 1;

        // console.log(currentDate);
        // console.log(currentMonth);

        if ((currentDate >= 14 && currentMonth >= 1) && ( currentMonth <= 1 && currentDate <= 14)) {
            setFestival("Ghughutiya");
            setFestivalDescription("During the time of Makar Sankranti, Ghughutiya or Kale Kauva is also celebrated in Uttarakhand. The locals prepare sweets made from deep-fried flour in different shapes like knives, swords, etc. The locals welcome them by feeding the crows and migratory birds and hope that they come back next year. The children also sing songs to attract these migratory birds.");
            setFestivalDate("Date: 14 January 2024");
        }
        else if ((currentDate >= 15 || currentMonth >= 2) && (currentDate <= 9 || currentMonth <= 4)) {
            setFestival("Phool Dei");

            setFestivalDescription(
                "Phool Dei is a traditional harvest festival and folk festival celebrated in the Kumaon and Garhwal regions of Uttarakhand, India. It occurs on the first day of the Hindu calendar month Chaitra season (March-April). The festival symbolizes the arrival of spring and the beginning of the agricultural season." +

                "It is the time when flowers blossom and this is accompanied by the ceremonial pudding called dei which is made by the locals using jaggery or gud, curd and flour. This dish is an integral part of the festival." +

                "Young girls are an integral part of this festival of Uttarakhand. They go from house to house, singing the folk song of 'Phool Dei' with jaggery, rice, and coconut offering. It is believed that they bless the homes by placing flowers and rice on the doorsteps. In return, the young girls are offered sweets and blessings for their act."
            );

            setFestivalDate("Date: 9 April 2024");
        }
        else if ((currentDate >= 10 || currentMonth >= 4) && (currentDate <= 30 || currentMonth <= 4)) {
            setFestival("Syalde Bikauti Mela");
            setFestivalDescription("Syalde Bikhauti Mela is an annual fair held in April-May in the town of Dwarahat (Almora). The Syalde Bikhauti Mela is held in two phases; the first in the Vimandeshwar Temple and the other in the Dwarahat marketplace. During the mela, one can witness folk dances and songs with traditional foliage being adorned by the gathered people. An important ritual, 'Oda Bhetna' refers to the striking of the stone (Oda).\n" +
                "\n" +
                "As per legend, the ancient times saw people worship their deity in a temple nearby and due to some friction between the followers of the two groups, a brawl broke out that lead to bloodshed. The leader of the group that lost the fight was beheaded and a stone (Oda) was placed near it to commemorate the fallen leader. The numerous traditions on display and the lip-smacking Indian delicacy of 'Jalebi' being an integral part of the fair, the Syalde Bikhauti Mela is one of cultural convergence.");

            setFestivalDate("Date: April each year ");
        }
        else if ((currentDate >= 1 || currentMonth >= 5) && (currentDate <= 14 || currentMonth <= 4)) {
            setFestival("Harela");
            setFestivalDescription("Among the people of Uttarakhand, every season has some festivals, and each festival is celebrated appropriately. Harela is a festival that marks the beginning of the rainy season or monsoon. The people belonging to the Kumaon community celebrate this festival during the month of Shravana, i.e., July-August. Mythologically, this festival commemorates the wedding of Lord Shiva and Parvati. People make small idols or dikars of gods like Maheshwar, Ganesh.\n" +
                "\n" +
                "This festival is followed by Bhitauli, which is celebrated in the month of Chaitra, i.e., March - April. It revolves around agriculture where women sow seeds in the soil and by the end of the festival they reap the harvest which is called harela. This allows them to test the quality of their seeds. During this festival, brothers also provide gifts for their sisters.\n" +
                "\n");

            setFestivalDate("Date: 16 July 2024");
        }
        else if ((currentDate >= 17 || currentMonth >= 7) && (currentDate <= 16 || currentMonth <= 8)) {
            setFestival("Ghee Sankranti");
            setFestivalDescription("Ghee Sankranti is a festival that portrays the gratitude of the locals who earn a living via the occupation of farming by marking the onset of the harvesting season. It is also known as the 'Olgia' festival and is celebrated on the first day of August (Bhado), a time wherein the crops are thriving, and the milk-laden cattle are ready to be milked. In terms of how the celebration has gradually evolved from over the years, the ancient tradition saw nephews and sons-in-laws give presents to their maternal uncles and fathers-in-laws respectively. However, today's context is summarised by the fact that agriculturists and artisans give presents to their landowners. Common presents that are exchanged include axes, ghee, datkhocha (metallic toothpick) and firewood. An important ritual of this festival includes that of eating ghee and chapatis stuffed with urad dal!");

            setFestivalDate("Date: 16 August 2024");
        }
        else if ((currentDate >= 17 || currentMonth >= 8) && (currentDate <= 16 || currentMonth <= 9)) {
            setFestival("Nanda Devi Raj Jat Yatra");
            setFestivalDescription("Also known as the 'Himalayan Mahakumbh', this festival of Uttarakhand marks commemoration to Goddess Nanda Devi wherein devotees from both the Garhwal and Kumaon regions come together to be a part of the sacred yatra. Held for three weeks and being organized once every twelve years, the Nanda Devi Raj Jat Yatra which spans over 280 km takes almost 22 days to complete. During this yatra, all sections of the society take part- dalits play drums, thakurs blow bhankauras, and brahmins take care of ceremonial parasols.\n" +

                "The Nanda Devi Raj Jat Yatra dates are: 1905 (Aug 21 - Sep 4), 1925 (Aug 23 - Sep 6), 1951 (Aug 24 - Sep 7), 1968 (Aug 26 - Sep 9), 1987 (Aug 27 - Sep 10), 2000 (Aug 25 - Sep 8), 2014 (Aug 18 - Sep 6). The upcoming yatra is scheduled for 2026."

            );

            setFestivalDate("Date: August to September");
        }
        else if ((currentDate >= 17 || currentMonth >= 8) && (currentDate <= 11 || currentMonth <= 11)) {
            setFestival("Egaas");
            setFestivalDescription("People of Uttarakhand believe that Lord Rama returned from his exile 11 days late to the upper hilly regions, which is why they celebrate Egaas, 11 days after Diwali, by cooking various delicacies, performing folk dances and lighting up their homes. People even celebrate by spinning a rope called \"Bhailo\" with a fire lit at one end.");

            setFestivalDate("Date: 11 November 2024");
        }
        else if (currentDate <= 12 || currentMonth <= 11) {
            setFestival("Bagwal Fair");
            setFestivalDescription("Bagwal Fair in Uttarakhand is celebrated along with Raksha Bandhan every year. Prayers are offered to Goddess Varahi, and prasad is distributed. A very famous ritual that takes place is that people throw stones at each other and the ritual ends when the head priest signals to stop. Devotees from all the neighbouring regions come to witness this fair. ");

            setFestivalDate("Date: 12 November 2024");
        }
        else {
            setFestival("None");
            setFestivalDescription("None");
            setFestivalDate("Date: ");
        }
    }, []); // Empty dependency array ensures this effect runs only once after the initial render



    return (
        <section className={"display-festival-container"}>
            <Link to={`/festival/${festival.replace(/\s/g, '').toLowerCase()}`}>

            <h1>Upcoming Uttarakhand Festival</h1>
                <p className={"display-festival-container-info"} >Click to view more</p>
                <div className={"festival-container"}>
                    <h3>{festival}</h3>
                    <p className={"festival-date"}>{festivalDate}</p>
                    <p>{festivalDescription}</p>

                    {/*<Link to={`/festival/${festival.replace(/\s/g, '').toLowerCase()}`}>*/}
                    {/*    <button className={"festival-button"}>Read more</button>*/}
                    {/*</Link>*/}
                </div>

            </Link>
        </section>
    );
}

export default Showfestival;
