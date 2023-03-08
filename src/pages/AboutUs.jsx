import React from 'react';

import ButtonContact from '../components/ButtonContact';

import { useTranslation } from 'react-i18next';

import AboutUsImg from '../assets/aboutus-img.jpg'
import '../styles/components/pages/AboutUs.css'

const AboutUs = () => {

    const [ t, i18n ] = useTranslation("global")

    return (
        <div>
            <div className='pages-div'>
                <img className='aboutus-img' src={AboutUsImg} alt="About Us" />
                <div className='pages-flex container'>
                    <h1 className='pages-titles animate__animated animate__slideInLeft'>{t("aboutus.aboutus")}</h1>
                    <p className='pages-text width-70'>
                        <span className='bold'>{t("aboutus.protein")}</span> 
                        {t("aboutus.that")}
                        <span className='bold'>{t("aboutus.making")}</span> 
                        {t("aboutus.ofbuy")}
                        <span className='bold'>{t("aboutus.easier")}</span>
                    </p>
                </div>
            </div>
            <div className="aboutus-flex container">
                <p>
                    {t("aboutus.our")}
                    <span className='bold'>{t("aboutus.great")}</span>
                    {t("aboutus.with")}
                </p>
                <p>
                    {t("aboutus.for")} 
                    <span className='bold'>{t("aboutus.proteinfood")}</span>
                    {t("aboutus.being")}
                    <span className='bold'>{t("aboutus.special")}</span>
                </p>
                <p>
                    <span className='bold'>{t("aboutus.proteinfoodcompany")}</span>
                    {t("aboutus.has")}
                    <span className='bold'>{t("aboutus.thehigh")}</span> 
                    {t("aboutus.committing")}
                </p>
            </div>
            <ButtonContact />
        </div>
        
    )
}   

export default AboutUs