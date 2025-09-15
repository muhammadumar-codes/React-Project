import "./Layout.css"

// outlet 

import { Outlet } from "react-router-dom"

// components
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export default function Layout (){
    return (
        <>
<Header/>
<main className="main-card">

    <Outlet/>

</main>

<Footer/>


        
        
        </>
    )
}