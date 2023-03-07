import React, { useState }  from 'react';
import Logo from '../assets/Logo.png'
import Switch from '../assets/Switch.png'
import { NavLink } from "react-router-dom";
// import menuOpenClose from '../utils/menuOpenClose'

import '../styles/components/layout/Navbar.css'

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    return (

        <header className="header">
            <section className="header-container container">
                <div className='header-container__logo-menu'>
                    <NavLink className='loga-a' to="/">
                        <img className='logo' src={Logo} alt="Logo Protein Food" />
                    </NavLink>
                    <div className={`menu-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav>
                        <ul className={`menu ${isOpen && "open"}`}>
                            <li><NavLink to="/" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid rgb(255, 255, 255)' : '' })}>Home</NavLink></li>
                            <li><NavLink to="aboutus" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid rgb(255, 255, 255)' : '' })}>About Us</NavLink></li>
                            <li><NavLink to="products" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid rgb(255, 255, 255)' : '' })}>Products</NavLink></li>
                            <li><NavLink to="markets" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid rgb(255, 255, 255)' : '' })}>Markets</NavLink></li>
                            <li><NavLink to="values" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid rgb(255, 255, 255)' : '' })}>Values</NavLink></li>
                            <li><NavLink to="contact" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid rgb(255, 255, 255)' : '' })}>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className='switch'>
                    <img className='switch__img' src={Switch} alt="" />
                </div>
            </section>
        </header>
    )
}   

export default Navbar