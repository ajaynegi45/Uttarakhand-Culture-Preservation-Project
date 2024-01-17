import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ExploreCard from './components/ExploreCard.jsx';
import ImageSlider from './components/ImageSlider.jsx';

// Import images
import lakeImage from './assets/images/lake.jpg';
import snowImage from './assets/images/snow.jpg';
import trekkingImage from './assets/images/trekking.jpg';
import nainitalImage from './assets/images/nanital.jpg';

function App() {
    const images = [
        { src: lakeImage, alt: 'Lake Image' },
        { src: snowImage, alt: 'Snow Image' },
        { src: trekkingImage, alt: 'Trekking Image' },
        { src: nainitalImage, alt: 'Nainital Image' },
    ];
    return (
    <>
        <div>
            <Navbar/>

            <div>
                <ImageSlider images={images}/>
            </div>

            <ExploreCard/>
            <Footer/>


        </div>

    </>
    )
}

export default App;
