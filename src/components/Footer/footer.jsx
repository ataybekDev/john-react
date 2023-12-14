import React from 'react';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
    return (
        <div>
            <footer id='footer'>
                <div className='container'>
                    <div className='footer'>
                    <BiLogoFacebookSquare className='footer--icons' />
                    <BiLogoInstagram className='footer--icons'/>
                    <BiLogoWhatsapp className='footer--icons'/>
                    <BiLogoTwitter className='footer--icons'/>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;