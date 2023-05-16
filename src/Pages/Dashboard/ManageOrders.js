import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import CancelOrderModal from './CancelOrderModal';
import ManageOrdersRow from './ManageOrdersRow';

const ManageOrders = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const navigate = useNavigate()

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
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
        <div>
            <h1 className='text-3xl font-serif text-center p-4'>Manage Orders</h1>

            <div className='lg:px-12 '>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Tool</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageOrdersRow
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    setDeleteConfirm={setDeleteConfirm}
                                    refetch={refetch}
                                ></ManageOrdersRow>)
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
        </div>
    );
};

export default ManageOrders;