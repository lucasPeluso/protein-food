import React from 'react';
import Logo from '../assets/Logo.png'
import Switch from '../assets/Switch.png'
import { NavLink } from "react-router-dom";
// import menuOpenClose from '../utils/menuOpenClose'

import '../styles/components/layout/Navbar.css'

const Navbar = () => {
    // ((d) => {
    //     const btnMenu = d.getElementsByClassName("menu-btn"),
    //         menu = d.getElementsByClassName("menu");
        
    //         console.log(btnMenu)
    //         console.log(menu)

    //             btnMenu[0].addEventListener("click", (e) => {
    //                 console.log(btnMenu[i])
    //                 console.log(btnMenu[i])
    //                 btnMenu[i].classList.toggle("none");
    //                 btnMenu[i].lastElementChild.classList.toggle("none");
    //                 console.log(menu)
    //                 menu.classList.toggle("is-active");
    //          })
             
    
    //     btnMenu.addEventListener
    //     d.addEventListener("click", e => {
    //         if(!e.target.matches(".menu a"))
    //         return false
    //         btnMenu.firstElementChild.classList.remove("none");
    //         btnMenu.lastElementChild.classList.add("none");
    //         menu.classList.remove("is-active");
    //     })
    // })(document);

    return (

        <header className="header">
            <section className="header-container container">
                <div className='header-container__logo-menu'>
                    <NavLink className='loga-a' to="/">
                        <img className='logo' src={Logo} alt="Logo Protein Food" />
                    </NavLink>
                    <button className="menu-btn">
                        <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="menu-icon" d="M0.153442 16.084V13.4174H24.1534V16.084H0.153442ZM0.153442 9.41738V6.75071H24.1534V9.41738H0.153442ZM0.153442 2.75071V0.0840454H24.1534V2.75071H0.153442Z" fill="#E7E3D4"/>
                        </svg>
                        {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="menu-icon" d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z" fill="#E7E3D4"/>
                        </svg>                                      */}
                    </button>
                    <nav>
                        <ul className="menu">
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