import React from 'react';

import Loader from '../assets/loader.svg'
import '../styles/components/pages/Contact.css'

import { useTranslation } from 'react-i18next';

const Contact = () => {

    const [ t, i18n ] = useTranslation("global");

    return (
        <div className='contact'>
            <form target="_blank" action="https://formsubmit.co/lucaas.p97@gmail.com" method="POST" className="contact-form animate__animated animate__pulse container">
                <h1 className='contact-title'>{t("contact.contact")}</h1>
                <hr className='contact-hr'/>
                <input className="contact__input" type="text" name="name" placeholder={t("contact.name")} title="El nombre sólo acepta letras y espaciones en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required />
                <input className="contact__input" type="email" name="email" placeholder={t("contact.email")} title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required />
                <textarea className="contact__input" name="comments" cols="24" rows="10" placeholder={t("contact.comment")} required></textarea>
                <div className="contact-btn__container">
                    <input className="contact-btn" type="submit"  value={t("contact.send")} /> 
                </div>
            </form>
        </div>
    )
}   

export default Contact