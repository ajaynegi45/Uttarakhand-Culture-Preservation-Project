import {useRef, useState} from 'react';
import "./authentication.css"
import {Link} from "react-router-dom";

const SignInSignUpForm = () => {
    console.log("Render Login");

    const [isSignUp, setIsSignUp] = useState(false);
    const handleSignUpButtonClick = () => { setIsSignUp(true); };
    const handleSignInButtonClick = () => { setIsSignUp(false); };

    const signUpNameRef = useRef();
    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();

    const submitData = async (event) => {
        event.preventDefault();

        const name = signUpNameRef.current.value;
        const email = signUpEmailRef.current.value;
        const password = signUpPasswordRef.current.value;
        console.log(name);
        console.log(email);
        console.log(password);

        if(name && email && password){
            const res = await fetch(
                `${import.meta.env.VITE_SIGNUP_URL}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                },
            );
            if (res) {
                signUpNameRef.current.value = "";
                signUpEmailRef.current.value = "";
                signUpPasswordRef.current.value = "";
                alert("You are successfully register ✔️");
            }
            else {
                alert("Failed to submit the form. Please try again later.");
            }

        }else {
            alert("Please fill in all the required fields before submitting the form.");
        }

    };



    return (
      <section className={"authentication-container"} >

        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">


            <div className="form-container sign-up-container">
                <form method="POST" onSubmit={submitData} >
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <Link to={"#"} className="social"><i className="fab fa-facebook-f"></i></Link>
                        <Link to={"#"} className="social"><i className="fab fa-google-plus-g"></i></Link>
                        <Link to={"#"} className="social"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                    <span>or use your email for registration</span>

                    <label htmlFor="signupname"/>
                    <input id="signupname" name="signupname" ref={signUpNameRef} type="text" placeholder="Name" required/>

                    <label htmlFor="signupemail"/>
                    <input id="signupemail" name="signupemail" ref={signUpEmailRef} type="email" placeholder="Email" required/>

                    <label htmlFor="signuppassword"/>
                    <input id="signuppassword" name="signuppassword" ref={signUpPasswordRef} type="password" placeholder="Password" autoComplete={"true"}  required/>

                    <button type={"submit"} >Sign Up</button>
                </form>
            </div>


            <div className="form-container sign-in-container">
                <form method="POST" onSubmit={submitData} >
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <Link to={"#"} className="social"><i className="fab fa-facebook-f"></i></Link>
                        <Link to={"#"} className="social"><i className="fab fa-google-plus-g"></i></Link>
                        <Link to={"#"} className="social"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                    <span>or use your account</span>

                    <label htmlFor="signinemail" />
                    <input id="signinemail" name="signinemail" type="email" placeholder="Email" required/>

                    <label htmlFor="signinpassword" />
                    <input id="signinpassword" name="signinpassword" type="password" placeholder="Password" autoComplete={"true"} required/>
                    <Link to={"#"}>Forgot your password?</Link>
                    <button>Sign In</button>
                </form>
            </div>


            <div className="overlay-container">
                <div className="overlay">

                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={handleSignInButtonClick}>Sign In</button>
                    </div>

                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={handleSignUpButtonClick}>Sign Up</button>
                    </div>

                </div>
            </div>
        </div>
      </section>
    );
};

export default SignInSignUpForm;
