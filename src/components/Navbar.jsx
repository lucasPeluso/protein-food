import React from 'react';
import Logo from '../assets/LogoProtein.png'
import Switch from '../assets/Switch.png'
// import menuOpenClose from '../utils/menuOpenClose'

import '../styles/components/layout/Navbar.css'

const Navbar = () => {
    return (

        <header className="header">
            <section className="header-container container">
                <div className='header-container__logo-menu'>
                    <div className="logo">
                        <a href="#home">
                            <img src={Logo} alt="Logo Protein Food" />
                        </a>
                    </div>
                    <button className="menu-btn">
                        <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="menu-icon" d="M0.153442 16.084V13.4174H24.1534V16.084H0.153442ZM0.153442 9.41738V6.75071H24.1534V9.41738H0.153442ZM0.153442 2.75071V0.0840454H24.1534V2.75071H0.153442Z" fill="#E7E3D4"/>
                        </svg>
                        {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="menu-icon" d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z" fill="#E7E3D4"/>
                        </svg>                                      */}
                    </button>
                    <nav className="menu">
                        <a data-nav="home" href="#home">Home</a>
                        <a data-nav="mision" href="#mision">About Us</a>
                        <a data-nav="co-founders" href="#values">Values</a>
                        <a data-nav="co-founders" href="#values">Markets</a>
                        <a data-nav="co-founders" href="#values">Products</a>
                        <a data-nav="contact" href="#contact">Contact</a>
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