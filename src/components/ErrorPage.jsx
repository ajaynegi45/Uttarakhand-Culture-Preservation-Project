import { useNavigate, useLocation } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div id="error-page" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            color: 'var(--orange)',
        }}>
            <h1>Oops!</h1>
            <p><span style={{color: 'var(--green)'}}>{currentUrl}</span> page does not exist</p>
            <button onClick={() => navigate(-1)} style={{
                marginTop: '20px',
                padding: '10px 20px',
                background: 'white',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
            }}>Go Back</button>
        </div>
    );
}

export default ErrorPage;
