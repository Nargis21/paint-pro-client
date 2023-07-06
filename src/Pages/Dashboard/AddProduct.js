import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault()
        const product = {
            name: event.target.name.value,
            price: parseInt(event.target.price.value),
            minimumOrderQuantity: parseInt(event.target.minimumOrderQuantity.value),
            availableQuantity: parseInt(event.target.availableQuantity.value),
            img: event.target.photo.value,
            description: event.target.description.value,
        }
        console.log(product)
        fetch('https://paint-pro-server.vercel.app/tool', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.acknowledged) {
                    toast.success('Product added Successfully!')
                    event.target.name.value = ''
                    event.target.price.value = ''
                    event.target.minimumOrderQuantity.value = ''
                    event.target.availableQuantity.value = ''
                    event.target.photo.value = ''
                    event.target.description.value = ''

                }
                else {
                    toast.error('Failed to add the Product')
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-serif text-center pt-6'>Add a Product</h1>
            <div className='flex justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <form onSubmit={handleAddProduct} className='w-full'>
                            <input name='name' required type="text" placeholder="Name" class="input input-bordered input-warning w-full mb-4" />
                            <input name='price' required type="text" placeholder="Price" class="input input-bordered input-warning w-full mb-4 " />
                            <input name='minimumOrderQuantity' required type="text" placeholder="Minimum Order Quantity" class="input input-bordered input-warning w-full mb-4" />
                            <input name='availableQuantity' required type="text" placeholder="Available Quantity" class="input input-bordered input-warning w-full mb-4" />
                            <input name='photo' required type="text" placeholder="Photo URL" class="input input-bordered input-warning w-full mb-4" />
                            <textarea name='description' required class="textarea textarea-warning mb-6 w-full" placeholder="Description"></textarea>
                            <input className='btn btn-secondary' type="submit" value="Add Product" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;