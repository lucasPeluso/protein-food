import React from 'react';

import { NavLink } from 'react-router-dom';

const ButtonContact = () => {
    return (
        <div>
            <div class="home-btn">
                <p>For more information:</p>
                <NavLink className="btn" to="/contact">
                    <p>Contact Us</p>
                </NavLink>
            </div>
        </div>
    )
}   

export default ButtonContact




