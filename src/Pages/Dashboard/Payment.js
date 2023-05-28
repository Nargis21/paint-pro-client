import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L281ULQVp5vUycMlsoCxNYBZUrQWgl92XkaoiNxRERuFeNeWw6sc9gSusKcZZ21vA3YlsTF97Zo9lLDohO40O3b00bDqDH26m');

const Payment = () => {
    const { id } = useParams()
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`https://paint-pro.up.railway.app/order/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl font-serif text-center p-4'>Payment Info</h1>
            <div className='lg:flex gap-5 justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <p className='font-bold text-xl'>Hello <span className='text-success'>{order.name},</span></p>
                        <h2 className="card-title">Pay for <span className='text-xl text-accent'> {order.tool}</span></h2>
                        <h3 className='font-bold'>Per Price: {order.price}</h3>
                        <h3 className='font-bold'>Quantity: {order.quantity}</h3>
                        <h3 className='font-bold'>Total: {order.price * order.quantity}</h3>
                        <h3 className='text-xl font-bold'>Please Pay: ${order.price * order.quantity}</h3>
                    </div>
                </div>
                <div className="card h-64 lg:mt-5 w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;