import React from 'react';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const ButtonContact = () => {

    const [ t, i18n ] = useTranslation("global")

    return (
        <div>
            <div class="home-btn">
                <p>{t("buttonContact.formore")}</p>
                <NavLink className="btn" to="/contact">
                    <p>{t("buttonContact.contactus")}</p>
                </NavLink>
            </div>
        </div>
    )
}   

export default ButtonContact




