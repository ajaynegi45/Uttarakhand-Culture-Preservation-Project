import {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import './index.css';
console.log("main.jsx");


const Layout = lazy(() => import('./Layout.jsx'));
const App = lazy(() => import('./App.jsx'));

const Language = lazy(() => import('./Pages/Language/Language.jsx'));
const Kumaoni = lazy(() => import('./Pages/Language/Kumaoni.jsx'));
const Garhwali = lazy(() => import('./Pages/Language/Garhwali.jsx'));

const Food = lazy(()=> import("./Pages/Food/Food.jsx"));

const ErrorPage = lazy(() => import('./components/ErrorPage.jsx'));

const Contact = lazy(() => import("./Pages/Contact.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Contribution = lazy(() => import("./Pages/Contribution.jsx"));


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

            {/* Useful Links */}
            <Route path='contact' element={<Contact/>} />
            <Route path='about' element={<About/>} />
            <Route path='contribution' element={<Contribution/>} />

            {/* Error */}
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Suspense fallback={<div className={"loading"}> <img src={"/loading.svg"}/> </div>}>
            <RouterProvider router={router} />
        </Suspense>
    /*</React.StrictMode>*/
);
