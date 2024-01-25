import {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import './index.css';

const Layout = lazy(() => import('./Layout.jsx'));
const App = lazy(() => import('./App.jsx'));

const Language = lazy(() => import('./Pages/Language/Language.jsx'));
const Kumaoni = lazy(() => import('./Pages/Language/Kumaoni.jsx'));
const Garhwali = lazy(() => import('./Pages/Language/Garhwali.jsx'));
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
