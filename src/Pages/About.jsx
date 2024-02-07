import React from 'react';

function About() {
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
        <section>
            <div style={check}>
                <p style={{color: "#FF9800"}} >Our aim is to ensure that this invaluable heritage is passed down to future generations.</p>
            </div>
        </section>
    );
}

export default About;