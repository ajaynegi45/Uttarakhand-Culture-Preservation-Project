import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./contributor.css";
import user from '../assets/images/contributor.webp';
function Contribution() {
    const [stargazers, setStargazers] = useState([]);
    const [forks, setForks] = useState([]);
    const [contributors, setContributors] = useState([]);

    console.log("Render Contributor");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-Preservation-Project/stargazers');
                const data = await response.json();
                setStargazers(data);
            } catch (error) {
                console.error('Error fetching stargazers:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-Preservation-Project/forks', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "X-GitHub-Api-Version": "2022-11-28"
                    }
                });
                const data = await response.json();
                setForks(data);
            } catch (error) {
                console.error('Error fetching forks:', error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-Preservation-Project/contributors');
                const data = await response.json();
                setContributors(data);
            } catch (error) {
                console.error('Error fetching contributors:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <section className={"contributors-container"}>

            <div className={"contributors-container-heading"}>
                <h1>Uttarakhand Culture Preservation Project</h1>
                <p>The objective of this project is to address the concerning trend of the younger generation losing
                    touch with their cultural roots and to safeguard the traditional rituals, gods, and unique practices
                    of Uttarakhand. We believe it's crucial to bridge this gap and ensure the preservation of our
                    cultural identity for generations to come.</p>
            </div>

            <div className={"user-container"}>
                <h1>Contributors</h1>
                <div className={"user-list"}>
                    {Array.isArray(contributors) && contributors.map(contributors => (
                        <div key={contributors.id} className={"user"}>
                            <img src={contributors.avatar_url} alt={contributors.login}
                                 style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>
                            <p>{contributors.login}</p>
                        </div>
                    ))}
                    <div className={"user"}>
                        <img src={user} alt={"User-profile"}
                             style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>
                        <p>Developer</p>
                    </div>
                </div>
            </div>


            <div className={"user-container"}>
                <h1>Forked Users</h1>
                <div className={"user-list"}>
                    {Array.isArray(forks) && forks.map(forks => (
                        <div key={forks.id} className={"user"}>
                            <img src={forks.owner.avatar_url} alt={forks.owner.login}
                                 style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>
                            <p>{forks.owner.login}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={"user-container"}>
                <h1>Stared Users</h1>
                <div className={"user-list"}>
                    {Array.isArray(stargazers) && stargazers.map(stargazer => (
                        <div key={stargazer.id} className={"user"}>
                            <img src={stargazer.avatar_url} alt={stargazer.login}
                                 style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>
                            <p>{stargazer.login}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/*<img src={"https://github.com/ajaynegi45/Uttarakhand-Culture-Preservation-Project/stargazers"}/>*/}

            {/*<img src="https://contrib.rocks/image?repo=ajaynegi45/Uttarakhand-Culture-Preservation-Project"/>*/}


            {/*https://api.github.com/users/octocat/starred/ajaynegi45/Uttarakhand-Culture-Preservation-Project*/}

        </section>
    );
}

export default Contribution;