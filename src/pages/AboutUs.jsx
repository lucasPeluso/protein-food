import React from 'react';

import ButtonContact from '../components/ButtonContact';

import AboutUsImg from '../assets/aboutus-img.jpg'
import '../styles/components/pages/AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className='pages-div'>
                <img className='aboutus-img' src={AboutUsImg} alt="About Us" />
                <div className='pages-flex'>
                    <h1 className='pages-titles'>ABOUT US</h1>
                    <p className='pages-text'>
                        Protein Food Company is an 
                        <span className='bold'> International Trading Company </span> 
                        that was born with the purpose of adding extra value to importers 
                        and exporters of food around the world, 
                        <span className='bold'> making the process </span> 
                        of buying and selling products from different backgrounds 
                        <span className='bold'> easier, more secure, and more cost-effective.</span>
                    </p>
                </div>
            </div>
            <div className="aboutus-flex">
                <p>
                    Our company has a 
                    <span className='bold'> great team of well-known professionals </span>
                    with all the necessary marketing tools and experience in, among others, the meat business. 
                    Our team is fully motivated to meet customers needs because this is one of our company’s fundamental objectives.
                </p>
                <p>
                    For <span className='bold'> Protein Food Company </span>
                    being and keeping our clients updated about the market is
                    paramount. Some of the key points that make us different from our competitors are our
                    <span className='bold'> special attention to detail, our pro-activity, up-to-date market information, 
                    competitive offers, and proactive after-sales/logistical support.</span></p>
                <p>
                    <span className='bold'>Protein Food Company</span> has established strong relationships 
                    with a wide range of producers who follow the strictest health controls in all products and 
                    <span className='bold'> the highest quality certifications and regulations, </span> 
                    committing themselves to offer us the best products.
                </p>
            </div>
            <ButtonContact />
        </div>
        
    )
}   

export default AboutUs