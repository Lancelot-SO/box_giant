import React, { useState } from 'react'
import oceanfreight from "../assets/images/dOceanfreight.jpg"
import redplane from "../assets/images/dOceanfreight.jpg"

import "./OceanFreight.css";
import { Link } from 'react-router-dom';
import { IoMail } from 'react-icons/io5';
import { FaPlay, FaWarehouse } from 'react-icons/fa';
import VideoModal from '../components/VideoModal';
import { GiGlobe } from 'react-icons/gi';
import { BsCreditCard2FrontFill } from 'react-icons/bs';


const OceanFreight = () => {

    const [showModal, setShowModal] = useState(false);

    // const [isVisible, setIsVisible] = useState([false, false]); // Initial state for two sections

    // const toggleText = (index) => {
    //     setIsVisible(prevState => {
    //         const newState = [...prevState]; // Create a copy of the state array
    //         newState[index] = !newState[index]; // Toggle visibility for the specified index
    //         return newState; // Return the updated state
    //     });
    // };

    return (
        <div className='overflow-x-hidden'>
            <div className=''>
                <img src={oceanfreight} alt='contact' className='relative h-[650px] w-full' />
                <h1 className='absolute top-[65%] left-[180px] text-white text-6xl font-bold'>Ocean Freight</h1>
            </div>

            <div className='w-full h-[1600px] px-[20px]'>
                <div className='flex flex-col lg:flex-row bg-white w-[1095px] h-[100%] lg:ml-[190px] lg:my-10'>
                    <div className='air__left'>
                        <div className="flex flex-col pt-10 ml-[30px] pl-10 bg-orange-600 w-[300px] h-[350px] mt-10">
                            <h1 className="text-2xl text-white">How Can<br /> We Help You!</h1>
                            <p className="lg:w-[240px] text-white pt-5">We understand the importance approaching
                                each work integrally and believe in the power of simple and easy communication.
                            </p>
                            <Link to='/'>
                                <div className="w-[130px] mt-5 p-[8px] bg-black font-bold text-sm text-white flex items-center gap-1 justify-center">
                                    <IoMail size={24} />
                                    Contact Us
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='air__right'>
                        <h1 className='text-xl font-bold mb-3 mt-2 lg:mt-0'>Overview</h1>
                        <p className='text-gray-400 w-[350px] lg:w-full'>
                            Our ocean freight staff attaches great importance to customizing the shipments handling and booking process for our customers. That’s why we strive to find the ocean freight solution that best suits your needs.                         </p>
                        <br />

                        <p className='text-gray-400 w-[350px] lg:w-full'>
                            With monthly outgoing shipments from the USA and China, you will always have a space.
                        </p>
                        <br />
                        <p className='text-gray-400 w-[350px] lg:w-full'>
                            Where possible, we’ll erect and dismantle Unit Load Devices (ULDs), reducing significantly the risk of damage to your shipment and saving you time and expense. We can do this because many of our freight stations have their own ground transportation at or around the airport.
                        </p>

                        <h1 className='mt-8 mb-4 text-xl font-bold'>How it works</h1>

                        <p className='text-gray-400 mb-4 w-[350px] lg:w-full'>
                            We have more than twenty years of experience. During that time, we’ve become expert in freight transportation by air and all its related services. We work closely with all major airlines around the world. Ongoing negotiations ensure that we always have the cargo space we need and offer you competitive rates.
                        </p>

                        <div className='relative w-[280px] lg:w-full'>
                            <img src={redplane} alt='redplane' className='w-[280px] lg:w-full' />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
                            <div className="absolute lg:top-[100px] top-[10px] left-[60px] lg:left-[120px] lg:mt-32 lg:pl-[180px]">
                                <div className="flex flex-row items-center relative">
                                    <div className="circle relative mr-[14px] ripple w-32 h-32 justify-center rounded-full flex items-center">
                                    </div>
                                    <p className=" absolute ml-2 circle top-0 ripple right-[143px] w-28 h-28 justify-center rounded-full flex items-center">
                                    </p>
                                    <span onClick={() => setShowModal(true)} className="text-white absolute top-50 left-[26px] w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer"><FaPlay /></span>
                                </div>
                            </div>
                        </div>
                        {showModal && <VideoModal onClose={() => setShowModal(false)} />}

                        <h1 className='mt-8 mb-4 text-xl font-bold'>Why Us!</h1>

                        <p className='text-gray-400 mb-4 w-[320px] lg:w-full'>
                            We have more than twenty years of experience. During that time, we’ve become expert in freight transportation by air and all its related services. We work closely with all major airlines around the world. Ongoing negotiations ensure that we always have the cargo space we need and offer you competitive rates.
                        </p>

                        <div className='bg-gray-100 w-[280px] lg:w-full mt-5 p-8'>
                            <h1 className='mb-4 text-2xl font-bold'>Top 3 key benefits</h1>
                            <div className='gap-[20px] grid lg:grid-cols-3 grid-cols-1'>
                                <div className="w-[250px]">
                                    <BsCreditCard2FrontFill className="text-4xl text-orange-600 mb-4" />
                                    <h4 className="font-bold text-md mb-4">Transparent Pricing</h4>
                                    <p className="text-gray-400 text-sm h-[100px] w-[200px]">
                                        The world of international supply chains involves a myriad of unknown risks and challenging regulations.
                                    </p>
                                </div>
                                <div className="w-[250px]">
                                    <GiGlobe className="text-4xl text-orange-600 mb-4" />
                                    <h4 className="font-bold text-md mb-4">Real-Time Tracking</h4>
                                    <p className="text-gray-400 text-sm h-[100px] w-[200px]">
                                        We ensure our customers’ supply chains are fully compliant by our comprehensive practices and programs.
                                    </p>
                                </div>
                                <div className="w-[250px]">
                                    <FaWarehouse className="text-4xl text-orange-600 mb-4" />
                                    <h4 className="font-bold text-md mb-4">Warehouse Storage</h4>
                                    <p className="text-gray-400 text-sm h-[100px] w-[200px]">
                                        Depending on your product, needs and requirements, we provide professional warehouse activities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*<div>
                            <h1 className='mt-8 mb-4 text-xl font-bold'>Key Benefits</h1>
                            <div className='flex flex-col pl-4 overflow-y-hidden'>
                                <div className='border-2 border-b-gray-200 mt-5 w-[600px] '>
                                    <div className=''>
                                        <div className='flex flex-row justify-between items-center py-1 px-4'>
                                            <span className={`font-bold ${isVisible[0] ? 'text-orange-600' : ''}`}>Which Plan Is Right For Me?</span>
                                            <button onClick={() => toggleText(0)} className={`toggle-btn ${isVisible[0] ? 'minus bg-orange-600' : 'plus'}`}>
                                            </button>
                                        </div>
                                        <div className={`hidden-text ${isVisible[0] ? 'visible' : ''}`}>
                                            <p className='px-4 text-gray-400'>
                                                Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience, ensure all freight is are shipped, trans-shipped and delivered as safely.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-gray-200 mt-5 w-[600px]'>
                                    <div className=''>
                                        <div className='flex flex-row justify-between items-center py-1 px-4'>
                                            <span className={`font-bold ${isVisible[1] ? 'text-orange-600' : ''}`}>Do I have to commit to a contract?</span>
                                            <button onClick={() => toggleText(1)} className={`toggle-btn ${isVisible[1] ? 'minus bg-orange-600' : 'plus'}`}>
                                            </button>
                                        </div>
                                        <div className={`hidden-text ${isVisible[1] ? 'visible' : ''}`}>
                                            <p className='px-4 text-gray-400'>
                                                Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience, ensure all freight is are shipped, trans-shipped and delivered as safely.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='border border-gray-200 mt-5 w-[600px]'>
                                    <div className=''>
                                        <div className='flex flex-row justify-between items-center py-1 px-4'>
                                            <span className={`font-bold ${isVisible[2] ? 'text-orange-600' : ''}`}>What Payment Methods Are Available?</span>
                                            <button onClick={() => toggleText(2)} className={`toggle-btn ${isVisible[2] ? 'minus bg-orange-600' : 'plus'}`}>
                                            </button>
                                        </div>
                                        <div className={`hidden-text ${isVisible[2] ? 'visible' : ''}`}>
                                            <p className='px-4 text-gray-400'>
                                                Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience, ensure all freight is are shipped, trans-shipped and delivered as safely.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </div>*/}
                    </div>
                </div>
            </div>

            <div className='w-full h-[1px] bg-gray-300 mt-20'></div>


        </div>
    )
}

export default OceanFreight;