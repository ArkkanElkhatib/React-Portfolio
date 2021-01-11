import React from 'react';
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero__innerPane'>
                <div  className='hero__imageWrapper'>
                    <img src='/cat.png' className='hero__image' />
                    <section className='hero__imageText'>Arkkan El-Khatib</section>
                </div>
                <div className='hero__textWrapper'>
                    <div className='hero__text'>
                        Second Year Student at Carleton University in Ottawa, Ontario 
                    </div>
                    <div className='hero__text'>
                        Majoring in Computer Science with focus on Software Engineering
                    </div>
                    <div className='hero__text'>
                        Aspiring Software Engineer and Web Developer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
