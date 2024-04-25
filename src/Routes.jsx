import {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import './index.css';
import Dress from "./Pages/Dress/Dress.jsx";
console.log("Routes.jsx");


const Layout = lazy(() => import('./Layout.jsx'));
const App = lazy(() => import('./App.jsx'));

const Language = lazy(() => import('./Pages/Language/Language.jsx'));
const Kumaoni = lazy(() => import('./Pages/Language/Kumaoni.jsx'));
const Garhwali = lazy(() => import('./Pages/Language/Garhwali.jsx'));
const Food = lazy(()=> import("./Pages/Food/Food.jsx"));
const Chainsoo = lazy(()=> import("./Pages/Food/Chainsoo.jsx"));

const Temple = lazy(()=> import("./Pages/Temple/Temple.jsx"));
const Jewellery = lazy(() => import('./Pages/Jewellery/Jewellery.jsx'));
const Art = lazy(() => import('./Pages/Art/Art.jsx'));
const Dance = lazy(() => import('./Pages/Dance/Dance.jsx'));
const Music = lazy(() => import('./Pages/Music/Music.jsx'));
const Architecture = lazy(() => import('./Pages/Architecture/Architecture.jsx'));
const Community = lazy(() => import('./Pages/Community/Community.jsx'));
const Utensil = lazy(() => import("./Pages/Utensil/Utensil.jsx"));


const Contact = lazy(() => import("./Pages/Contact.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Contribution = lazy(() => import("./Pages/Contribution.jsx"));
const Map = lazy(() => import("./Pages/Map.jsx"));
const Contributor = lazy(() => import("./Pages/Contributor.jsx"));
const Login = lazy(() => import("./Pages/Authentication/Authentication.jsx"));


const UnderWorkingPage = lazy(() => import("./components/UnderWorkingPage.jsx"));
const ErrorPage = lazy(() => import('./components/ErrorPage.jsx'));

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path='/' element={<Layout />}>
            <Route path='' element={<App />} />

            {/* Language */}
            <Route path='language' element={<Language />} />
            <Route path='language/kumaoni' element={<Kumaoni />} />
            <Route path='language/garhwali' element={<Garhwali />} />

            {/* Food */}
            <Route path='food' element={<Food />} />
            <Route path='food/chainsoo' element={<Chainsoo />} />

            <Route path='food/*' element={<UnderWorkingPage />} />

            {/* Temple */}
            <Route path='temple' element={<Temple />} />
            <Route path='temple/*' element={<UnderWorkingPage />} />

            {/* Jewellery */}
            <Route path='jewellery' element={<Jewellery />} />
            <Route path='jewellery/*' element={<UnderWorkingPage />} />

            {/* Art */}
            <Route path='art' element={<Art />} />
            <Route path='art/*' element={<UnderWorkingPage />} />

            {/* Music */}
            <Route path='music' element={<Music />} />
            <Route path='music/*' element={<UnderWorkingPage />} />

            {/* Dance */}
            <Route path='dance' element={<Dance />} />
            <Route path='dance/*' element={<UnderWorkingPage />} />

            {/* architecture */}
            <Route path='architecture' element={<Architecture />} />
            <Route path='architecture/*' element={<UnderWorkingPage />} />

            {/* Dress */}
            <Route path='dress' element={<Dress />} />
            <Route path='dress/*' element={<UnderWorkingPage />} />

            {/* Festival */}
            <Route path='festival/*' element={<UnderWorkingPage />} />

            {/* Community */}
            <Route path='community' element={<Community />} />
            <Route path='community/*' element={<UnderWorkingPage />} />


            {/* Community */}
            <Route path='utensils' element={<Utensil />} />
            <Route path='utensils/*' element={<UnderWorkingPage />} />


            {/* Useful Links */}
            <Route path='/login' element={<Login />} />
            <Route path='map' element={<Map />} />
            <Route path='contact' element={<Contact/>} />
            <Route path='about' element={<About/>} />
            <Route path='contribution' element={<Contribution/>} />
            <Route path='contributors' element={<Contributor/>} />

            {/* Error */}
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);
ReactDOM.createRoot(document.getElementById('root')).render(
        <Suspense fallback={<div className={"loading"}> <img src={"/loading.svg"}/> </div>}>
            <RouterProvider router={router} />
        </Suspense>
);
