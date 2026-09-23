import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
const Navbar = () => {
    return (
        <div className='bg-black'>
            < div className="w-[1280px] navbar  shadow-sm container mx-auto" >
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Workouts</a></li>
                            
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> */}
                    <Image src={logo} width={28} height={28} alt='logo-pic'></Image>
                    <a className="btn-ghost text-xl text-gray-300 ml-3 font-semibold">FITLOG</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white'><a>Workouts</a></li>   
                        <li className='text-white'><a>My Plan</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                     <p className='text-white px-6'>Plan <span className='ml-3 bg-[#ccff00] px-2 py-0.5 rounded-3xl text-black'>0</span></p>
                    <p className='text-white px-6'>Saved <span className='ml-3 px-2 py-0.5 rounded-3xl border border-[#ccff00]'>0</span></p>
                </div>
            </div >
        </div >
    );
};

export default Navbar;