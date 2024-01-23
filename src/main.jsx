import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx';
import Layout from './Layout.jsx';
import './index.css';
const Language = lazy(() => import('./Pages/Language/Language.jsx'));
const Kumaoni = lazy(() => import('./Pages/Language/Kumaoni.jsx'));
const Garhwali = lazy(() => import('./Pages/Language/Garhwali.jsx'));
const ErrorPage = lazy(() => import('./components/ErrorPage.jsx'));
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<App />} />
            <Route path='language' element={<Language />} />
            <Route path='language/kumaoni' element={<Kumaoni />} />
            <Route path='language/garhwali' element={<Garhwali />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
);
