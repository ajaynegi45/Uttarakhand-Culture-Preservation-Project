import React , {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const Language = lazy(()=> import("./Pages/Language/Language.jsx"));
const Kumaoni = lazy(()=> import("./Pages/Language/Kumaoni.jsx"));
const Garhwali = lazy(()=> import("./Pages/Language/Garhwali.jsx"));
const ErrorPage = lazy(()=> import("./components/ErrorPage.jsx"));
import App from './App.jsx'
import Layout from "./Layout.jsx";
import './index.css'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Layout/> } >
            <Route path='' element={ <App/> } />
            <Route path='language' element={ <Suspense> <Language/> </Suspense>} />
            <Route path='language/kumaoni' element={<Suspense> <Kumaoni/> </Suspense>} />
            <Route path='language/garhwali' element={<Suspense> <Garhwali/> </Suspense>} />
            <Route path='*' element={<Suspense> <ErrorPage/> </Suspense>} />
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)