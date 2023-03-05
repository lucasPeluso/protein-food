import React from 'react';

import ButtonContact from '../components/ButtonContact';

import ProductsImg from '../assets/products-img.jpg'
import MeatImg from '../assets/meat-img.jpg'
import DriedFruitsImg from '../assets/driedfruits-img.jpg'
import DairyProductsImg from '../assets/dairyproducts-img.jpg'

import '../styles/components/pages/Products.css'

const Products = () => {
    return (
        <div>
            <div className='pages-div'>
                <img className='products-img' src={ProductsImg} alt="Products" />
                <div className='pages-flex'>
                    <h1 className='pages-titles'>PRODUCTS</h1>
                    <p className='pages-text bold'>
                        MEAT
                    </p>
                    <p className='pages-text bold'>
                        DRIED FRUITS AND NUTS
                    </p>
                    <p className='pages-text bold'>
                        DAIRY PRODUCTS
                    </p>
                </div>         
            </div>
            <h2 className="products-title">PRODUCTS</h2>
            <div className="products-items">
                <div className="products-item">
                    <div className="products-item__div border-pink">
                        <h3 className="products-item__title color-pink">MEAT</h3>
                        <p>
                            Our supply network includes partners from North, Central & South America, Oceania, India, and
                            Europe where we have developed commercial dedicated relationships to specific markets.
                        </p>
                        <p>
                            All our products are processed and delivered to exact specifications under the strict 
                            supervision of our highly trained Quality Assurance personnel.
                        </p>
                        <p>
                            All the brand names that we supply are internationally recognized, which guarantees that all products
                            have the highest level of quality compliance. Clients can be assured that we have the capacity to 
                            provide a reliable and efficient service that exceeds their expectations.
                        </p>
                        <p>
                            Our supply networks offer year-round production of all primal cuts, manufacturing cuts, and offal
                            produced to exact specifications.
                        </p>
                        <p>We supply certified Halal and Kosher.</p>
                    </div>
                    <div className="products-item__types">
                        <p>Beef</p>
                        <p>Poultry</p>
                        <p>Lamb</p>
                        <p>Pork</p>
                        <p>Buffalo</p>
                        <p>Fish</p>
                        <p>Sea Food</p>
                        <p>Horse</p>  
                    </div>
                    <img className="product-img" src={MeatImg} alt="Meat" />
                </div>
                <div className="products-item">
                    <div className="products-item__div border-yellow">
                        <h3 className="products-item__title color-yellow">DRIED FRUITS AND NUTS</h3>
                        <p>
                            We offer peanuts (Raw and Blanched), raisins, prunes, and sunflowers from a selected
                            number of exporters/packers in various countries of origin. We always aim for long-term
                            close relationships with the selected group of quality suppliers that we work with.
                        </p>
                        <p>
                            PROTEIN FOOD COMPANY is a leading dried fruit trading company where the
                            development of our business is based on satisfying the needs of our valued clients with
                            superior quality products.
                        </p>
                    </div>
                    <div className="products-item__types">
                        <p>Peanuts (Raw and Blanched)</p>
                        <p>Raisins</p>
                        <p>Prunes</p>
                        <p>Sunflowers</p>
                    </div>
                    <img className="product-img" src={DriedFruitsImg} alt="Dried Fruits" />
                </div>
                <div className="products-item">
                    <div className="products-item__div border-blue">
                        <h3 className="products-item__title color-blue-light">DAIRY PRODUCTS</h3>
                        <p>
                            We also are leaders in trading dairy products worldwide. Our head office is active over the full range of
                            import and export. PROTEIN FOOD COMPANY is organized into business units that trade on a global
                            basis in a full range of dairy and related products 
                            (including cheese, butter oil, Butter, ingredients, Skim milk powder, and whole milk powder).
                        </p>
                        <p>
                            Our main task is to supply worldwide food processors, importers, and distributors with dairy
                            commodities and ingredients.
                        </p>
                    </div>
                    <div className="products-item__types">
                        <p>WPC</p>
                        <p>AMF</p>
                        <p>BMP</p>
                        <p>FCMP</p>
                        <p>Butter</p>
                        <p>Skim milk powder</p>
                        <p>Whole milk powder</p>
                        <p>Cheese</p>  
                    </div>
                    <img className="product-img" src={DairyProductsImg} alt="Dairy Products" />
                </div>
            </div>
            <ButtonContact />
        </div>
    )
}   

export default Products