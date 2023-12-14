import React from 'react';
import Logo from "../../../../img/Ellipse 1.svg"

const Hero = () => {
    return (
        <div>
            <section id='hero'>
               <div className='container'>
                  <div className='hero'>
                      <div className='hero--title'>
                        <h1>Hi, I am John, <br/>Creative Technologist</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <button>Download Resume</button>
                      </div>
                      <img src={Logo}/>
                  </div>
               </div>
            </section>
        </div>
    );
};

export default Hero;