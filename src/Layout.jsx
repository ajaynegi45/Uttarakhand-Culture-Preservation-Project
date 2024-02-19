import {lazy , Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import LoadInfo from "./components/LoadInfo.jsx";
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Footer = lazy(()=> import("./components/Footer.jsx"));
function Layout() {
    return (
        <>
            <Suspense fallback={<div className={"loading"}> <img src={"/loading.svg"}/> </div>}>
                <Navbar/>
                <LoadInfo/>
                <Outlet />
                <Footer/>
            </Suspense>
        </>
    )
}
export default Layout
