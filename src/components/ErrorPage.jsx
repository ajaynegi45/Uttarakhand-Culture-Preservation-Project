import { useNavigate, useRouteError } from 'react-router-dom';
function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    const navigate = useNavigate();

    const errorPageStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        color: 'red',
    };
    const goBackStyles = {
        marginTop : "20px",
        padding: '10px 20px',
        background: 'white',
        boxShadow: 'none',
        cursor: 'pointer',
        border: 'none',
        textDecoration: 'none',
        color: 'black',
    };
    return (
        <div id="error-page" style={errorPageStyles}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <p><i>{error.statusText || error.message}</i></p> */}
            <button onClick={() => navigate(-1)} style={goBackStyles}>
                Go Back
            </button>
        </div>
    );
}
export default ErrorPage;