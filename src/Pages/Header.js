import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/logo/w-logo.jpg'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/ProviderContext';
import userImage from '../Assets/user/user.png'


const Header = () => {

    //use context 
    const { user, logOut } = useContext(AuthContext);

    //logout button 
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('log out successful')
            })
            .then(error => console.error(error));
    };

    return (
        <div className='mx-10 lg:text-white bg-gray-600 text-lg'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className='mb-3' to='/' >Home</NavLink>
                            <NavLink className='mb-3' to='/about' >About</NavLink>
                            <NavLink className='mb-3' to='/service' >Service</NavLink>
                            <NavLink className='mb-3' to='/addservice' >Add Service</NavLink>
                            <NavLink className='mb-3' to='/myreview' >My Review</NavLink>
                            <NavLink className='mb-3' to='/blog' >Blog</NavLink>
                        </ul>
                    </div>
                    <img className='w-14 rounded-full lg:mr-0 mr-14' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    {
                        user?.uid || user?.email || user?.photoURL ?
                            <>
                                <ul className="menu menu-horizontal p-0">
                                    <NavLink className='mr-7 hover:text-red-500' to='/' >Home</NavLink>
                                    <NavLink className='mr-7 hover:text-red-500' to='/about' >About</NavLink>
                                    <NavLink className='mr-7 hover:text-red-500' to='/service' >Service</NavLink>
                                    <NavLink className='mr-7' to='/addservice' >Add Service</NavLink>
                                    <NavLink className='mr-7' to='/myreview' >My Review</NavLink>
                                    <NavLink className='mr-7 hover:text-red-500' to='/blog' >Blog</NavLink>
                                </ul>
                            </>
                            :
                            <>
                                <ul className="menu menu-horizontal p-0">
                                    <NavLink className='mr-7 hover:text-red-500' to='/' >Home</NavLink>
                                    <NavLink className='mr-7 hover:text-red-500' to='/about' >About</NavLink>
                                    <NavLink className='mr-7 hover:text-red-500' to='/service' >Service</NavLink>
                                    <NavLink className='mr-7 hover:text-red-500' to='/blog' >Blog</NavLink>
                                </ul>
                            </>

                    }
                </div>


                {
                    user?.uid || user?.email || user?.photoURL ?
                        <>
                            <div>
                                <img data-tip={user.displayName} className="lg:block hidden" style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={user.photoURL ? user.photoURL : userImage} alt="" />
                                <p className='text-white text-xs md:text-md' >{user.displayName}</p>
                            </div>
                            <div>
                                <Link to='/login' className='ml-5'>
                                    <button onClick={handleSignOut} className="bg-red-500 text-white px-8 py-2 rounded-md">Signout</button>
                                </Link>
                            </div>
                        </>

                        :

                        <>

                            <Link to='/login' className="navbar-end">
                                <button className="bg-red-500 text-white px-8 py-2 rounded-md">Login</button>
                            </Link>

                        </>
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Header;