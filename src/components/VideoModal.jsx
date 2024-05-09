import React, { useRef } from 'react'
import Boxvideo from "../assets/videos/BoxGiantVideo.mp4"
import { FaTimes } from 'react-icons/fa'
import "./Modal.css"

const VideoModal = ({ onClose }) => {
    const ModalRef = useRef();

    const closeModal = (e) => {
        if (ModalRef.current === e.target) {
            onClose()
        }
    }
    return (
        <div ref={ModalRef} onClick={closeModal} className='fixed cursor-pointer z-10 inset-0 bg-black bg-opacity-70 backdrop-blur-sm items-center flex justify-center'>
            <div className='modal__content'>
                <div onClick={onClose} className='w-12 h-12 cursor-pointer place-self-end bg-orange-600 text-white rounded-full flex items-center justify-center' ><FaTimes size={24} /></div>

                <video
                    className='Box__video'
                    //   onMouseEnter={handleMouseEnter}
                    //   onMouseLeave={handleMouseLeave}
                    src={Boxvideo}
                    autoPlay={true} // Autoplay set to false to play only on hover
                    loop
                    controls
                    loading='lazy'
                />

            </div>
        </div>
    )
}

export default VideoModal