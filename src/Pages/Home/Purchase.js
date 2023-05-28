import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Tools from './Tools';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [orderQuantity, setOrderQuantity] = useState(0)
    const [tool, setTool] = useState()

    useEffect(() => {
        fetch(`https://paint-pro.up.railway.app/tool/${id}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
                setOrderQuantity(data?.minimumOrderQuantity)
            })
    }, [])

    const handleIncrease = () => {
        if (orderQuantity === tool?.availableQuantity) {
            toast.error('Quantity must be equal or less than available quantity!')
            return
        }
        else {
            setOrderQuantity(orderQuantity + 1)
        }
    }
    const handleDecrease = () => {
        if (orderQuantity === tool?.minimumOrderQuantity) {
            toast.error('Quantity must be equal or greater than minimum order quantity!')
            return
        }
        else {
            setOrderQuantity(orderQuantity - 1)
        }
    }

    const handleOrder = event => {
        event.preventDefault()
        const order = {
            toolId: id,
            tool: tool.name,
            price: tool.price,
            quantity: parseInt(event.target.quantity.value),
            name: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        fetch('https://paint-pro.up.railway.app/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Order Successfully Placed')
                }
            })

    }
    return (
        <div className=' lg:mx-48 lg:my-12 '>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:h-96' src={tool?.img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-accent font-serif text-2xl">{tool?.name}</h2>
                    <h3 className='text-xl font-bold'>Price: ${tool?.price}</h3>
                    <h3 className='text-xl font-bold'>Minimum Order Quantity: {tool?.minimumOrderQuantity}</h3>
                    <h3 className='text-xl font-bold'>Available Quantity: {tool?.availableQuantity}</h3>
                    <h3 className='text-xl font-bold'>Name: {user?.displayName}</h3>
                    <h3 className='text-xl font-bold'>Email: {user?.email}</h3>

                    <form onSubmit={handleOrder}>
                        <label class="label">
                            <p class="label-text font-bold">Phone</p>
                        </label>
                        <input required type="text" name='phone' placeholder="Phone" class="input w-full input-warning max-w-xs" />
                        <label class="label">
                            <p class="label-text font-bold">Address</p>
                        </label>
                        <input required type="text" name='address' placeholder="Address" class="input w-full input-warning max-w-xs" />
                        <label class="label">
                            <p class="label-text font-bold">Set Order Quantity</p>
                        </label>
                        <input type="text" name='quantity' value={orderQuantity} placeholder="Type here" class="input w-24 input-warning max-w-xs" />
                        <p disabled={orderQuantity >= tool?.availableQuantity} onClick={handleIncrease} class="btn btn-sm btn-accent mx-3">Increase</p>
                        <p disabled={orderQuantity <= tool?.minimumOrderQuantity} onClick={handleDecrease} class="btn btn-sm btn-accent">Decrease</p>
                        <div class="card-actions justify-end mt-12">
                            <button type="submit" className='btn btn-secondary'>Place Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;