import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [mobile, setMobile] = useState(false);

    const scroll = (id) => {
        let anchor = document.querySelector(`#${id}`);
        anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    }

    const handleClick = () => {
        setClick(!click);
    }

    const toggleMobile = () => {
        if (window.innerWidth <= 960) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    useEffect(() => {
        toggleMobile();
    })

    return (
        <div className='nav__container'>
                <div className='nav__title'>
                    <Link to='/'>
                        Arkkan E.
                    </Link>
                </div>
            <div className='nav__icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'} />
            </div>
            <div class={click ? 'nav__links clicked' : 'nav__links'}>
                <Link to='/about' onClick={handleClick}>
                    About
                </Link>
                <Link to='/projects' onClick={handleClick}>
                    Projects
                </Link>
                <Link href='#' onClick={handleClick}>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
