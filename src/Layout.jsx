import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout
