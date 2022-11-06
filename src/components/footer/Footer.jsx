import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className="special_section2">
            <a href="#" className="footer__logo">Mani</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/manikantan2001/"><BsLinkedin /></a>
                <a href="https://www.instagram.com/mani_and_5_others/"><AiOutlineInstagram /></a>
                <a href="https://twitter.com/maniand_5others"><AiOutlineTwitter /></a>
            </div>
            <div className="footer__copyright"><small>&copy; Manikantan. All rights reserved.</small></div>
        </footer>
    )
}

export default Footer
