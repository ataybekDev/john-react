import React from 'react';
import "../../App.scss"
import { Link } from 'react-router-dom';
import "../../App.js"

const Header = () => {
    return (
        <div>
            <header id='header'>
            <div className='container'>
               <div className='header'>
               <Link to={"/"}>
                  <a href='#'>Home</a>
               </Link>
               <Link to={"/block"}>
                  <a href='#'>Block</a>
               </Link>
               <Link to={"/work"}>
                <a href='#'>Works</a>
               </Link>
                 <a href='#'>Contact</a>
               </div>
            </div>
            </header>
        </div>
    );
};

export default Header;