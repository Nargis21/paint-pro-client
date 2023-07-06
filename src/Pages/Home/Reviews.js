import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://paint-pro-server.vercel.app/review').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='pb-16 bg-orange-200'>
            <h1 className='text-5xl text-primary text-center font-sarif py-16'>What Our Client's Say?</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:pl-10'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;