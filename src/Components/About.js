import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about__container'>
            <div className='about__content__header'>
                <h2><u><b>About Me</b></u></h2>
            </div>
            <div className='about__content__container'>
                <div className='about__content__div'>
                    <h2><i><u>Who Am I</u></i></h2>
                    <br />
                    <p>My name is Arkkan El-Khatib. Born in Guelph, Ontario and shortly after moved to Ottawa, Ontario,
                        for the majority of my life.
                        Ever since a young age I have always been facinated by the technology around me and had 
                        a passion for the creation of software. At the age of 14 I began to experiment with
                        HTML and CSS. Eventually I fell in love with Python programming and have been enjoying the
                        world of software development since!
                    </p>
                </div>
                <div className='about__content__div'>
                    <h2><i><u>What I Study</u></i></h2>
                    <br />
                    <p>Currently enrolled at Carleton University in the Bachelor of Computer Science Program
                        with second-year standing. My major field of interest is Software Engineering. My two years
                        at Carleton so far have been a blast. I've learned things from the Linux operation system,
                        to databases, to data strucutres and algorithms, to even Web Application Development.
                        I am currently enrolled in several third year Computer Science classes and have been learning many new things each and every day.
                    </p>
                </div>
                <div className='about__content__div'>
                    <h2><i><u>Language Preference</u></i></h2>
                    <br />
                    <p>Python has always been my go to language for personal projects.
                        The quick time to deployment, the efficent syntax, the endless selection
                        of openly available libraries, and the multitude of applications makes Python
                        a language that I can easily apply to any project whether it is to make an efficent
                        method of gathering Covid-19 data, a YouTube video donwloader, or even a simple
                        desktop GUI application. For very similar reasons, I have enjoyed JavaScript. 
                        This website was created using the React.js framework.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
