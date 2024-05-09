import React from 'react'
import logo from "../assets/images/boxLogo.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='mt-[100px]'>
            <div className='lg:w-[1080px] lg:ml-[190px]'>
                <div className=' p-4 lg:flex items-center gap-[80px]'>
                    <div>
                        <img src={logo} alt='logo' className='w-[150px] h-[150px]' />

                        <div className='flex mt-4 mb-8 lg:mb-0 gap-2'>
                            <Link to='https://www.facebook.com/Boxgiant_Express' target="_blank" rel="noopener noreferrer"><FaFacebookF className='hover:text-orange-600' /></Link>
                            <Link to='https://www.instagram.com/boxgiant_express1/' target="_blank" rel="noopener noreferrer"><FaInstagram className='hover:text-orange-600' /></Link>
                            <Link to='https://twitter.com/BoXGiantExpress' target="_blank" rel="noopener noreferrer"><BsTwitterX className='hover:text-orange-600' /></Link>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='mb-4 font-bold'>Who We Are</h3>
                        <ul className='text-gray-400 mb-2 lg:mb-0 flex flex-col items-start'>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Home</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Services</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Contact</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Contact Us</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Work With Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-4 font-bold'>What We Do</h3>
                        <ul className='text-gray-400 mb-2 lg:mb-0 flex flex-col items-start'>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Air Freight</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Ocean Freight</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Login</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Sign Up</li>
                            </Link>
                            <Link>
                                <li className='mb-3 hover:text-orange-600'>Work With Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='mb-8'>
                        <h3 className='mb-4 font-bold'>Contacts</h3>
                        <ul className='text-gray-400 mb-2 lg:mb-0 flex flex-col items-start'>
                            <li className='mb-3 hover:text-orange-600'>Phone: +233 256-616-622</li>
                            <li className='mb-3 hover:text-orange-600'>Email: Client.services@boxgiant.shop</li>
                            <li className='mb-3 hover:text-orange-600'>Address: Legon City Mall, W29 JJ Rawlings Avenue</li>
                            <li className='mb-3 hover:text-orange-600'>Hours: Mon-Fri: 8am – 7pm</li>
                        </ul>
                    </div>

                </div>
                <div className='w-full h-[1px] bg-gray-300 mt-10 mb-10'></div>

                <div className='w- h-20 justify-center flex flex-col items-center text-gray-400 text-sm'>
                    <div className='flex'>
                        <div className='p-2 border-r'>Terms & Conditions</div>
                        <div className='p-2'>Privacy Policy</div>
                        <div className='p-2'>Sitemap</div>
                        <div className='p-2'>Employee login</div>
                    </div>
                    <div>
                        <span className='text-sm'>©2024 <Link to='/' className='hover:text-orange-600'>BoxGiant</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer