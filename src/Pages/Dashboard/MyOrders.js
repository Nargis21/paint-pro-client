import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrdersRow from './OrdersRow';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import CancelOrderModal from './CancelOrderModal';

const MyOrders = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/home')
            }
            return res.json()
        }))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-12 '>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                                refetch={refetch}
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <CancelOrderModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></CancelOrderModal>
            }
        </div>
    );
};

export default MyOrders;