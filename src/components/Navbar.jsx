import React from 'react'
import "../style/Navbar.css"
import Logo from "../assets/Logo.png"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={Logo} alt="LOGO" width={213} height={34}/>
        </div>
        <div className='nav-options'>
            <ul>
                <li>Auctions</li>
                <li>Roadmap</li>
                <li>Discover</li>
                <li>Community</li>
            </ul>
        </div>
        <div className='account-options'>
            <button className='secondary-button'>Contact</button>
            <button className='primary-button'>My Account</button>
        </div>
    </div>
  )
}
