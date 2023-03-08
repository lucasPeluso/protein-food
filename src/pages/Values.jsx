import React from 'react';

import ButtonContact from '../components/ButtonContact';

import ValuesImg from '../assets/values-img.jpg'
import TicSVG from '../assets/tic.svg'
import '../styles/components/pages/Values.css'

import { useTranslation } from 'react-i18next';


const Values = () => {

    const [ t, i18n ] = useTranslation("global")

    return (
        <div>
            <div className='pages-div'>
                <img className='values-img' src={ValuesImg} alt="Values" />
                <div className='pages-flex container'>
                    <h1 className='pages-titles animate__animated animate__slideInLeft'>{t("values.values")}</h1>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />                        
                        <p className='pages-text'>{t("values.respect")}</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>{t("values.completely")}</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>{t("values.striving")}</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>{t("values.honesty")}</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>{t("values.patience")}</p>
                    </div>
                    <div className="values-tic">
                        <img src={TicSVG} alt="Tic" />
                        <p className='pages-text'>{t("values.effectiveness")}</p>
                    </div>
                </div>
            </div>
            <div className="values-flex">
                <div className="values-value">
                    <div className="values-value__text">
                        <h2 className="values-value__title">{t("values.vision")}</h2>
                        <hr className='values-hr' />
                        <div className='values-value__text-p'>
                            <p>
                                {t("values.ourvision")}
                                <span className='bold'>{t("values.ourclients")}</span>
                                {t("values.and")}
                            </p>
                            <p>
                                {t("values.weseek")}
                                <span className='bold'>{t("values.innovate")}</span>
                                {t("values.in")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="values-value">
                    <div className="values-value__text">
                        <h2 className="values-value__title">{t("values.mission")}</h2>
                        <hr className='values-hr' />
                        <div className='values-value__text-p'>
                            <p>
                                {t("values.ourmission")}
                                <span className='bold'>{t("values.thebest")}</span>
                                {t("values.forour")}
                                <span className='bold'>{t("values.thebesttools")}</span>
                                {t("values.business")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="values-value">
                    <div className="values-value__text">
                        <h2 className="values-value__title">{t("values.objectives")}</h2>
                        <hr className='values-hr' />
                        <div className='values-value__text-p'>
                            <p>
                                <span className='bold'>{t("values.toachieve")}</span>
                                {t("values.agood")}
                            </p>
                            <p>
                                <span className='bold'>{t("values.toensure")}</span>
                                {t("values.that")}
                            </p>
                            <p>
                                <span className='bold'>{t("values.tocarry")}</span>
                                {t("values.businessin")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ButtonContact />
        </div>
    )
}   

export default Values