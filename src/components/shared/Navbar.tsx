
// import Image from "next/image";
// import React from "react";
// import logo from "@/assets/logo.png";
// import Link from "next/link";
// import WorkOutBtn from "./WorkOutBtn";
// import MyPlanBtn from "./MyPlanBtn";
// import SetPlanBtn from "./SetPlanBtn";
// import SetSaveBtn from "./SetSaveBtn";

// const Navbar = () => {
//     return (
//         <div className="bg-black sticky top-0 z-50">
//             <div className="navbar container mx-auto w-full px-4 sm:px-6 lg:px-8 shadow-sm">

//                 {/* Navbar Start */}
//                 <div className="navbar-start">

//                     {/* Mobile Menu */}
//                     <div className="dropdown lg:hidden">
//                         <ul
//                             tabIndex={-1}
//                             className="menu menu-sm dropdown-content bg-black text-white rounded-box z-10 mt-3 w-44 p-2 shadow"
//                         >
//                             <li>
//                                 <a>Workouts</a>
//                             </li>
//                             <li>
                                
//                                 <a>My Plan</a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Logo */}
//                     <Image
//                         src={logo}
//                         width={28}
//                         height={28}
//                         alt="logo-pic"
//                     />

//                     {/* Brand */}
//                     <a className="text-lg sm:text-xl text-gray-300 ml-2 sm:ml-3 font-semibold">
//                         FITLOG
//                     </a>
//                 </div>

//                 {/* Desktop / Large Navigation */}
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <WorkOutBtn></WorkOutBtn>

//                         <MyPlanBtn></MyPlanBtn>
//                     </ul>
//                 </div>

//                 {/* Navbar End */}
//                 <div className="navbar-end gap-2 sm:gap-4 ">
//                     <Link href='/my-plan'>
//                     <p className="text-white text-sm sm:text-base px-3 py-1 rounded-3xl bg-gray-900">
//                         Plan
//                         <SetPlanBtn></SetPlanBtn>
//                     </p></Link>

//                    <Link href='/my-plan'>
//                     <p className="text-white text-sm sm:text-base px-3 py-1 rounded-3xl bg-gray-900">
//                         Saved
//                         <SetSaveBtn></SetSaveBtn>
//                     </p>
//                 </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;




import Link from "next/link";
import WorkOutBtn from "./WorkOutBtn";
import MyPlanBtn from "./MyPlanBtn";
import SetPlanBtn from "./SetPlanBtn";
import SetSaveBtn from "./SetSaveBtn";
import NavOPenBtn from "./NavOPenBtn";

const Navbar = () => {
    return (
        <div className="bg-black sticky top-0 z-50">
            <div className="navbar container mx-auto w-full px-4 sm:px-6 lg:px-8 shadow-sm">

                {/* Navbar Start / FITLOG */}
                <NavOPenBtn />

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <WorkOutBtn />
                        <MyPlanBtn />
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-7 sm:gap-4">

                    <Link href="/my-plan ">
                        <p className="text-white text-sm sm:text-base px-3 py-1 rounded-3xl whitespace-nowrap bg-gray-900">
                            Plan
                            <SetPlanBtn />
                        </p>
                    </Link>

                    <Link href="/my-plan">
                        <p className="text-white text-sm sm:text-base px-3 py-1 rounded-3xl bg-gray-900 ">
                            Saved
                            <SetSaveBtn />
                        </p>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Navbar;