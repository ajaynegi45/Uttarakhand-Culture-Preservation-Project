import {lazy , Suspense} from 'react'
import { Outlet } from 'react-router-dom'
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Footer = lazy(()=> import("./components/Footer.jsx"));
function Layout() {
    return (
        <>
            <Suspense fallback={<div className={"loading"}> <img src={"/loading.svg"}/> </div>}>
                <Navbar/>
                <Outlet />
                <Footer/>
            </Suspense>
        </>
    )
}
export default Layout
