import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faClockFour, faCreditCardAlt } from '@fortawesome/free-solid-svg-icons'
const Commitment = () => {
    return (
        <div className='py-16'>
            <h1 className='text-4xl font-sarif text-accent text-center font-sarif '>Our Commitment To Yours</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-12 lg:pl-10'>

                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <FontAwesomeIcon className='text-6xl' icon={faPaintBrush}></FontAwesomeIcon>
                        <h1 className='text-2xl font-bold text-white mt-2 '>Qualified Tools</h1>
                        <p className='text-white'>Highly qualified painters for the best quality</p>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <FontAwesomeIcon className='text-6xl' icon={faClockFour}></FontAwesomeIcon>
                        <h1 className='text-2xl font-bold text-white mt-2 '>Delivered On Time</h1>
                        <p className='text-white'>The most important attribute of good customer service</p>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <FontAwesomeIcon className='text-6xl' icon={faCreditCardAlt}></FontAwesomeIcon>
                        <h1 className='text-2xl font-bold text-white mt-2 '>Affordable Prices</h1>
                        <p className='text-white'>Affordable Service provides the best painting solutions</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Commitment;