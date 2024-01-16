import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carousel.jsx";
import EXploreCard from "./components/EXploreCard.jsx";


function App() {
  return (
    <>
        <div>
            <Navbar/>
            <Carousel/>

            <EXploreCard/>
            <Footer/>

        </div>

    </>
  )
}

export default App;
