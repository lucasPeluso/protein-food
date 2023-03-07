import React from 'react';

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
    return (
        <div>
            <div className='pages-div'>
                <img className='markets-img' src={MarketsImg} alt="Markets" />
                <div className='pages-flex container'>
                    <h1 className='pages-titles animate__animated animate__slideInLeft'>MARKETS</h1>
                    <p className='pages-text width-70'>
                        At <span className='bold'>Protein Food Company</span>, we know that animal protein production demands and supply are dynamic.
                    </p>
                    <p className='pages-text width-70'>
                        For this reason, we are in constant contact with producers from <span className='bold'>Europe,
                        Brazil, Argentina, Australia, Paraguay, Uruguay, and the USA.</span>, in this way supplying <span className='bold'>Europe </span>
                        and countries like <span className='bold'>China, Peru, Thailand, Russia, Hong Kong, the USA, UAE, Brazil, Africa,
                        Singapore, the Philippines, and the Caribbean.</span>
                    </p>
                </div>
            </div>
            <div className="markets-text container">
                <p>
                    In the case of fish and shellfish, we are working with suppliers from countries like Argentina, China, Peru, Chile, Indonesia, and the USA; to provide to our clients in Africa, Europe, Russia, and Japan.
                </p>
                <p>
                    It is also expected that developing countries generate a substantial increase in the global
                    production of Dairy products. Protein Food Company works with leading exporters of milk
                    powders and cheeses around the world like the United States, European Union, New
                    Zealand, Australia, and Argentina, to supply the demands of global consumption in these
                    products.
                </p>
                <p>
                    Another product that is taking center stage in world food consumption, is dried fruit, which is being incorporated into the diets of people as a source of nutrients, protein, fiber, vitamins, and minerals. The main exporting countries where we buy these products are
                    China, the United Kingdom, India, and Argentina, to supply markets like the EU, Japan,
                    Indonesia, Singapore, and Hong Kong.
                </p>
                <p>
                    <span className='bold'>We work regularly in the following markets:</span>
                </p>
            </div>
            <div className="markets-flags__groups">
                <div className="markets-flags__group">
                    <div className="markets-flags__countries">
                        <img src={ArgentinaSVG} alt="Argentina" />
                        <p>Argentina</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={BrazilSVG} alt="Brazil" />
                        <p>Brazil</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={FlagSVG} alt="Caribbean" />
                        <p>Caribbean</p>
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
                        <p>Europe</p>
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
                        <p>Russia</p>
                    </div>
                    <div className="markets-flags__countries">
                        <img src={SouthAfricaSVG} alt="South Africa" />
                        <p>South Africa</p>
                    </div>
                </div>
                <div className="markets-flags__group">
                    <div className="markets-flags__countries">
                        <img src={FlagSVG} alt="South America" />
                        <p>South America</p>
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
                        <p>Western Africa</p>
                    </div>
                </div>
            </div>
            <ButtonContact />
        </div>
    )
}   

export default Markets