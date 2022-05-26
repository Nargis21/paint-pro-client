import React from 'react';

const Subscribe = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center py-16 px-8'>
            <div>
                <h1 className='text-5xl text-accent mb-3'>Subscribe To Our Newsletter
                </h1>
                <p className='text-xl font-mono'>GET THE LATEST NEWS ON YOUR EMAIL</p>
            </div>
            <div className='text-center'>
                <input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />
                <button className='btn btn-primary ml-5'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;