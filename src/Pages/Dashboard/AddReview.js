import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleAddReview = event => {
        event.preventDefault()
        const review = {
            name: user.displayName,
            email: user.email,
            comment: event.target.comment.value,
            ratings: event.target.ratings.value
        }
        fetch('https://desolate-garden-31913.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Review Added Successfully!')
                    event.target.comment.value = ''
                    event.target.ratings.value = ''
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-serif text-center pt-6'>Add a Review</h1>
            <div className='flex justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <form onSubmit={handleAddReview}>
                            <textarea required name='comment' class="textarea textarea-warning w-full" placeholder="Write Your Comment"></textarea>
                            <div className='flex justify-center gap-5 pt-6'>
                                <label class="label">
                                    <span class="label-text text-xl">Ratings:</span>
                                </label>
                                <input required name='ratings' type="text" placeholder="Ratings" class="input input-bordered input-warning w-36 max-w-xs" />
                            </div>
                            <div className='text-center py-5'>
                                <button className='btn btn-secondary px-8'>Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;