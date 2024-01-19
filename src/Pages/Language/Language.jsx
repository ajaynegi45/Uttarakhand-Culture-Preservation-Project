import React from 'react';
import {Link} from "react-router-dom";
import "./language.css"
import LanguageList from "/src/assets/images/LanguageList.jpg";
import Linguistic from "../../assets/images/Linguistic.png";
import languageMap from '../../assets/images/languageMap.png';
import kumaoniLanguage from '../../assets/images/kumaoniLanguage.jpg'
function Language() {
    return (
        <section>
            <div className={"language-header-image"}>
                <img src={LanguageList} alt="Local Language Image"/>
            </div>

            <div className="language-about-container">
                <h1 className="explore-uttarakhand">About Language</h1>
                <p>
                    There is an old saying in Hindi, <b>" Kos kos par bade paani chaar kos par bani "</b>.
                    Hindi is also the official language of this state separated from Uttar Pradesh, but if we talk about
                    the local languages, then not one or two but 13 languages ​​are spoken here. There are different
                    forms of these languages. Talking about the history of the languages ​​of Uttarakhand, George
                    Abraham Grierson first worked on them. He classified the languages ​​of Uttarakhand between 1894 and
                    1927 with the help of revenue department employees. The linguists of Uttarakhand seem to be greatly
                    influenced by Grierson's work, while he had prepared a kind of official document in which the
                    Tibetan languages ​​have not got a special place. Even after him, Dr. Govind Chatak, Chakradhar
                    Bahuguna, Dr. Haridutt Bhatt, Dr. D. Sharma etc. also did remarkable work in the context of the folk
                    languages ​​of Uttarakhand.
                </p>

                <div className={"language-map"}>
                    <img src={languageMap} alt="Local Language Image"/>
                </div>
            </div>

            <h1 className="explore-uttarakhand">Explore Languages</h1>

            <div className="explore-card-list">

            <div className="explore-card">
                    <Link to="/language/kumaoni" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={kumaoniLanguage} alt="Linguistic Survey of India Book Image"
                                 className="explore-card-image"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Kumaoni</p>
                        </div>
                    </Link>
                </div>

                <div className="explore-card">
                    <Link to="/language/garhwali" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={Linguistic} alt="Linguistic Survey of India Book Image"
                                 className="explore-card-image"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Garhwali</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
);
}

export default Language;