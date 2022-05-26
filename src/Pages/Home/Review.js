import React from 'react';

const Review = ({ review }) => {
    const { name, comment, ratings } = review
    return (
        <div>
            <div class=" card w-96 h-64 bg-white shadow-xl">
                <div class="card-body text-center">
                    <h2 class="card-title justify-center text-3xl text-accent font-bold">{name}</h2>
                    <p className='text-xl text-bold italic'>"{comment}"</p>
                    <p className='text-2xl text-secondary text-bold'>Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;