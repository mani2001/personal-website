import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Manikantan Srinivasan (MANI)</h1>
                <h5 className="text-light">Software Engineering Student</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contact" className="scroll__down">Scroll down</a>
                
            </div>

        </header>
    )
}

export default Header
