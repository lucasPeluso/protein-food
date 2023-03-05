import React from 'react';

import ButtonContact from '../components/ButtonContact';

import HomeImg from '../assets/home-img.jpg'
import MeatImgSmall from '../assets/meat-small.jpg'
import DriedFruitsImgSmall from '../assets/dried-fruits-small.jpg'
import CheeseImgSmall from '../assets/cheese-small.jpg'
import '../styles/components/pages/Home.css'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className="home__flex container">
                    <div className='home__text'>
                        <h4 className='home__welcome'>WELCOME TO</h4>
                        <h1 className='home__title'>PROTEIN FOOD</h1>
                        <h2 className='home__subtitle'>Company LLC.</h2>
                        <h4 className='home__global'>Global Food Trading</h4>
                    </div>
                    <div className="home__img">
                        <img src={HomeImg} alt="Protein Food" />
                    </div>
                    <hr className='home__hr'/>
                </div>
            </div>
            <div className="home-products">
                <div className="home-products__rectangle"></div>
                <div className="home-products__container container">
                    <p>
                        We are a well-recognized <span className='bold'>international trading company</span> with base 
                        in the United States of America and South America <span className='bold'>specializing in importing and exporting food</span> like:
                    </p>
                    <div className="home-products__flex">
                        <div className="home-products__product">
                            <h4 className="home-products__product-title">MEAT</h4>
                            <img className='home-products__product-img' src={MeatImgSmall} alt="Meat Products" />
                            <div className="home-products__readmore">
                                <p className="home-products__readmore-p">Read more</p>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0.94L0.946309 0L4.97315 4L0.946309 8L0 7.06L3.07383 4L0 0.94ZM4.02685 0.94L4.97315 0L9 4L4.97315 8L4.02685 7.06L7.10067 4L4.02685 0.94Z" fill="#F5F4F8"/>
                                </svg>
                            </div>
                        </div>
                        <div className="home-products__product">
                            <h4 className="home-products__product-title">DRIED FRUITS AND NUTS</h4>
                            <img className='home-products__product-img' src={DriedFruitsImgSmall} alt="Meat Products" />
                            <div className="home-products__readmore">
                                <p className="home-products__readmore-p">Read more</p>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0.94L0.946309 0L4.97315 4L0.946309 8L0 7.06L3.07383 4L0 0.94ZM4.02685 0.94L4.97315 0L9 4L4.97315 8L4.02685 7.06L7.10067 4L4.02685 0.94Z" fill="#F5F4F8"/>
                                </svg>
                            </div>
                        </div>
                        <div className="home-products__product">
                            <h4 className="home-products__product-title">DAIRY PRODUCTS</h4>
                            <img className='home-products__product-img' src={CheeseImgSmall} alt="Meat Products" />
                            <div className="home-products__readmore">
                                <p className="home-products__readmore-p">Read more</p>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0.94L0.946309 0L4.97315 4L0.946309 8L0 7.06L3.07383 4L0 0.94ZM4.02685 0.94L4.97315 0L9 4L4.97315 8L4.02685 7.06L7.10067 4L4.02685 0.94Z" fill="#F5F4F8"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="home-products__flex-text">
                        <p>The products we sell are obtained through <span className='bold'>significant producers</span> around the world.</p>
                        <p>
                            We are <span className='bold'>experts</span> in the management of <span className='bold'>international sales and purchases</span> as 
                            well as shipments to and from the main consumer markets.
                        </p>
                        <p>
                            Our <span className='bold'>aim is to establish and maintain strong partnerships</span> with our suppliers and customers,
                            always providing our commitment to traceability and adding value to our service to ensure the
                            reception of <span className='bold'>your order on time and in good condition.</span>
                        </p>
                    </div>
                </div>
            </div>
            <ButtonContact />
        </div>
    )
}   

export default Home