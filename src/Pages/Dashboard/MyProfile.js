import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery('user', () => fetch(`https://desolate-garden-31913.herokuapp.com/user/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleUpdateProfile = event => {
        event.preventDefault()
        const email = user?.email
        const updatedUser = {
            name: user.displayName,
            education: event.target.education.value,
            address: event.target.address.value,
            img: event.target.photo.value,
            phone: event.target.phone.value,
        }
        console.log(updatedUser)
        if (email) {
            fetch(`https://desolate-garden-31913.herokuapp.com/user/update/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            })
                .then(res => res.json())
                .then(data => {
                    event.target.education.value = ''
                    event.target.address.value = ''
                    event.target.photo.value = ''
                    event.target.phone.value = ''
                    refetch()
                })
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-serif text-center pt-6'>My Profile</h1>
            <div class="hero min-h-screen lg:bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex justify-center'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h1 className='text-3xl text-center py-3 font-bold text-accent'>Update Profile</h1>
                                <form onSubmit={handleUpdateProfile} className='w-full text-center'>
                                    <input name='education' required type="text" placeholder="Education" class="input input-bordered input-warning w-full mb-3" />
                                    <input name='address' required type="text" placeholder="Address" class="input input-bordered input-warning w-full mb-3" />
                                    <input name='photo' required type="text" placeholder="Photo URL" class="input input-bordered input-warning w-full mb-3" />
                                    <input name='phone' required type="text" placeholder="Phone" class="input input-bordered input-warning w-full mb-3" />
                                    <input className='btn btn-secondary' type="submit" value="Update Profile" />
                                </form>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    {
                                        data.img && <div class="avatar justify-center">
                                            <div class="w-36 rounded-full ">
                                                <img src={data.img} alt='' />
                                            </div>
                                        </div>
                                    }
                                    <h2 class="card-title text-3xl text-accent justify-center">{user?.displayName}</h2>
                                    <p className='text-xl font-bold'>Email: {user?.email}</p>
                                    {
                                        data.phone && <p className='text-xl font-bold'>Phone: {data.phone}</p>
                                    }
                                    {
                                        data.education && <p className='text-xl font-bold'>Education: {data.education}</p>
                                    }
                                    {
                                        data.address && <p className='text-xl font-bold'>Address: {data.address}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;