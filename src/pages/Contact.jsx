import React from 'react'
import "./Contact.css"
import contact from "../assets/images/contactImg.gif"

const Contact = () => {
    return (
        <div>
            <div className=''>
                <img src={contact} alt='contact' className='relative h-[500px] w-full' />
                <h1 className='absolute top-[55%] left-[180px] text-white text-5xl font-bold'>Contact Us</h1>
            </div>

            <div className='flex flex-col lg:items-center lg:justify-center pt-20'>
                <span className='text-orange-600 mb-4'>Get In Touch</span>
                <div className='flex items-center justify-center flex-col mb-4'>
                    <h1 className='text-4xl font-bold mb-3'>Connect With Us</h1>
                    <div className='w-[50px] h-[5px] bg-orange-600'></div>
                </div>
                <p className='text-slate-400 flex justify-center items-center'>We understand the importance of approaching each work integrally and believe
                </p>
                <p className='text-slate-400'>in the power of simple and easy communication.</p>
            </div>

            <div class="bg-white flex lg:flex-row flex-col lg:items-center lg:justify-center h-70 gap-5 pl-4 lg:pl-0">
                <div class="bg-orange-600 items-center justify-center p-8 rounded-lg shadow-md mt-5 w-[250px] lg:w-[500px] flex lg:flex-row flex-col">
                    <div className='lg:mb-0 mb-2'>
                        <h2 class="lg:text-4xl text-xl mr-5 text-white font-semibold ">Contact Us</h2>
                        <div className='h-2 w-20 bg-white'></div>
                    </div>
                    <form>
                        <div class="mb-4">
                            <label for="name" class="block text-white">Name</label>
                            <input type="text" id="name" name="name" class="form-input rounded-md p-2 mt-1 block w-full" placeholder="Your Name" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-white">Email</label>
                            <input type="email" id="email" name="email" class="form-input rounded-md p-2 mt-1 block w-full" placeholder="Your Email" required />
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="block text-white">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-input rounded-md p-2 mt-1 block w-full" placeholder="Subject" required />
                        </div>
                        <button type="submit" class="bg-white hover:text-orange-800 text-orange-600 font-semibold px-4 py-2 rounded">Submit</button>
                    </form>
                </div>
                <div class="mt-10 h-[380px] overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.412449693084!2d-0.18150002525418493!3d5.65332329432803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7eaac8b6d5%3A0x63e1fd54f881e500!2sLegon%20City%20Mall!5e0!3m2!1sen!2sgh!4v1713517621908!5m2!1sen!2sgh"
                        title="Google Maps Location"
                        height="360"
                        style={{ border: '0' }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className='lg:w-[550px] w-[280px]'
                    ></iframe>
                </div>

            </div>
        </div>
    )
}

export default Contact