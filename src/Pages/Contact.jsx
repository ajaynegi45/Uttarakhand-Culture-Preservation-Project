import "./contact.css"
import { useRef, useState } from "react";
import { toast } from "sonner";

function Contact() {
    console.log("Contact.jsx");

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);

    const submitData = async (event) => {
        event.preventDefault();

        const name = nameRef.current?.value || "";
        const email = emailRef.current?.value || "";
        const subject = subjectRef.current?.value || "";
        const message = messageRef.current?.value || "";

        if (!name || !email || !subject || !message) {
            toast.error("Please fill in all fields!");
            return;
        }

        const toastId = toast.loading("Submitting your message...");

        setIsLoading(true);

        try {
            const res = await fetch(
                "https://0u6n608iw4.execute-api.ap-south-1.amazonaws.com/formmailly/api/contact",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name,
                        email,
                        reason: `ukculture.netlify.app - ${subject}`, // ✅ Add identifier
                        message,
                    }),
                }
            );

            if (res.ok) {
                toast.success("Message sent successfully! ❤️", {
                    id: toastId,
                });

                nameRef.current.value = "";
                emailRef.current.value = "";
                subjectRef.current.value = "";
                messageRef.current.value = "";
            } else {
                toast.error("Failed to submit form!", { id: toastId });
            }
        } catch (error) {
            toast.error("Something went wrong!", { id: toastId });
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-us">
                <form method="POST" onSubmit={submitData}>
                    <div className="form-title">
                        <h1>Contact Us</h1>
                    </div>

                    <label htmlFor="name">NAME <em>*</em></label>
                    <input id="name" name="name" type="text" ref={nameRef} required />

                    <label htmlFor="email">EMAIL <em>*</em></label>
                    <input id="email" name="email" type="email" ref={emailRef} required />

                    <label htmlFor="subject">SUBJECT <em>*</em></label>
                    <input id="subject" name="subject" type="text" ref={subjectRef} required />

                    <label htmlFor="message">YOUR MESSAGE <em>*</em></label>
                    <textarea id="message" name="message" rows="4" ref={messageRef} required />

                    <div className="submit-button">
                        <button id="form-submit" type="submit" disabled={isLoading}>
                            {isLoading ? "Submitting..." : "SUBMIT"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
