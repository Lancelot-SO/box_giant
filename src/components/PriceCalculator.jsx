import React, { useRef } from 'react';
import "./Modal.css"
import { FaTimes } from 'react-icons/fa';


const PriceCalculator = ({ togglePopup }) => {

    const ModalRef = useRef();

    const closeModal = (e) => {
        if (ModalRef.current === e.target) {
            togglePopup()
        }
    }


    return (

        <div ref={ModalRef} onClick={closeModal} className="fixed cursor-pointer z-20 inset-0 bg-black bg-opacity-50 backdrop-blur-sm items-center flex justify-center">
            <div className="p-8 w-[800px] bg-orange-600 border rounded shadow-md relative flex flex-col items-center justify-center">

                <div className='absolute top-0 right-0 m-4 text-white focus:outline-none cursor-pointer' onClick={togglePopup}><FaTimes size={24} /></div>

                <h2 className="text-2xl text-white font-bold text-center flex justify-center align-middle m-auto  mb-8 w-[200px]">Cost Calculator</h2>
                <div className='flex flex-col items-center justify-center'>
                    <div className="flex items-center mb-4 gap-4">
                        <div className='flex flex-col'>
                            <input type="number" className="flex-1 border rounded py-2 px-3 text-black" placeholder="$ Item Cost" />
                        </div>
                    </div>

                    <label htmlFor="destination" className='text-gray-400  mb-4 w-[246px] pl-4 bg-white border rounded py-2 px-3'>USA TO GHANA</label>

                    <div className="flex items-center mb-4 gap-4">
                        <div className='flex flex-col'>
                            <input type="number" className="flex-1 border rounded py-2 px-3 text-black" placeholder="Weight (lbs)" />
                        </div>
                    </div>

                    <div className='flex gap-2 mb-4 items-center justify-center'>
                        <input type="number" className="border rounded py-2 px-3 text-black" placeholder="Length" />
                        <input type="number" className="border rounded py-2 px-3 text-black" placeholder="Width" />

                    </div>

                    <div className='flex gap-2 mb-4 items-center justify-center'>
                        <input type="number" className="border rounded py-2 px-3 text-black" placeholder="Height" />
                        <label htmlFor="inches" className='text-gray-400  mb-4 w-[250px] pl-4 bg-white border mt-4 rounded py-2 px-3'>Inches</label>
                    </div>


                    <button className="bg-white hover:bg-white hover:text-orange-600 text-orange-600 font-bold py-2 px-4 rounded">Get Rates</button>
                    <div className="text-center mt-8">
                        <div className="text-3xl font-bold text-white">GHC 0</div>
                        <div className="text-white">Estimated price for your shipment</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceCalculator;
