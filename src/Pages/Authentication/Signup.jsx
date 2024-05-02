import "./signup.css";
import {useRef} from "react";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const firstName = useRef("");
    const lastName = useRef("");
    const password = useRef("");
    const email = useRef("");

    console.log("Sign up form render");

    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("submitHandler is invoke");

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                password: password.current.value,
                email: email.current.value
            })
        };
        const response = await fetch("http://localhost:8080/api/v1/registration", options);
        try {
            const responseData = await response.json();
            console.log("\n\n\n\n\n\n\n\n\n\n Data: ",responseData);

            if (response.ok) {
                toast.promise(
                    resolveAfter3Sec,
                    {
                        pending: 'Registration is pending',
                        success: `${responseData.message} 🤯`,
                        error: 'Registration is rejected 🤯'
                    },{
                        position: "bottom-right",
                        autoClose: 5000,
                        newestOnTop: false,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        progressStyle: true
                    }
                );
            } else {
                toast.error(responseData.message,{
                    position: "bottom-right",
                    autoClose: 5000,
                    newestOnTop: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    progressStyle: true
                });
            }
        } catch (error) {
            console.error("Error parsing JSON:", error);
            toast.error("An unexpected error occurred. Please try again later.",{
                position: "bottom-right",
                autoClose: 5000,
                newestOnTop: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                progressStyle: true
            });
        }
    }


    return (
        <section className="signup-container">

            <ToastContainer />

            <h1 className={"signup-title"}>Signup </h1>
            <form onSubmit={submitHandler}>

                <label htmlFor="firstName"/>
                <input
                    type="text"
                    name="firstName"
                    ref={firstName}
                    placeholder="First Name"
                />

                <label htmlFor="lastName"/>
                <input
                    type="text"
                    name="lastName"
                    ref={lastName}
                    placeholder="Last Name"
                />

                <label htmlFor="password"/>
                <input
                    type="password"
                    name="password"
                    ref={password}
                    placeholder="Password"
                />

                <label htmlFor="email"/>
                <input
                    type="type"
                    name="email"
                    ref={email}
                    placeholder="Email Address"
                />

                <button type="submit">Sign Up</button>
            </form>


        </section>
    );
}

export default Signup;
