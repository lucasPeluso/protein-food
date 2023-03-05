import React from 'react';

import ValuesImg from '../assets/values-img.jpg'
import TicSVG from '../assets/tic.svg'
import '../styles/components/pages/Values.css'


const Values = () => {
    return (
        <div>
            <div className='pages-div'>
                <img className='values-img' src={ValuesImg} alt="Values" />
                <div className='pages-flex'>
                    <h1 className='pages-titles'>OUR VALUES</h1>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />                        
                        <p className='pages-text'>Respect for individuals</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>Completely focused on Customer Service</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>Striving for excellence</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>Honesty and Solidarity</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>Patience and Camaraderie</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>Effectiveness</p>
                    </div>
                </div>
            </div>
            <div className="values-flex">
                <div className="values-value">
                    <div className="values-value__text">
                        <h2 className="values-value__title">VISION</h2>
                        <hr className='values-hr' />
                        <div className='values-value__text-p'>
                            <p>
                                Our vision is that<span className='bold'> our clients identify with us </span>and understand the importance of our ethics and values.
                            </p>
                            <p>
                                We seek to <span className='bold'> innovate, continuously improve, and go a step further </span>in everything 
                                we do to exceed the expectations of our clients and suppliers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="values-value">
                    <div className="values-value__text">
                        <h2 className="values-value__title">MISSION</h2>
                        <hr className='values-hr' />
                        <div className='values-value__text-p'>
                            <p>
                                Our mission is to become one of<span className='bold'> the best trading companies </span>for our clients and employees,
                                offering<span className='bold'> the best tools to simplify </span>business processes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="values-value">
                    <div className="values-value__text">
                        <h2 className="values-value__title">OBJECTIVES</h2>
                        <hr className='values-hr' />
                        <div className='values-value__text-p'>
                            <p>
                                To <span className='bold'>achieve</span> a good market share and be close to our customers and suppliers.
                            </p>
                            <p>
                                To <span className='bold'>ensure</span> that our staff can develop and be motivated to continuously learn.
                            </p>
                            <p>
                                To <span className='bold'>carry out</span> business in a suitable controlled environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Values