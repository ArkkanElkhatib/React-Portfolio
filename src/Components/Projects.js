import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className='projects__container'>
            <div className='projects__content__header'>
                <h2><u><b>Projects</b></u></h2>
            </div>
            <div className='projects__content__container'>
                <a href='#' className='projects__tile' target='_blank' >
                    <img className='projects__tile__img' src='PyBalls.PNG' />
                    <section>Py-Balls</section>
                </a>
                <a href='#' className='projects__tile' target='_blank' >
                    <img className='projects__tile__img' src='Py-Rona.png' />
                    <section>Python Corona Scraper</section>
                </a>
                <a href='#' className='projects__tile' target='_blank' >
                    <img className='projects__tile__img' src='Portfolio.png' />
                    <section>React Portfolio</section>
                </a>
                <a href='#' className='projects__tile' target='_blank' >
                    <img className='projects__tile__img' src='ArkDB.png' />
                    <section >Web Movie Database</section>
                </a>
                <a href='#' className='projects__tile' target='_blank' >
                    <img className='projects__tile__img' src='Store.png' />
                    <section className='dark' >JavaFX Store</section>
                </a>
            </div>
                {/* <div className='projects__tile'>

                </div>
                <div className='projects__tile'>

                </div>
                <div className='projects__tile'>

                </div>
                <div className='projects__tile'>

                </div>
                <div className='projects__tile'>

                </div>
                <div className='projects__tile'>

                </div>
                <div className='projects__tile'>

                </div>
                <div className='projects__tile'>

                </div>
            </div> */}
        </div>
    )
}

export default Projects
