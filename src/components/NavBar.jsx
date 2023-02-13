import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

import Logo from  "./assets/logo.png"

const NavBar = () => {
  return (
    <header class="header" id="myHeader">
        <nav className="nav_bar">
            <div className="logo_holder">
              <img src={Logo} alt="logo" height='50px' width='50px' />
                <h3>PAAVAI STORE MANAGEMENT</h3>
            </div>
            <div>
                <ul className="nav_list">
                    <li className="nav_items">
                        <Link className='Nav_a' to="/">HOME</Link>
                    </li>
                    <li className="nav_items">
                        <Link className='Nav_a' to="/supplier"  >SUPPLIERS</Link>
                    </li>
                    <li className="nav_items">
                        <Link className='Nav_a' to="/stockdetails" >STOCK DETAILS</Link>
                    </li>
                    <li className="nav_items">
                        <Link className='Nav_a' to="/distributions" >DISTRIBUTIONS</Link>
                   </li>
                    <li className="nav_items">
                        <Link className='Nav_a btn'></Link>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
  )
}

export default NavBar