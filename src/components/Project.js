import React from 'react';
import './Project.css';
import '../App.css';

function Project(props) {
    return (
        <div className={props.reverse === 'true' ? 'project__container reverse__color' : 'project__container'}>
            <div className='project__wrapper'>
                <div className='project__title'>
                    {props.title}
                </div>
                <div className={props.reverse === 'true' ? 'project__content row-reverse' : 'project__content'}>
                    <video className='project__demo' src={props.vidLink} autoPlay loop muted/>
                    <div className='project__description'>
                        {props.desc1}
                        <br/><br/>
                        {props.desc2}
                        <br/><br/>
                        <div className='project__link'>
                            <a href={props.gitLink} target='_blank' ><i className='fab fa-github fa-3x' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
