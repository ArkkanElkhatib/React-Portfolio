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
                        <Link className='link' to='/'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='/'>
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='/'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='/'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
