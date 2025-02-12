import React from 'react'
import './header.css'
//Mirar esta parte del codigo que aparece en rojo
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

export const Header = () => {
    return (
        <header>

            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Dilan Jimenez</h1>
                <h5 className="text-light">Backend Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
            
        </header>
    )
}

export default Header;