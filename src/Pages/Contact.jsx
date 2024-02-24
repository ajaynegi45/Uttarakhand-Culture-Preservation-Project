import "./contact.css"
import { useRef } from "react";
function Contact() {
    console.log("Contact.jsx");

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const submitData = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        if (name &&  email && subject && message) {
            const ipAddress = await getIPAddress();
            const locationInfo = await getLocationInfo(ipAddress);
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
                        email,
                        subject,
                        message,
                        date: formattedDate,
                        location: locationInfo,
                    }),
                }
            );

            if (res) {
                nameRef.current.value = "";
                emailRef.current.value = "";
                subjectRef.current.value = "";
                messageRef.current.value = "";
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
                <form method="POST" onSubmit={submitData}>

                    <div className={"form-title"}>
                        <h1>Contact Us</h1>
                    </div>

                    <label htmlFor="name">NAME <em>&#x2a;</em></label>
                    <input id="name" name="name" type="text" ref={nameRef} autoFocus={true} required/>

                    <label htmlFor="email">EMAIL <em>&#x2a;</em></label>
                    <input id="email" name="email" type="email" ref={emailRef} required/>

                    <label htmlFor="subject">SUBJECT <em>&#x2a;</em></label>
                    <input id="subject" name="subject" type="text" ref={subjectRef} required />

                    <label htmlFor="message">YOUR MESSAGE <em>&#x2a;</em></label>
                    <textarea id="message" name="message" rows="4" ref={messageRef} required />

                    <div className={"submit-button"}>
                        <button id="form-submit" type={"submit"}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
