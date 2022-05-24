import React from 'react';
import banner from '../../images/banner4.jpg'
import cartoon from '../../images/cartoon.jpg'

const Banner = () => {
    return (
        <div class="hero lg:min-h-screen bg-cover bg-center mb-20" style={{ backgroundImage: `url(${banner})` }}>
            <div class="hero-overlay bg-opacity-40 bg-black"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-black ">Explore Your Best Paint Tools!</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white font-bold px-12">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;