import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Import Pages
import App from './App.jsx'
import ErrorPage from "./components/ErrorPage.jsx";
import Layout from "./Layout.jsx";
import Language from "./Pages/Language/Language.jsx";
import Kumaoni from "./Pages/Language/Kumaoni.jsx";
import Garhwali from "./Pages/Language/Garhwali.jsx";
import './index.css'



// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout/>,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: "",
//                 element: <App/>,
//             },
//             {
//                 path: "/language",
//                 element: <Language/>,
//                 children: [
//                     {
//                         path: "kumaoni",  // Updated path
//                         element: <Kumaoni/>
//                     },
//                     {
//                         path: "garhwali",  // Updated path
//                         element: <Garhwali/>
//                     }
//                 ]
//             }
//         ]
//     },
// ]);



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<App />} />
            <Route path='/language' element={<Language />} />
            <Route path='/language/kumaoni' element={<Kumaoni />} />
            <Route path='/language/garhwali' element={<Garhwali />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
