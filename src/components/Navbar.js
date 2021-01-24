import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [name, setName] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const showFullName = () => {
        if (window.innerWidth <= 960) {
            setName(false);
        } else {
            setName(true);
        }
    }

    const scrollTop = () => {
        window.scrollTo({top: 0});
    }

    /* For future Use
    const scrollBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    } */

    useEffect(() => {
        showFullName();
    })

    window.addEventListener('resize', setName);

    return (
        <div className='navbar' >
            <div className='navbar__container'>
                <div className='navbar__title'>
                    <h2>{name ? 'Arkkan El-Khatib' : 'Arkkan E.'}</h2>   
                </div>
                <div className='navbar__icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'} />
                </div>
                <ul className={click ? 'navbar__links clicked' : 'navbar__links'}>
                    <li>
                        <Link className='link' to='/' onClick={scrollTop, handleClick}>
                            About
                        </Link>
                    </li> 
                    <li>
                        <Link className='link' to='/projects' onClick={scrollTop, handleClick}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a className='link' href='https://www.github.com/arkkanelkhatib' target='_blank'>
                            Github
                        </a>
                    </li>
                    <li>
                        <Link className='link' to='/' onClick={scrollTop, handleClick}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
