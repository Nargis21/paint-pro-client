import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { name, minimumOrderQuantity, availableQuantity, img, description, price } = tool
    return (
        <div className=''>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-accent font-serif text-2xl">{name}</h2>
                    <h3 className='text-xl font-bold'>Minimum Order Quantity: {minimumOrderQuantity}</h3>
                    <h3 className='text-xl font-bold'>Available Quantity: {availableQuantity}</h3>
                    <h3 className='text-xl font-bold'>Price: ${price}</h3>
                    <p>{description}</p>
                    <div class="card-actions">
                        <Link to='/purchase'>
                            <button class="btn btn-secondary font-bold text-md px-12 text-white">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;