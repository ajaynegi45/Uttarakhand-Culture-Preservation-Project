import "./contact.css"
import {useState} from "react";
function Contact() {
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

            const ipAddress = await getIPAddress();
            const locationInfo = await getLocationInfo(ipAddress);
            console.log(locationInfo);

            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

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
                        date: formattedDate,
                        location: locationInfo,
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

    const getIPAddress = async () => {
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();

        console.log(data.ip);
        return data.ip;
    };

    const getLocationInfo = async (ipAddress) => {
        const res = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const data = await res.json();
        console.log(data);
        return {
            country: data.country_name,
            city: data.city,
            region: data.region,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone,
            service_provider: data.org,
            country_calling_code: data.country_calling_code,
        };
    };

    return (
        <section className={"contact-section"}>
        <div className="contact-us">
            <form method="POST">

                <div className={"form-title"}>
                    <h1>Contact Us</h1>
                </div>

                <label htmlFor="name">NAME <em>&#x2a;</em></label>
                <input id="name" name="name" type="text" value={userData.name} onChange={postUserData} required/>

                <label htmlFor="email">EMAIL <em>&#x2a;</em></label>
                <input id="email" name="email" type="email" value={userData.email} onChange={postUserData} required/>

                <label htmlFor="phone">PHONE</label>
                <input id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" value={userData.phone} onChange={postUserData}/>

                <label htmlFor="subject">SUBJECT <em>&#x2a;</em></label>
                <input id="subject" name="subject" type="text" value={userData.subject} onChange={postUserData} required />

                <label htmlFor="message">YOUR MESSAGE <em>&#x2a;</em></label>
                <textarea id="message" name="message" rows="4" value={userData.message} onChange={postUserData} required />

                <div className={"submit-button"}><button id="form-submit" onClick={submitData}>SUBMIT</button>
                </div>
            </form>
        </div>
        </section>
    );
}

export default Contact;