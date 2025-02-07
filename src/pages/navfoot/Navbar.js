import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import Icon from './Icon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar-container'>

            <button className="menu-icon" onClick={toggleNavbar}>
                {isOpen ? '×' : '☰'}
            </button>
            <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
                {isOpen ? (
                    <ul>
                        <li><a href="/login">My Wallet</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/earn">How to Earn</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/connect">Connect with us</a></li>
                    </ul>
                ) : 
                <div>
                    <Link to="/" className="logo">
                        <img src={Icon} alt="Site Logo" />
                    </Link>
                    <a>Take Your Tokkns!</a>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;