import {useEffect, useState} from 'react';
import "./contributor.css";
import user from '../assets/images/contributor.webp';
import {Link} from "react-router-dom";


function getTimeAgo(commitDate) {
    // Parse commit date
    const commitTime = new Date(commitDate);

    // Get current time
    const currentTime = new Date();

    // Calculate the difference in milliseconds
    const differenceMs = currentTime - commitTime;

    // Convert milliseconds to minutes
    const minutesAgo = Math.round(differenceMs / (1000 * 60));

    if (minutesAgo < 60) {
        return minutesAgo + " minutes ago";
    } else {
        // Convert minutes to hours
        const hoursAgo = Math.round(minutesAgo / 60);
        return hoursAgo + " hours ago";
    }
}




function Contribution() {
    const [stargazers, setStargazers] = useState([]);
    const [forks, setForks] = useState([]);
    const [contributors, setContributors] = useState([]);
    const [commits, setCommits] = useState([]);
    // const [issues, setIssues] = useState([]);


    console.log("Render Contributor");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_GITHUB_STARGAZERS}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        "X-GitHub-Api-Version": "2022-11-28"
                    }
                });
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
                const response = await fetch(`${import.meta.env.VITE_GITHUB_FORK}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
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
                const response = await fetch(`${import.meta.env.VITE_GITHUB_CONTRIBUTORS}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        "X-GitHub-Api-Version": "2022-11-28"
                    }
                });
                const data = await response.json();
                setContributors(data);
            } catch (error) {
                console.error('Error fetching contributors:', error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_GITHUB_COMMITS}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        "X-GitHub-Api-Version": "2022-11-28"
                    }
                });
                const data = await response.json();
                setCommits(data);
            } catch (error) {
                console.error('Error fetching commits:', error);
            }
        };
        fetchData();
    }, []);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`${import.meta.env.VITE_GITHUB_ISSUES}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    //                     "X-GitHub-Api-Version": "2022-11-28"
    //                 }
    //             });
    //             const data = await response.json();
    //             setIssues(data);
    //         } catch (error) {
    //             console.error('Error fetching commits:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);


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
                            <Link to={contributors.html_url}>
                            <img src={contributors.avatar_url} alt={contributors.login}
                                 style={{width: 90, height: 90, borderRadius: '50%', margin: '5px'}}/>
                            <p className={"contributor-name"}>{contributors.login}</p>
                            </Link>
                        </div>

                    ))}
                    <div className={"user"}>
                        <img src={user} alt={"User-profile"}
                             style={{width: 90, height: 90, borderRadius: '50%', margin: '5px'}}/>
                        <p>Developer</p>
                    </div>
                </div>
            </div>


            {/*<div className={"user-container"}>*/}
            {/*    <h1>Issues & Pull Request</h1>*/}
            {/*    <div className={"user-list"}>*/}
            {/*        {Array.isArray(issues) && issues.slice(0, 10).map(issues => (*/}
            {/*            <div key={issues.id} className={"commits-post issue-post"}>*/}
            {/*                <Link to={issues.html_url} className={"commits-post-link"}>*/}
            {/*                    <img src={issues.user.avatar_url} alt={issues.user.login}*/}
            {/*                         style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>*/}
            {/*                    <p className={"issue-title"}>{issues.title}</p>*/}

            {/*                    <p>{issues.body}</p>*/}
            {/*                </Link>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className={"user-container"}>
                <h1>Forked Users</h1>
                <div className={"user-list"}>
                    {Array.isArray(forks) && forks.map(forks => (
                        <div key={forks.id} className={"user"}>
                            <Link to={forks.owner.html_url}>
                            <img src={forks.owner.avatar_url} alt={forks.owner.login}
                                 style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>
                            <p className={"contributor-name"} >{forks.owner.login}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>


            <div className={"user-container"}>
                <h1>Stargazer</h1>
                <div className={"user-list"}>
                    {Array.isArray(stargazers) && stargazers.map(stargazer => (
                        <div key={stargazer.id} className={"user"}>
                            <Link to={stargazer.html_url}>
                            <img src={stargazer.avatar_url} alt={stargazer.login}
                                 style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>
                            <p className={"contributor-name"} >{stargazer.login}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>


            <div className={"user-container"}>
                <h1>Recent Commits</h1>
                <div className={"user-list"}>
                    {Array.isArray(commits) && commits.slice(0, 14).map(commits => (
                        <div key={commits.node_id} className={"commits-post"}>
                            <Link to={commits.html_url} className={"commits-post-link"}>
                                <img src={commits.author.avatar_url} alt={commits.author.login}
                                     style={{width: 50, height: 50, borderRadius: '50%', margin: '5px'}}/>
                                <p className={"commits-post-auther"}>{commits.author.login}</p>
                                <p className={"commits-post-info"}>{commits.commit.message}</p>
                                <p className={"Time"}>{getTimeAgo(commits.commit.author.date)}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Contribution;