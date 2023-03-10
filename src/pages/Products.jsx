import React from 'react';

import ButtonContact from '../components/ButtonContact';

import ProductsImg from '../assets/products-img.jpg'
import MeatImg from '../assets/meat-img.jpg'
import DriedFruitsImg from '../assets/driedfruits-img.jpg'
import DairyProductsImg from '../assets/dairyproducts-img.jpg'

import { useTranslation } from 'react-i18next';

import '../styles/components/pages/Products.css'

const Products = () => {

    const [ t, i18n ] = useTranslation("global")

    return (
        <div>
            <div className='pages-div'>
                <img className='products-img' src={ProductsImg} alt="Products" />
                <div className='pages-flex container'>
                    <h1 className='pages-titles animate__animated animate__slideInLeft'>{t("products.products")}</h1>
                    <p className='pages-text bold'>
                        {t("products.meat")}
                    </p>
                    <p className='pages-text bold'>
                        {t("products.dried")}
                    </p>
                    <p className='pages-text bold'>
                        {t("products.dairy")}
                    </p>
                </div>         
            </div>
            <h2 className="products-title animate__animated animate__slideInLeft">{t("products.productsmin")}</h2>
            <div className="products-items container">
                <div className="products-item">
                    <div className="products-item__div border-pink">
                        <h3 className="products-item__title color-pink">{t("products.meat")}</h3>
                        <p>{t("products.our")}</p>
                        <p>{t("products.all")}</p>
                        <p>{t("products.allthe")} </p>
                        <p>{t("products.oursupply")}</p>
                        <p>{t("products.wesupply")}</p>
                    </div>
                    <div className="products-item__types bold">
                        <p>{t("products.beef")}</p>
                        <p>{t("products.lamb")}</p>
                        <p>{t("products.poultry")}</p>
                        <p>{t("products.pork")}</p>
                        <p>{t("products.buffalo")}</p>
                        <p>{t("products.fish")}</p>
                        <p>{t("products.seafood")}</p>
                        <p>{t("products.horse")}</p>  
                    </div>
                    <img className="product-img" src={MeatImg} alt="Meat" />
                </div>
                <div className="products-item">
                    <div className="products-item__div border-yellow">
                        <h3 className="products-item__title color-yellow">{t("products.dried")}</h3>
                        <p>{t("products.weoffer")}</p>
                        <p>{t("products.protein")}</p>
                    </div>
                    <div className="products-item__types bold">
                        <p>{t("products.peanuts")}</p>
                        <p>{t("products.raisins")}</p>
                        <p>{t("products.prunes")}</p>
                        <p>{t("products.sunflowers")}</p>
                    </div>
                    <img className="product-img" src={DriedFruitsImg} alt="Dried Fruits" />
                </div>
                <div className="products-item">
                    <div className="products-item__div border-blue">
                        <h3 className="products-item__title color-blue-light">{t("products.dairy")}</h3>
                        <p>{t("products.wealso")}</p>
                        <p>{t("products.ourmain")}</p>
                    </div>
                    <div className="products-item__types bold">
                        <p>{t("products.wpc")}</p>
                        <p>{t("products.amf")}</p>
                        <p>{t("products.bmp")}</p>
                        <p>{t("products.fcmp")}</p>
                        <p>{t("products.butter")}</p>
                        <p>{t("products.skim")}</p>
                        <p>{t("products.whole")}</p>
                        <p>{t("products.cheese")}</p>
                    </div>
                    <img className="product-img" src={DairyProductsImg} alt="Dairy Products" />
                </div>
            </div>
            <ButtonContact />
        </div>
    )
}   

export default Products