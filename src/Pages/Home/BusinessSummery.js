import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faPeopleGroup, faMessage } from '@fortawesome/free-solid-svg-icons'

const BusinessSummery = () => {
    return (
        <div className='py-12'>
            <h1 className='text-5xl font-bold text-accent text-center font-sarif '>Our Achievement Here</h1>
            <h1 className='text-2xl font-bold text-secondary text-center py-3'>Always the owner of best quality!</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-12 lg:pl-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-8xl text-primary' icon={faPaintRoller}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl text-bold text-accent">100+</h2>
                        <p className='text-xl font-bold '>Tools Available</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-8xl text-primary' icon={faPeopleGroup}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl text-bold text-accent">1000+</h2>
                        <p className='text-xl font-bold '>Customers</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-8xl text-primary' icon={faMessage}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl text-bold text-accent">500+</h2>
                        <p className='text-xl font-bold '>Happy Review</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummery;