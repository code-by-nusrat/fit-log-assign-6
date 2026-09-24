
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-black sticky top-0 z-50">
            <div className="navbar container mx-auto w-full px-4 sm:px-6 lg:px-8 shadow-sm">

                {/* Navbar Start */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-10 mt-3 w-44 p-2 shadow"
                        >
                            <li>
                                <a>Workouts</a>
                            </li>
                            <li>
                                
                                <a>My Plan</a>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Image
                        src={logo}
                        width={28}
                        height={28}
                        alt="logo-pic"
                    />

                    {/* Brand */}
                    <a className="text-lg sm:text-xl text-gray-300 ml-2 sm:ml-3 font-semibold">
                        FITLOG
                    </a>
                </div>

                {/* Desktop / Large Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-white">
                            <a>Workouts</a>
                        </li>

                        <li className="text-white">
                            <Link href='/my-plan'>My Plan</Link>
                        </li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-2 sm:gap-4">

                    <p className="text-white text-sm sm:text-base">
                        Plan
                        <span className="ml-1 sm:ml-3 bg-[#ccff00] px-2 py-0.5 rounded-3xl text-black">
                            0
                        </span>
                    </p>

                    <p className="text-white text-sm sm:text-base">
                        Saved
                        <span className="ml-1 sm:ml-3 px-2 py-0.5 rounded-3xl border border-[#ccff00]">
                            0
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Navbar;