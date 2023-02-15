import React from "react"
import NavBar from "./Navbar"
import Login from "./pages/forms/login"
import { Outlet } from "react-router-dom"

function App() {  
    if(window.location.pathname==="/login"){
        return(
            <Login/>
        )
    }
    else{
    return (
        <>
            <NavBar />
            <Outlet/>
        </>
    );}
}

export default App;
