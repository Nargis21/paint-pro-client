import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-5xl text-accent font-bold text-center pt-3'>Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu font-bold p-4 overflow-y-auto w-64 bg-orange-300 text-base-content">

                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {
                        !admin && <>
                            <li><Link to='/dashboard/review'>Add a Review</Link></li>
                            <li><Link to='/dashboard/order'>My Orders</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;