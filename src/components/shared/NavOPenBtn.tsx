// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useContext } from 'react';
// import logo from "@/assets/logo.png";
// import { GroupsContext } from '@/context/GroupsContext';
// const NavOPenBtn = () => {
//     const {open,setOpen}=useContext(GroupsContext)
//     return (
//         <div className="navbar-start">

//                     {/* FITLOG Button */}
//                     <button
                        
//                         className="flex items-center cursor-pointer"
//                     >
//                         {/* Logo */}
//                         <Image
//                             src={logo}
//                             width={28}
//                             height={28}
//                             alt="logo-pic"
//                         />

//                         {/* Brand */}
//                         <span className="text-lg sm:text-xl text-gray-300 ml-2 sm:ml-3 font-semibold">
//                             FITLOG
//                         </span>
//                     </button>

//                     {/* Mobile Menu */}
//                     {open && (
//                         <div className="absolute top-16 left-4 bg-black text-white rounded-lg w-44 p-2 shadow-lg border border-gray-800">
//                             <ul className="menu menu-sm">
//                                 <li>
//                                     <Link
//                                         href="/workouts"
//                                         //onClick={() => setOpen(false)}
//                                     >
//                                         Workouts
//                                     </Link>
//                                 </li>

//                                 <li>
//                                     <Link
//                                         href="/my-plan"
//                                         onClick={() => setOpen(false)}
//                                     >
//                                         My Plan
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//     );
// };

// export default NavOPenBtn;
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import { GroupsContext } from "@/context/GroupsContext";

const NavOPenBtn = () => {
    const { open, setOpen } = useContext(GroupsContext) as {
        open: boolean;
        setOpen: (value: boolean) => void;
    };

    return (
        <div className="navbar-start relative">

            {/* FITLOG Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center cursor-pointer"
            >
                <Image
                    src={logo}
                    width={28}
                    height={28}
                    alt="logo-pic"
                />

                <span className="oswald text-lg sm:text-xl text-gray-300 ml-2 sm:ml-3 font-semibold">
                    FITLOG
                </span>
            </button>

            {/* Menu */}
            {open && (
                <div className="absolute top-12 left-0 bg-black text-white rounded-lg w-44 p-2 shadow-lg border border-gray-800 z-50">
                    <ul className="menu menu-sm">

                        <li>
                            <Link href="/">
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link href="/my-plan">
                                My Plan
                            </Link>
                        </li>

                    </ul>
                </div>
            )}

        </div>
    );
};

export default NavOPenBtn;