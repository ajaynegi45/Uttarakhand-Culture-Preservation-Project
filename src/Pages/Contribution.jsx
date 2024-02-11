import {Link} from "react-router-dom";
import "./contribution.css"
function Contribution() {

    const check = {
        margin:"20px",
        color:"white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '40vh',
    }
    return (
        <section className={"contribution-container"}>
            <div className={""} style={check}>
                <h3>Currently working on this page</h3>
                <p>Mean while checkout <Link
                    to={"https://github.com/ajaynegi45/Uttarakhand-Culture-Preservation-Project"}
                    style={{color: "#FF9800", textDecoration: "underline"}}>Github</Link></p>
            </div>

            <div>
                <h2>How to Contribute 👀</h2>
                <p>You can be a valuable part of our mission to showcase the rich culture, history, and nature of
                    Uttarakhand. We welcome contributions in both code and non-code forms:</p>

                <h3>For Code Contributions:</h3>
                <ul>
                    <li><strong>🐞 Report a Bug:</strong> If you find a bug, create an issue with detailed information or
                        submit a pull request if you can fix it.
                    </li>
                    <li><strong>🎉 New Features:</strong> Propose new features by creating an issue to discuss ideas or
                        submit a pull request with the new feature implementation.
                    </li>
                    <li><strong>💻 Improve User Interface:</strong> Enhance the user interface with design improvements.
                        Propose changes to layout, color scheme, or fonts, ensuring a clean and minimal approach.
                    </li>
                    <li>You can assist in building the website. We are using React for the frontend and Java for the
                        backend. Your expertise in these technologies is greatly appreciated. To get involved, reach out
                        to us, and we'll guide you on how to contribute to the codebase.
                    </li>
                </ul>

                <h3>For Non-Code Contributions:</h3>
                <p>If you are not a coder, you can still make a significant impact:</p>
                <ul>
                    <li><strong>📄 Improve Documentation:</strong> Help improve project documentation.</li>
                    <li><strong>Website Design:</strong> Share your creativity and design skills to help improve the
                        look and feel of the website.
                    </li>
                    <li><strong>Content Gathering:</strong> Select a feature or aspect of Uttarakhand and start
                        gathering authentic and insightful information. Please provide the sources or links from where
                        you obtained the information. If the information is your own, make sure to mention. Organize the
                        information in a structured manner and create issues with your suggestions, designs, or content
                        contributions.
                    </li>
                    <li>If your contribution aligns with our mission to provide valuable and insightful content, we will
                        gladly incorporate it into our website and give proper credit to you.
                    </li>
                </ul>

                <h3>Help Us Find the Perfect Name for the Website:</h3>
                <p><strong>Suggest a Name</strong>: We are in search of a unique and concise name for our website that
                    reflects its purpose. We encourage you to suggest a name in Uttarakhandi language that is both
                    meaningful and easy to remember. Your input is highly valued, and we'll consider all suggestions to
                    choose the most fitting name. Please share your name suggestions via <a
                        href="mailto:contact@ajaynegi.co">E-mail</a> with "Website Name Suggestion" as the subject line.
                </p>

                <p>We are committed to recognizing the efforts of our contributors. Soon, we will create a
                    "Contributions" page on our website where we will showcase the photos and names of all our
                    contributors.</p>
            </div>


        </section>
    );
}

export default Contribution;