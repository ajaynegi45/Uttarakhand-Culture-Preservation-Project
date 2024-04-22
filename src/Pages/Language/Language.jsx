import {Link} from "react-router-dom";
import "./language.css"
import LanguageList from "/src/assets/Language/LanguageList.webp";
import languageMap from '../../assets/Language/languageMap.png';
import kumaoni from '../../assets/Language/Kumaoni.webp';
import Garhwali from '../../assets/Language/Garhwali.webp';
import Jaunsari from '../../assets/Language/Jaunsari.webp';
import Rwalty from '../../assets/Language/Rwalty.webp';
import Jaunpuri from '../../assets/Language/Jaunpuri.webp';
import Bangani from '../../assets/Language/Bangani.webp';
import Buksani from '../../assets/Language/Buksani.webp';
import Marchha from '../../assets/Language/Marchha.webp';
import Johari from '../../assets/Language/Johari.webp';
import Tharu from '../../assets/Language/Tharu.webp';
import Rad from '../../assets/Language/Rad.webp';
import Raji from '../../assets/Language/Raji.webp';
function Language() {
    return (
        <section>
            <div className={"language-header-image"}>
                <img src={LanguageList} alt="Local Language Image" loading="lazy" decoding="async" />
            </div>

            <div className="language-about-container">
                <h1 className="explore-uttarakhand">About Language</h1>
                <p>Hindi serves as the official language of Uttarakhand, a state that was carved out of Uttar Pradesh.
                    However, the linguistic landscape here is incredibly diverse, boasting not just one or two but a total of 13 local languages, each with its own unique variations.
                    The history of Uttarakhand's languages traces back to the meticulous efforts of George Abraham Grierson, who undertook their classification between 1894 and 1927 with the assistance of revenue department officials.
                    Grierson's work laid the foundation for linguistic studies in the region, significantly influencing subsequent scholars.
                    However, his classification overlooked the Tibetan languages, a notable omission in his otherwise comprehensive document.
                    Following Grierson, luminaries like Dr. Govind Chatak, Chakradhar Bahuguna, Dr. Haridutt Bhatt, and Dr. D. Sharma made noteworthy contributions to the study of Uttarakhand's folk languages. Despite these efforts, the linguistic richness of Uttarakhand extends beyond these documented languages, encompassing a tapestry of dialects, each reflecting the state's vibrant cultural heritage.</p>

                <div className={"language-map"}>
                    <h1 className="explore-uttarakhand">Dialects of Language</h1>
                    <img src={languageMap} alt="Local Language Image" loading="lazy" decoding="async" />
                    <p>Zoom to view Map</p>
                </div>
            </div>

            <h1 className="explore-uttarakhand">Explore Local Languages</h1>

            <p className={"local-language-p"}>Only Kumoani is live</p>

            <div className="explore-card-list">

                <div className="explore-card">
                    <Link to="kumaoni" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={kumaoni} alt="Kumaoni Word Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Kumaoni</p>
                        </div>
                    </Link>
                </div>

                <div className="explore-card">
                    <Link to="garhwali" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={Garhwali} alt="Garhwali Word Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Garhwali</p>
                        </div>
                    </Link>
                </div>

                <div className="explore-card">
                    <Link to="garhwali" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={Jaunsari} alt="Garhwali Word Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Jaunsari</p>
                        </div>
                    </Link>
                </div>

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Jaunpuri} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Jaunpuri</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Rwalty} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Rwalty</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Bangani} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Bangani</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Marchha} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Marchha</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Johari} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Johari</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Tharu} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Tharu</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Buksani} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Buksani</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Rad} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Rad Lvu</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className="explore-card">*/}
                {/*    <Link to="/language/garhwali" className="explore-card-link">*/}
                {/*        <div className="explore-card-image-container">*/}
                {/*            <img src={Raji} alt="Garhwali Word Image"*/}
                {/*                 className="explore-card-image" loading="lazy" decoding="async"/>*/}
                {/*        </div>*/}
                {/*        <div className="explore-card-text-container">*/}
                {/*            <p className="explore-card-text">Raji</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

            </div>

        </section>
    );
}

export default Language;