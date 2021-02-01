import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero__content__container'>
                <div className='hero__header'>
                    <section>Welcome To My <br />Personal Portfolio</section>
                </div>
            </div>
            <div className='hero__image__container'>
                <img className='hero__image' src='https://miro.medium.com/max/12032/0*fUJ-vxQtDB0ssLX7' />
            </div>
        </div>
    )
}

export default Hero;
