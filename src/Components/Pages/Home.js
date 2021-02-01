import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';

function Home () {
    return (
        <div className='home__container'>  
            <Hero />
            <About id='about' />
            <Projects id="projects"/>
        </div>
    )
}

export default Home;