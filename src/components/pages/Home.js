import React from 'react';
import './Home.css';
import '../../App.css';
import Hero from '../Hero';
import Project from '../Project';

function Home () {
    return (
        <div className='home__container'>
            <Hero />
            <Project 
                title='Java Store' 
                gitLink='https://github.com/ArkkanElkhatib/JavaFX-Store'
                vidLink='/store.mp4'
                desc1="Java Store is a desktop application that allows a user to make purchasesa at a store."
                desc2='The Java Store was created using the Java GUI library, JavaFX.'
                reverse='false'
            />
            <Project 
                title='PyBalls' 
                gitLink='https://github.com/ArkkanElkhatib/Python-BouncyBalls'
                vidLink='/yes.mp4'
                desc1='PyBalls is a Python program that simulates the bouncing of balls in an enclosed space.'
                desc2='This program was created using the Python library, Pygame.'
                reverse='true'
            />
            <Project 
                title='Corona Parser' 
                gitLink='https://github.com/ArkkanElkhatib/C-CoronaFileParser'
                vidLink='/tin.mp4'
                desc1='Corona Parser is a program that reads in data from a ".tsv" file, processes it, then writes it into a ".bin" file.'
                desc2='The Corona Parser can then read this processed data and output it to the terminal.'
                reverse='false'
            />
        </div>
    )
}

export default Home;