import React from 'react'

import hovercard from "../assets/images/airMain.jpg"
import hovercard2 from "../assets/images/dOceanfreight.jpg"
import { GiCargoShip, GiCommercialAirplane } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import services from "../assets/images/service-photo.jpg"


const Services = () => {
    return (
        <div>
            <div className=''>
                <img src={services} alt='contact' className='relative h-[500px] w-full' />
                <h1 className='absolute lg:top-[55%] top-[50%] lg:left-[180px] left-4 text-white text-5xl font-bold'>Services</h1>
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
        </div>
    )
}

export default Services