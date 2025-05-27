import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logoDark from '../../assets/dark-logo.png'
import logoLight from '../../assets/light-logo.png'

import { Link } from 'react-scroll'
import menu from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0.1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            {/* Change logo image based on sticky state */}
            <img src={sticky ? logoLight : logoDark} alt="logo" className='logo' />
            <ul>
                <li><Link to='college' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='review' smooth={true} offset={-260} duration={500}>Review</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={menu} alt="menu" className='menu-icon' />
        </nav>
    )
}

export default Navbar
