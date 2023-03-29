import React, { useState }  from 'react';
import Logo from '../assets/logoproteinfood.svg'

import ES from '../assets/ES.svg'
import EN from '../assets/EN.svg'

import { NavLink } from "react-router-dom";




import { useTranslation } from 'react-i18next';

import '../styles/components/layout/Navbar.css'

const Navbar = () => {

    const [ t, i18n ] = useTranslation("global")

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
                        <div className={`menu ${isOpen && "open"}`}>
                            <NavLink to="/" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid var(--gray)' : '' })}>{t("header.home")}</NavLink>
                            <NavLink to="aboutus" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid var(--gray)' : '' })}>{t("header.aboutus")}</NavLink>
                            <NavLink to="products" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid var(--gray)' : '' })}>{t("header.products")}</NavLink>
                            <NavLink to="markets" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid var(--gray)' : '' })}>{t("header.markets")}</NavLink>
                            <NavLink to="values" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid var(--gray)' : '' })}>{t("header.values")}</NavLink>
                            <NavLink to="contact" style={({ isActive }) => ({ borderBottom: isActive ? '3px solid var(--gray)' : '' })}>{t("header.contact")}</NavLink>
                        </div>
                    </nav>
                </div>
                <div className='btn-lng'>
                    <button className='btn-lng-flex' onClick={() => i18n.changeLanguage("en")}>
                        <img src={EN} alt="EN" />
                        <span>EN</span>
                    </button>
                    <button className='btn-lng-flex' onClick={() => i18n.changeLanguage("es")}>
                        <img src={ES} alt="ES" />
                        <span>ES</span>
                    </button>
                </div>
            </section>
        </header>
    )
}   

export default Navbar