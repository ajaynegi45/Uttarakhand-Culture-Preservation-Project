import "./contact.css"
import {useState} from "react";
function Contact() {
    alert("Thank you for contacting us ❤️\nYour message has been successfully submitted!");

    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { name, phone, email, subject, message } = userData;

        if (name && phone && email && subject && message) {
            const res = await fetch(
                `${import.meta.env.VITE_DATABASE_URL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        subject,
                        message,
                    }),
                }
            );

            if (res) {
                setUserData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                alert("Thank you for contacting us❤️\nYour message has been successfully submitted!");
            } else {
                alert("Failed to submit the form. Please try again later.");
            }
        } else {
            alert("Please fill in all the required fields before submitting the form.");
        }
    };

    return (
        <section className={"contact-section"}>
        <div className="contact-us">
            <form method="POST">

                <div className={"form-title"}>
                    <h1>Contact Us</h1>
                </div>

                <label htmlFor="name">NAME <em>&#x2a;</em></label>
                <input id="name" name="name" required="" type="text" value={userData.name}
                       onChange={postUserData}/>

                <label htmlFor="email">EMAIL <em>&#x2a;</em></label>
                <input id="email" name="email" required="" type="email" value={userData.email}
                       onChange={postUserData}/>

                <label htmlFor="phone">PHONE</label>
                <input id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" value={userData.phone}
                       onChange={postUserData}/>

                <label htmlFor="subject">SUBJECT</label>
                <input id="subject" name="subject" type="text" value={userData.subject}
                       onChange={postUserData}/>

                <label htmlFor="message">YOUR MESSAGE <em>&#x2a;</em></label>
                <textarea id="message" name="message" required="" rows="4" value={userData.message}
                          onChange={postUserData}></textarea>

                {/*<h3>*/}
                {/*    Please provide all the information about your issue you can.*/}
                {/*</h3>*/}
                {/*<label htmlFor="spamProtection">SPAM PROTECTION <em>&#x2a; </em><span>&nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?</span></label><input*/}
                {/*id="spamProtection" name="spamProtection" type="text"/>*/}

                <div className={"submit-button"}><button id="form-submit" onClick={submitData}>SUBMIT</button>
                </div>
            </form>
        </div>
        </section>
    );
}

export default Contact;