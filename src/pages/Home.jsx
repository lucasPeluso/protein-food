import React from 'react';
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import 'animate.css';

import ButtonContact from '../components/ButtonContact';

import HomeImg from '../assets/home-img.jpg'
import MeatImgSmall from '../assets/meat-small.jpg'
import DriedFruitsImgSmall from '../assets/dried-fruits-small.jpg'
import CheeseImgSmall from '../assets/cheese-small.jpg'
import '../styles/components/pages/Home.css'

const Home = () => {

    const [ t, i18n ] = useTranslation("global")

    return (
        <div>
            <div className='home'>
                <div className="home__flex container">
                    <div className='home__text'>
                        <h4 className='home__welcome'>{t("home.welcome")}</h4>
                        <h1 className='home__title animate__animated animate__pulse'>PROTEIN FOOD</h1>
                        <h2 className='home__subtitle'>Company LLC.</h2>
                        <h4 className='home__global'>Global Food Trading</h4>
                    </div>
                    <div className="home__img  animate__animated animate__zoomIn">
                        <img src={HomeImg} alt="Protein Food" />
                    </div>
                    <hr className='home__hr'/>
                </div>
            </div>
            <div className="home-products">
                <div className="home-products__rectangle"></div>
                <div className="home-products__container container">
                    <p>
                        {t("home.weare")}
                        <span className='bold'>{t("home.international")}</span>
                        {t("home.withbase")}
                        <span className='bold'>{t("home.specializing")}</span>
                    </p>
                    <div className="home-products__flex">                       
                        <div className="home-products__product">
                            <h4 className="home-products__product-title color-pink">{t("home.meat")}</h4>
                            <NavLink to="products">
                                <img className='home-products__product-img' src={MeatImgSmall} alt="Meat Products" />
                                <div className="home-products__readmore">
                                    <p className="home-products__readmore-p">{t("home.read")}</p>
                                    <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.94L0.946309 0L4.97315 4L0.946309 8L0 7.06L3.07383 4L0 0.94ZM4.02685 0.94L4.97315 0L9 4L4.97315 8L4.02685 7.06L7.10067 4L4.02685 0.94Z" fill="#F5F4F8"/>
                                    </svg>
                                </div>
                            </NavLink>
                        </div>                        
                        <div className="home-products__product">
                            <h4 className="home-products__product-title color-yellow">{t("home.dried")}</h4>
                            <NavLink to="products">
                                <img className='home-products__product-img' src={DriedFruitsImgSmall} alt="Dried Products" />

                                <div className="home-products__readmore">
                                    <p className="home-products__readmore-p">{t("home.read")}</p>
                                    <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.94L0.946309 0L4.97315 4L0.946309 8L0 7.06L3.07383 4L0 0.94ZM4.02685 0.94L4.97315 0L9 4L4.97315 8L4.02685 7.06L7.10067 4L4.02685 0.94Z" fill="#F5F4F8"/>
                                    </svg>
                                </div>
                            </NavLink>
                        </div>                       
                        <div className="home-products__product">
                            <h4 className="home-products__product-title color-blue-light">{t("home.dairy")}</h4>
                            <NavLink to="products">
                            <img className='home-products__product-img' src={CheeseImgSmall} alt="Dairy Products" />
                            <div className="home-products__readmore">
                                <p className="home-products__readmore-p">{t("home.read")}</p>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0.94L0.946309 0L4.97315 4L0.946309 8L0 7.06L3.07383 4L0 0.94ZM4.02685 0.94L4.97315 0L9 4L4.97315 8L4.02685 7.06L7.10067 4L4.02685 0.94Z" fill="#F5F4F8"/>
                                </svg>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="home-products__flex-text container">
                        <p>
                            {t("home.theproducts")}
                            <span className='bold'>{t("home.significant")}</span>
                            {t("home.around")}
                        </p>
                        <p>
                            {t("home.we")}
                            <span className='bold'>{t("home.experts")}</span>
                            {t("home.inthe")}
                            <span className='bold'>{t("home.internationalsales")}</span>
                            {t("home.aswell")}
                        </p>
                        <p>
                            <span className='bold'>{t("home.our")}</span>
                            {t("home.with")}
                            <span className='bold'>{t("home.yourorder")}</span>
                        </p>
                    </div>
                </div>
            </div>
            <ButtonContact />
        </div>
    )
}   

export default Home