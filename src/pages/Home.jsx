import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import { MdSupervisorAccount } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
// import { CiGlobe } from "react-icons/ci";
import { RiLuggageCartLine } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaWarehouse } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { GiGlobe } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { GiRotaryPhone } from "react-icons/gi";

// Components


import VideoModal from "../components/VideoModal";
import calcgif from "../assets/images/boxcalc.png"
import giffe from "../assets/videos/giffe.gif"
import Missionvideo from "../assets/videos/preview.mp4"
import Missionimage from "../assets/images/guyImage.jpg"
// import bgImage from "../assets/images/stock-photo.jpg"
import hovercard from "../assets/images/airMain.jpg"
import hovercard2 from "../assets/images/oceanMain.jpg"
// import hovercard3 from "../assets/images/warehouseMoves.jpg"

import "./Home.css";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import image1 from "../assets/images/cargo-stock.jpg";
import image2 from "../assets/images/taping.jpg";
import image4 from "../assets/images/mainpackage.jpg";
import image3 from "../assets/images/sliderplane.jpg";
import image5 from "../assets/images/newhappylady.jpg";
import image6 from "../assets/images/stock.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

// import image5 from "../assets/images/parcelBarcode.jpg";
// import image6 from "../assets/images/warehouseMoves.jpg";

import { Link } from "react-router-dom";

const Home = () => {



    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
        AOS.refresh();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [counterOn, setCounterOn] = useState(false);

    const slides = [
        {
            url: image1,
            header: "Register for your Free US & China Delivery addresses!",
            text: "Air Freight Services",
            icon: <GiCommercialAirplane size={30} />
        },
        {
            url: image2,
            header: "Free Repacking & Storage",
            text: "Ocean Freight Services",
            icon: <GiCargoShip size={30} />
        },
        {
            url: image3,
            header: "Weekly Shipments from USA & China",
            text: "Assisted Shopping",
            icon: <FaShoppingCart size={30} />
        },
        {
            url: image4,
            header: "Free content inspection with Photo Uploads",
            text: "Assisted Shopping",
            icon: <FaShoppingCart size={30} />
        },
        {
            url: image5,
            header: "Recieve Your Packages from the USA in 5-7 days & China in 7-10 days",
            text: "Assisted Shopping",
            icon: <FaShoppingCart size={30} />
        },
        {
            url: image6,
            header: "...Zero Shock Charges",
            text: "Assisted Shopping",
            icon: <FaShoppingCart size={30} />
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();
    const slideInLeftControls = useAnimation();
    const slideInRightControls = useAnimation();



    useEffect(() => {
        const nextIndex = (currentIndex + 1) % slides.length;

        controls.start({
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
        });

        slideInLeftControls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
        });

        slideInRightControls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
        });

        const interval = setInterval(() => {
            setCurrentIndex(nextIndex);
            controls.start({
                scale: 1.1,
                opacity: 0,
                transition: { duration: 1 },
            });
        }, 7000);

        return () => clearInterval(interval);
    }, [
        currentIndex,
        slides.length,
        controls,
        slideInLeftControls,
        slideInRightControls,
    ]);



    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };



    return (
        <>

            <div className="overflow-x-hidden">
                <div className="h-screen lg:w-full m-auto relative group">
                    <motion.div
                        animate={controls}
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className="lg:w-full h-full bg-cover bg-no-repeat duration-500"
                    >
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

                        <div data-aos="fade-right" className="flex first-letter px-2 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 flex-col justify-center md:top-[40%] 
                        lg:top-[40%] xl:top-[40%] items-left bg-transparent sm:top-[50%] sm:transform sm:-translate-y-1/2 relative text-white">
                            <motion.h2
                                animate={slideInLeftControls}
                                initial={{ x: -100, opacity: 0 }}
                                className="text-3xl sm:text-6xl mt-[180px] lg:mt-0 font-semibold text-white bg-opacity-50 p-2 text-left sm:w-3/4 md:w-4/5 lg:w-4/5 xl:w-3/4"
                            >
                                {slides[currentIndex].header}
                            </motion.h2>
                            <motion.p
                                animate={slideInRightControls}
                                initial={{ x: 100, opacity: 0 }}
                                className="mt-2 p-2 rounded-md text-sm sm:text-lg text-white text-left sm:w-3/4 md:w-4/5 lg:w-4/5 xl:w-3/4"
                            >
                                {slides[currentIndex].paragraph}
                            </motion.p>
                        </div>
                    </motion.div>

                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/5 text-white cursor-pointer">
                        <IoChevronBackOutline onClick={prevSlide} size={30} />
                    </div>

                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full p-2 bg-black/5 text-white cursor-pointer">
                        <IoChevronForward onClick={nextSlide} size={30} />
                    </div>

                    <div className="absolute top-[60%] lg:top-[70%] gap-6 text-center -translate-x-0 translate-y-[-50%] flex flex-row w-100 ml-4 sm:ml-24 p-4 px-4 sm:px-8 items-center">
                        <Link data-aos="fade-right" to="/services">
                            <span data-aos="fade-right" className="bg-white px-3 py-2 text-orange-600 cursor-pointer hover:bg-orange-500 hover:text-white text-sm sm:text-lg">
                                Services
                            </span>
                        </Link>
                        <div data-aos="fade-left" className="flex flex-row items-center relative">
                            <div className="circle relative ripple w-12 h-12 justify-center rounded-full flex items-center">
                            </div>
                            <p className="absolute ml-1 circle top-0 ripple right-12 w-10 h-10 justify-center rounded-full flex items-center">
                            </p>
                            <span onClick={() => setShowModal(true)} className="text-white absolute left-3 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer">
                                <FaPlay />
                            </span>
                            <small className="text-white absolute w-16 top-1/2 left-12 font-bold text-xs sm:text-sm">Our Video!</small>
                        </div>
                    </div>
                    {showModal && <VideoModal onClose={() => setShowModal(false)} />}

                    <div className="text__change">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`text-sm sm:text-lg cursor-pointer relative ${slideIndex === currentIndex ? "bg-orange-600" : ""}`}>
                                {/*<div className="change transform transition-transform hover:height-[160px] hover:pl-2">
                    {slide.icon}
                    <span>{slide.text}</span>
            </div>*/}
                            </div>
                        ))}
                    </div>
                </div>

                <section className="w-full h-full lg:px-[190px] 2xl:px-[190px] py-20">
                    <div className="express">
                        <div className="express__left">
                            <h1 className="lg:w-30 bg-red-600 w-[320px] text-2xl font-bold flex pb-4 lg:text-5xl md:text-3xl">Safe, Reliable And Express deliveries from the USA and China that Saves you time and money!</h1>
                            <div className="express__middle">
                                <div className="main__slider">
                                    <div className="slider">
                                        <input type="radio" name="slide" id="card1" checked />
                                        <input type="radio" name="slide" id="card2" />

                                        <div className="m1">
                                            <BsGlobe2 className="w-14 h-14" />
                                            <h3 className="my-4">Our Mission</h3>
                                            <p className="w-60 h-24 text-gray-400">Utilising latest communications, tracking processing software, and decades of experience</p>
                                        </div>
                                        <div className="m2">
                                            <BsGlobe2 className="w-14 h-14" size={30} />
                                            <h3 className="my-4">Our Vission</h3>
                                            <p className="w-60 h-24 text-gray-400">The best possible service in the sphere of optimized route of cargo & transportation worldwide</p>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <label htmlFor="card1"></label>
                                        <label htmlFor="card2"></label>
                                    </div>
                                </div>
                                <div className="middle__content">
                                    <p className="text-lg w-90 text-black pr-4">Save up to 80% in shipping cost by repacking and consolidating your merchandise with no hidden and shock fees and experience exemplary customer service via our user friendly and intuitive website. </p>
                                    <p className="text-md w-100 mt-10 text-gray-500">We pride ourselves on providing the best transport and shipping services available all over the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions, BoxGiant drives sustainable competitive advantages to some of the largest companies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="express__right mt-6 relative">
                            {/* <video
                                className='vid__right'
                                //   onMouseEnter={handleMouseEnter}
                                //   onMouseLeave={handleMouseLeave}
                                src={Missionvideo}
                                autoPlay={true} // Autoplay set to false to play only on hover
                                loop
                                muted
                                loading='lazy'
                    />*/}

                            <img src={Missionimage} alt="mission" />
                        </div>
                    </div>
                </section>
                <section className="relative bg-white h-[600px] lg:h-full">
                    <div className="w-full h-full relative">
                        <video
                            className='flex w-full h-full object-cover'
                            src={Missionvideo}
                            autoPlay={true} // Autoplay set to false to play only on hover
                            loop
                            muted
                            loading='lazy'
                        />
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                    </div>

                    <div className="absolute top-0 left-0 mt-14 lg:mt-32 2xl:mt-32 lg:pl-[180px] 2xl:pl-[180px]">
                        <div className="flex flex-row items-center relative">
                            <div className="circle relative mr-[14px] ripple w-32 h-32 justify-center rounded-full flex items-center">
                            </div>
                            <p className=" absolute ml-2 circle top-0 ripple right-[143px] w-28 h-28 justify-center rounded-full flex items-center">
                            </p>
                            <span onClick={() => setShowModal(true)} className="text-white absolute top-50 left-[26px] w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer"><FaPlay /></span>
                        </div>
                    </div>

                    <h3 className="text-white font-bold absolute top-60 left-0 pl-[200px] mt-8">

                    </h3>
                    <div className="digital absolute lg:top-[500px] lg:left-[600px] 2xl:top-[500px] 2xl:left-[600px] top-[350px] right-[-90px]">
                        <h1 className="text-white lg:text-5xl 2xl:text-5xl text-[24px] font-bold">
                            Your Package, Your Rules
                        </h1>
                    </div>


                    <div className="flex absolute lg:top-[650px] lg:left-[840px] 2xl:top-[650px] 2xl:left-[840px] bottom-[0px] left-[70px] gap-[20px] lg:gap-32 text-white font-bold">
                        <div className="flex flex-col gap-1 ">
                            <MdSupervisorAccount className="lg:text-[60px] text-[40px]" />
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <span className="lg:text-4xl text-2xl"><CountUp start={0} end={249} duration={2} delay={0} /></span>

                                }
                            </ScrollTrigger>
                            <p>Registered Clients</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <RiLuggageCartLine className='lg:text-[60px] text-[40px]' />
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <span className="lg:text-4xl text-2xl"><CountUp start={0} end={2549} duration={2} delay={0} /></span>

                                }
                            </ScrollTrigger>
                            <p>Packages Delivered</p>
                        </div>

                    </div>


                    <div className="flex absolute lg:bottom-0 lg:left-5 lg:w-[460px] w-full h-[110px] bg-slate-400 lg:ml-[180px]">
                        <div className="flex-1 hover:bg-orange-600 bg-gray-500 cursor-pointer text-white text-lg items-center justify-center gap-4 flex">
                            <IoDocumentTextSharp />
                            Cost Calculator
                        </div>
                        {/*<div className="flex-1 hover:bg-orange-600 bg-gray-500 cursor-pointer text-white text-lg items-center justify-center gap-4 flex">
                            <GiDigitalTrace />
                            Track & trace
                            </div>*/}
                    </div>
                </section>
                <section className="bg-gray-200 w-full lg:p-10">
                    <div className="lg:w-[1080px] bg-white lg:ml-[160px] flex lg:flex-row relative mt-20 lg:mb-10">
                        <div className="p-6 w-full bg-white border shadow-md relative flex flex-col">
                            <h2 className="text-2xl text-black font-bold text-start flex justify-start align-start ml-[70px]  mb-8 w-[200px]">Cost Calculator</h2>
                            <div className='flex flex-col items-start justify-start'>
                                <div className="flex items-center mb-4 gap-4">
                                    <div className='flex flex-col'>
                                        <input type="number" className="flex-1 border bg-slate-200  rounded py-2 px-3 text-white" placeholder="$ Item Cost" />
                                    </div>
                                </div>

                                <label htmlFor="destination" className='text-white bg-slate-200  mb-4 w-[246px] pl-4  border rounded py-2 px-3'>USA TO GHANA</label>

                                <div className="flex items-center mb-4 gap-4">
                                    <div className='flex flex-col'>
                                        <input type="number" className="flex-1 border bg-slate-200 rounded py-2 px-3 text-white" placeholder="Weight (lbs)" />
                                    </div>
                                </div>

                                <div className='lg:flex gap-2 mb-4 items-center justify-center'>
                                    <input type="number" className="border bg-slate-200 rounded py-2 px-3 mb-4 lg:mb-0 text-white" placeholder="Length" />
                                    <input type="number" className="border bg-slate-200 rounded py-2 px-3 text-white" placeholder="Width" />

                                </div>

                                <div className='lg:flex gap-2 mb-4 items-center justify-center'>
                                    <input type="number" className="border rounded bg-slate-200 py-2 px-3 mb-4 lg:mb-0 text-white" placeholder="Height" />
                                    <label htmlFor="inches" className='text-white bg-slate-200  mb-4 w-[250px] pl-4 border mt-4 rounded py-2 px-3'>Inches</label>
                                </div>


                                <button className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-bold py-2 px-4 rounded">Get Rates</button>
                                <div className="text-center mt-8">
                                    <div className="text-3xl font-bold text-orange-600">$ 0</div>
                                    <div className="text-orange-600">Estimated shipping cost</div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-col bg-slate-200 w-[400px] ml-10 h-[350px] absolute lg:right-[150px] lg:top-[70px]">
                            <img src={calcgif} alt="giffe" data-aos="zoom-in-right" className="flex h-full w-full" />
                        </div>
                    </div>

                    <div className="lg:w-[1080px] lg:ml-[160px] p-4 lg:p-0">
                        <div className="flex flex-col lg:flex 2xl:flex lg:flex-row pt-10 lg:items-center justify-between">
                            <div className="pt-5">
                                <small className="text-md text-orange-600 font-bold">
                                    Services We Offer
                                </small>
                                <h1 className="lg:w-[400px] text-3xl font-bold leading-normal mt-4">We Manage Lead Logistics
                                    For World’s Multinational
                                    Companies.
                                </h1>
                            </div>
                            <div className="pt-5 lg:w-[500px]">
                                <h3 className="text-gray-400">
                                    Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies from end-to-end.
                                </h3>
                            </div>
                        </div>

                        <div className="card-area">
                            <div className="wrapper">
                                <div className="box-area">
                                    <div className="box">
                                        <img src={hovercard} alt="card" />
                                        <div className="flex flex-col bottom-5 left-[80px] text-white absolute">
                                            <GiCommercialAirplane size={30} className="mb-5 left-[60px] absolute bottom-10" />
                                            <h2 className="text-3xl font-bold">Air Freight</h2>
                                        </div>
                                        <div className="overlayer">
                                            <GiCommercialAirplane size={30} className="text-white" />
                                            <h2>Air Freight</h2>

                                            <Link to='/airfreight'>Read More</Link>
                                        </div>
                                    </div>

                                    <div className="box">
                                        <img src={hovercard2} alt="card" />
                                        <div className="flex flex-col bottom-5 left-[80px] text-white absolute">
                                            <GiCargoShip size={30} className="mb-5 left-[60px] absolute bottom-10" />
                                            <h2 className="text-3xl font-bold">Ocean Freight</h2>
                                        </div>
                                        <div className="overlayer">
                                            <GiCargoShip size={30} className="text-white" />
                                            <h2>Ocean Freight</h2>

                                            <Link to='/oceanfreight' className="pb-4 flex" >Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="lg:w-[1080px] bg-white lg:ml-[200px] px-4 lg:px-0 mb-10">
                        <div className="pt-20">
                            <small className="text-lg text-orange-600 font-bold">
                                Your Package, Your Rules
                            </small>
                            <h1 className="lg:w-[470px] text-2xl font-bold leading-normal mt-4">We Manage Lead Logistics
                                We continue to pursue that
                                same vision in today's complex,
                                uncertain world, working every
                                day to earn our customers’
                            </h1>
                        </div>

                        <div className="mt-20 gap-[26px] place-items-center grid lg:grid-cols-4">
                            <div className="w-[250px]">
                                <BsCreditCard2FrontFill className="text-4xl text-orange-600 mb-4" />
                                <h4 className="font-bold text-md mb-4">Affordable Rates
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    We ensure that we provide efficient and effective services that are affordable to all. Our price is all-inclusive and that allows you to accurately project your costs.
                                </p>
                            </div>
                            <div className="w-[250px]">
                                <GiGlobe className="text-4xl text-orange-600 mb-4" />
                                <h4 className="font-bold text-md mb-4">Real-Time Tracking</h4>
                                <p className="text-gray-400 text-sm">
                                    Know where your package is, all the time.
                                </p>
                            </div>
                            <div className="w-[250px]">
                                <FaWarehouse className="text-4xl text-orange-600 mb-4" />
                                <h4 className="font-bold text-md mb-4">Warehouse Storage</h4>
                                <p className="text-gray-400 text-sm">
                                    We operate from a secure warehousing facility in Miami where your packages are fully secured and insured with the best of care.
                                </p>
                            </div>
                            <div className="w-[250px]">
                                <MdOutlineSecurity className="text-4xl text-orange-600 mb-4" />
                                <h4 className="font-bold text-md mb-4">Security For Cargo</h4>
                                <p className="text-gray-400 text-sm">
                                    Our facilities meet high security requirements and are certified to the highest local standards.
                                </p>
                            </div>
                            <div className="w-[250px]">
                                <TbTargetArrow className="text-4xl text-orange-600 mb-4" />
                                <h4 className="font-bold text-md mb-4">Easy Payment Methods</h4>
                                <p className="text-gray-400 text-sm">
                                    Relax – our easy payment method options have got you covered! We provide you with simple means of payments that are stress free. There are multiple means which you can pay with that are convenient.
                                </p>
                            </div>
                            <div className="w-[250px]">
                                <GiRotaryPhone className="text-4xl text-orange-600 mb-4" />
                                <h4 className="font-bold text-md mb-4">24/7 Hours Support</h4>
                                <p className="text-gray-400 text-sm">
                                    We are always ready to provide you with a friendly service with constant updates on the status of your packages where all your questions and inquiries are promptly answered, and any issue is solved.
                                </p>
                            </div>
                            <div className="w-[250px]">
                                <FaTruckFast className="text-4xl text-orange-600 mb-4" />
                                <h4 className="font-bold text-md mb-4">Fast & Efficient Delivery</h4>
                                <p className="text-gray-400 text-sm">
                                    We rely on airlines that offer faster and secure routes to get your packages to you in the earliest possible time.                                 </p>
                            </div>
                            <div className="w-[250px] bg-orange-600 gap-4 items-center flex justify-center">
                                <img src={giffe} alt="giffe" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home