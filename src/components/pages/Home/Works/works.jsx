import React from 'react';
import WorksImg from "../../../../img/works.svg"
import WorksImgOne from "../../../../img/worksOne.svg"
import WorksImgTwo from "../../../../img/worksTwo.svg"
const Works = () => {
    return (
        <div>
            <section id='works'>
                <div className='container'>
                    <div className='works'>
                       <h1>Featured works</h1>
                       <div className='works--group'>
                       <div className='works--group__img'>
                           <img src={WorksImg}/>
                       </div>
                            
                            <div className='works--group__title'>
                                <h1>Designing Dashboards</h1>
                                <div className='works--group__title--one'>
                                   <div className='works--group__title--one__data'><h4>2023</h4></div>
                                   <h3>Dashboard</h3>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                       </div>
                       <div className='works--group'>
                       <div className='works--group__img'>
                           <img src={WorksImgOne}/>
                       </div>
                            
                            <div className='works--group__title'>
                                <h1>Designing Dashboards</h1>
                                <div className='works--group__title--one'>
                                   <div className='works--group__title--one__data'><h4>2023</h4></div>
                                   <h3>Dashboard</h3>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                       </div>
                       <div className='works--group'>
                       <div className='works--group__img'>
                           <img src={WorksImgTwo}/>
                       </div>
            
                            <div className='works--group__title'>
                                <h1>Designing Dashboards</h1>
                                <div className='works--group__title--one'>
                                   <div className='works--group__title--one__data'><h4>2023</h4></div>
                                   <h3>Dashboard</h3>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                       </div>
                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Works;