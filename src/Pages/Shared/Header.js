import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'


const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }

    const menuItems = <>
        <li> <Link to='/home'>Home</Link></li>
        <li> <Link to='/dashboard'>Dashboard</Link></li>
        {/* <li> <Link to='/blogs'>Blogs</Link></li> */}
        {/* <li> <Link to='/portfolio'>My Portfolio</Link></li> */}
        <li>
            {
                user && <p className='text-secondary font-bold font-mono text-xl'>{user.displayName}</p>
            }
        </li>
        <li>{user ?
            <button onClick={handleSignout} className="btn btn-primary">Sign Out</button>
            :
            <Link to='/login'>Login</Link>}</li>

    </>
    return (
        <div class="navbar bg-zinc-900">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <img className='lg:pl-12' src={logo} alt="" />

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 pl-96 text-white">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end text-white">
                <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;