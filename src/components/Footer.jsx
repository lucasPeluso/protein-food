import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from "react-router-dom";

import '../styles/components/layout/Footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__flex">
                <div className="logo-footer">
                    <NavLink to="/">
                        <img src={Logo} alt="Logo Protein Food" />
                    </NavLink>
                </div>  
                <div className='footer__flex-contact-join'>
                    <h4 className="text-start color-white underline">CONTACT US</h4>
                    <div className="contact__email">
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1.82246C13 1.10746 12.415 0.522461 11.7 0.522461H1.3C0.585 0.522461 0 1.10746 0 1.82246V9.62246C0 10.3375 0.585 10.9225 1.3 10.9225H11.7C12.415 10.9225 13 10.3375 13 9.62246V1.82246ZM11.7 1.82246L6.5 5.07246L1.3 1.82246H11.7ZM11.7 9.62246H1.3V3.12246L6.5 6.37246L11.7 3.12246V9.62246Z" fill="white"/>
                        </svg>
                        <p className="color-white">operaciones@proteinfoodllc.com</p>
                    </div>
                </div>
                <div className='footer__flex-contact-join'>
                    <h4 className="text-start color-white underline">JOIN US</h4>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0.722412C6.71562 0.722412 0 7.43804 0 15.7224C0 24.0068 6.71562 30.7224 15 30.7224C23.2844 30.7224 30 24.0068 30 15.7224C30 7.43804 23.2844 0.722412 15 0.722412ZM11.3281 21.9396H8.29062V12.1646H11.3281V21.9396ZM9.79062 10.9646C8.83125 10.9646 8.21094 10.2849 8.21094 9.44429C8.21094 8.58647 8.85 7.9271 9.82969 7.9271C10.8094 7.9271 11.4094 8.58647 11.4281 9.44429C11.4281 10.2849 10.8094 10.9646 9.79062 10.9646ZM22.4219 21.9396H19.3844V16.5224C19.3844 15.2615 18.9437 14.4052 17.8453 14.4052C17.0063 14.4052 16.5078 14.9849 16.2875 15.5427C16.2062 15.7412 16.1859 16.0224 16.1859 16.3021V21.938H13.1469V15.2818C13.1469 14.0615 13.1078 13.0412 13.0672 12.163H15.7062L15.8453 13.5208H15.9062C16.3062 12.8833 17.2859 11.9427 18.925 11.9427C20.9234 11.9427 22.4219 13.2818 22.4219 16.1599V21.9396Z" fill="#F5F4F8"/>
                    </svg>
                </div>
                <nav className='footer__flex-links'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="aboutus"> About Us</NavLink>
                    <NavLink to="products">Products</NavLink>
                    <NavLink to="markets">Markets</NavLink>
                    <NavLink to="values">Values</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </nav>
            </div>

            <div className='footer__author'>
                <p className="footer__author-p color-white">2023 Copyright © All right reserved.</p>
                <p className="footer__author-p color-white">Made by <a className='color-white' href="https://www.linkedin.com/in/lucas-peluso" target="_blank" rel="noopener">Lucas Peluso.</a></p>
            </div>
        </footer>
    )
}

export default Footer
