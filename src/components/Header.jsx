import React, { useEffect, useState } from 'react';
import "./Header.css";
import logo from "../assets/images/logo-transparent.svg";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";

import { Link } from 'react-router-dom';
import PriceCalculator from "../components/PriceCalculator";

const Header = () => {
    const [showPriceCalculator, setShowPriceCalculator] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [nav, setNav] = useState(false);


    const togglePriceCalculator = () => {
        setShowPriceCalculator(!showPriceCalculator);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`lg:px-[160px] transition-colors ${isScrolled ? 'hidden' : 'block'}`}>
            <div className='header__container'>
                <div className='main__navbar'>
                    <div className="logo" >
                        <Link to="/"><img src={logo} alt='logo'></img></Link>
                    </div>
                    <div className='right__items'>
                        <div className='phone__calc'>
                            <strong className='text-gray-400'>
                                <FaPhoneAlt />
                                +233 256-616-622
                            </strong>
                            <div className='price' onClick={togglePriceCalculator}>
                                <IoDocumentTextSharp />
                                Cost Calculator
                            </div>
                            {showPriceCalculator && <PriceCalculator togglePopup={togglePriceCalculator} />}
                        </div>
                        <div className='lists'>
                            <ul className='list__items'>
                                <Link to="/" className='list__item text-gray-200'><li>Home</li></Link>
                                <Link to="/services" className='list__item text-gray-200'><li>Services</li></Link>
                                <Link to="/contact" className='list__item text-gray-200'><li>Contact</li></Link>
                            </ul>
                            <div className='sign__btns'>
                                <Link to="https://dashboard.boxgiant.shop/index.php"><div type="button" className='log__in text-gray-200'>Login</div></Link>
                                <Link to='https://dashboard.boxgiant.shop/register.php'><div type="button" className='sign__in'>Sign up</div></Link>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setNav(!nav)} className='bars'>
                        {nav ? <FaTimes size={30} /> : <RiMenu4Fill size={30} />}
                    </div>

                    {
                        nav && (
                            <div className='nav__links'>
                                <ul class="mobile-nav-links">
                                    <li className='mobile-menu-link'>
                                        <Link
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className='mobile-menu-link'>
                                        <Link
                                            to="/services"

                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li className='mobile-menu-link'>
                                        <Link
                                            to="/contact"

                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <div className='nav-mobile__signup'>
                                    <Link to='/login' className='nav__login-mobile'>Login</Link>
                                    <Link to='/login'>
                                        <div className='nav__signup-mobile'>
                                            Sign up
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
        </nav>
    )
}

export default Header;
