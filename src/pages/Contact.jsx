import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import Loader from '../assets/loader.svg'
import '../styles/components/pages/Contact.css'

import { useTranslation } from 'react-i18next';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_371attg', 'template_jx38jkw', form.current, 'xzoAaoqyeaS2qL68N')
        .then((result) => {
            console.log(result.text);
            alert("Your message was sent successfully! Thanks!")
            console.log(user_name)
        }, (error) => {
            console.log(error.text);
        });
    };

    const [ t, i18n ] = useTranslation("global");

    return (
        <div className='contact'>
            <form className="contact-form animate__animated animate__pulse container" ref={form} onSubmit={sendEmail}>
                <h1 className='contact-title'>{t("contact.contact")}</h1>
                <hr className='contact-hr'/>
                <input className="contact__input" type="text" name="user_name" placeholder={t("contact.name")} title="El nombre sólo acepta letras y espaciones en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required />
                <input className="contact__input" type="email" name="user_email" placeholder={t("contact.email")} title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required />
                <textarea className="contact__input" name="message" cols="24" rows="10" placeholder={t("contact.comment")} required></textarea>
                <div className="contact-btn__container">
                    <input className="contact-btn" type="submit"  value={t("contact.send")} /> 
                </div>
            </form>
        </div>
    )
}   

export default Contact