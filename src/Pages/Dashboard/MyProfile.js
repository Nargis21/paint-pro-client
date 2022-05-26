import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
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
        //     if (email) {
        //         fetch(`http://localhost:5000/user/update/${email}`, {
        //             method: 'PUT',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(updatedUser)
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data)
        //             })
        //     }
    }

    return (
        <div>
            <h1 className='text-3xl font-serif text-center pt-6'>My Profile</h1>
            <div className='flex justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl text-accent">{user?.displayName}</h2>
                        <p className='text-xl'>Email: {user?.email}</p>
                        <form onSubmit={handleUpdateProfile} className='w-full'>
                            <input name='education' required type="text" placeholder="Education" class="input input-bordered input-warning w-full" />
                            <input name='address' required type="text" placeholder="Address" class="input input-bordered input-warning w-full" />
                            <input name='photo' required type="text" placeholder="Photo URL" class="input input-bordered input-warning w-full" />
                            <input name='phone' required type="text" placeholder="Phone" class="input input-bordered input-warning w-full" />
                            <input className='btn btn-secondary' type="submit" value="Update Profile" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;