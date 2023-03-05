import React from 'react';

import '../styles/components/pages/Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <form className="contact-form">
                <h1 className='contact-title'>CONTACT US</h1>
                <hr className='contact-hr'/>
                <input className="contact__input" type="text" name="name" placeholder="Enter your name" title="El nombre sólo acepta letras y espaciones en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required />
                <input className="contact__input" type="email" name="email" placeholder="Enter your email" title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required />
                <textarea className="contact__input" name="comments" cols="24" rows="10" placeholder="Enter your comment" required></textarea>
                <div className="modal__contact-loader text-center none">
                    {/* <img src="assets/loader.svg" alt="Sending..." /> */}
                </div>
                <div className="contact-btn__container">
                    <input className="contact-btn" type="submit" value="Send Message" /> 
                </div>
            </form>

            {/* <article id="response" className="modal">
                <div className="modal__content">
                    <article className="modal__response text-center">
                        <h4>
                            ¡Muchas gracias por tu consulta!
                        </h4>
                        <p>En breve nos comunicaremos por email.</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#F6D552"/>
                            <path d="M14.8289 14.8281C14.4634 15.1924 14.0317 15.4836 13.5569 15.6861C12.7022 16.0469 11.7487 16.0996 10.8595 15.8351C9.97022 15.5706 9.20049 15.0054 8.68193 14.2361L7.02393 15.3551C7.45636 15.9932 8.00652 16.543 8.64493 16.9751C9.29458 17.4144 10.0245 17.7213 10.7929 17.8781C11.5897 18.0406 12.4111 18.0406 13.2079 17.8781C13.9763 17.721 14.7062 17.4142 15.3559 16.9751C15.6689 16.7631 15.9679 16.5171 16.2419 16.2441C16.5139 15.9731 16.7619 15.6731 16.9759 15.3551L15.3179 14.2361C15.1742 14.4486 15.0105 14.6468 14.8289 14.8281V14.8281Z" fill="#F6D552"/>
                            <path d="M8.5 12C9.32843 12 10 11.3284 10 10.5C10 9.67157 9.32843 9 8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12Z" fill="#F6D552"/>
                            <path d="M15.493 11.986C16.3176 11.986 16.986 11.3176 16.986 10.493C16.986 9.66844 16.3176 9 15.493 9C14.6684 9 14 9.66844 14 10.493C14 11.3176 14.6684 11.986 15.493 11.986Z" fill="#F6D552"/>
                        </svg>
                    </article>
                </div>
            </article> */}
        </div>
    )
}   

export default Contact