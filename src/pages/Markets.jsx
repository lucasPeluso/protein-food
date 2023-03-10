import React from 'react';

import { useTranslation } from 'react-i18next';

import ButtonContact from '../components/ButtonContact';

import MarketsImg from '../assets/markets-img.jpg'
import ArgentinaSVG from '../assets/Argentina.svg'
import BrazilSVG from '../assets/Brazil.svg'
import ChileSVG from '../assets/Chile.svg'
import ChinaSVG from '../assets/China.svg'
import EuropeSVG from '../assets/Europe.svg'
import FlagSVG from '../assets/Flag.svg'
import IndiaSVG from '../assets/India.svg'
import ParaguaySVG from '../assets/Paraguay.svg'
import RussiaSVG from '../assets/Russia.svg'
import SouthAfricaSVG from '../assets/SouthAfrica.svg'
import UaeSVG from '../assets/UAE.svg'
import UruguaySVG from '../assets/Uruguay.svg'
import UsaSVG from '../assets/USA.svg'

import '../styles/components/pages/Markets.css'

const Markets = () => {

    const [ t, i18n ] = useTranslation("global")

    return (
        <div>
            <div className='pages-div'>
                <img className='markets-img' src={MarketsImg} alt="Markets" />
                <div className='pages-flex container'>
                    <h1 className='pages-titles animate__animated animate__slideInLeft'>{t("markets.markets")}</h1>
                    <p className='pages-text width-70'>
                        {t("markets.at")} 
                        <span className='bold'>{t("markets.protein")}</span>
                        {t("markets.weknow")}
                    </p>
                    <p className='pages-text width-70'>
                        {t("markets.forthis")}
                        <span className='bold'>{t("markets.europebrazil")}</span>
                        {t("markets.inthis")}
                        <span className='bold'>{t("markets.china")}</span>
                    </p>
                </div>
            </div>
            <div className="markets-text container">
                <h3 className="markets-aboutus-title animate__animated animate__slideInLeft">{t("markets.marketsmin")}</h3>
                <p>{t("markets.inthe")}</p>
                <p>{t("markets.itis")}</p>
                <p>{t("markets.another")}</p>
                <p className='markets-wework bold'>{t("markets.wework")}</p>
            </div>
            <div className="markets-flags__groups">
                <div className="markets-flags__group">
                    <div className="markets-flags__countries">
                        <img src={ArgentinaSVG} alt="Argentina" />
                        <p>Argentina</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={BrazilSVG} alt="Brazil" />
                        <p>{t("markets.brazil")}</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={FlagSVG} alt="Caribbean" />
                        <p>{t("markets.caribbean")}</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={ChileSVG} alt="Chile" />
                        <p>Chile</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={ChinaSVG} alt="China" />
                        <p>China</p>
                    </div>
                </div>
                <div className="markets-flags__group">
                    <div className="markets-flags__countries">
                        <img src={EuropeSVG} alt="Europe" />
                        <p>{t("markets.europe")}</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={IndiaSVG} alt="India" />
                        <p>India</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={ParaguaySVG} alt="Paraguay" />
                        <p>Paraguay</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={RussiaSVG} alt="Russia" />
                        <p>{t("markets.russia")}</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={SouthAfricaSVG} alt="South Africa" />
                        <p>{t("markets.southafrica")}</p>
                    </div>
                </div>
                <div className="markets-flags__group">
                    <div className="markets-flags__countries">
                        <img src={FlagSVG} alt="South America" />
                        <p>{t("markets.southamerica")}</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={UaeSVG} alt="UAE" />
                        <p>UAE</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={UruguaySVG} alt="Uruguay" />
                        <p>Uruguay</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={UsaSVG} alt="USA" />
                        <p>USA</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={FlagSVG} alt="Western Africa" />
                        <p>{t("markets.westernafrica")}</p>
                    </div>
                </div>
            </div>
            <ButtonContact />
        </div>
    )
}   

export default Markets