
// import { IGroups } from "@/Types/groupsType";
// import Image from "next/image";
// import React from "react";
// import { FaRegClock } from "react-icons/fa";
// import { HiFire } from "react-icons/hi2";
// import { FaRegStar } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";
// import Link from "next/link";

// const MyPlanCard = ({ group }: { group: IGroups }) => {
//     return (
//         <div className="container mx-auto flex w-full flex-col justify-between rounded-2xl border border-gray-700 lg:flex-row lg:items-center mb-4">

//             {/* Part 1 */}
//             <div className="flex w-full gap-2 sm:gap-3">

//                 {/* Image */}
//                 <div className="shrink-0">
//                     <Image
//                         src={group.image}
//                         alt={group.name}
//                         width={144}
//                         height={80}
//                         className="m-2 mt-4 h-[65px] w-[90px] rounded-xl object-cover sm:m-4 sm:mt-6 sm:h-[80px] sm:w-[120px] lg:h-[80px] lg:w-[144px]"
//                     />
//                 </div>

//                 {/* Group Info */}
//                 <div className="min-w-0 py-4 sm:mt-2 sm:py-4 lg:mt-2 lg:py-4">

//                     <h2 className="truncate text-lg font-bold sm:text-xl lg:text-[1.5rem]">
//                         {group.name}
//                     </h2>

//                     {/* Equipment */}
//                     <div className="flex flex-wrap gap-x-3">
//                         {group.equipment.split(",").map((equipment, index) => (
//                             <span
//                                 key={index}
//                                 className="text-xs text-gray-500 sm:text-sm lg:text-[1.2rem]"
//                             >
//                                 {equipment.trim()}
//                             </span>
//                         ))}
//                     </div>

//                     {/* Stats */}
//                     <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-6 lg:gap-9">

//                         <div className="flex items-center gap-1 text-xs text-gray-400 sm:gap-2 sm:text-sm lg:text-base">
//                             <FaRegClock />
//                             <p>{group.duration}min</p>
//                         </div>

//                         <div className="flex items-center gap-1 text-xs text-gray-400 sm:gap-2 sm:text-sm lg:text-base">
//                             <HiFire />
//                             <p>{group.caloriesBurned}cal</p>
//                         </div>

//                         <div className="flex items-center gap-1 text-xs text-gray-400 sm:gap-2 sm:text-sm lg:text-base">
//                             <FaRegStar />
//                             <p>{group.rating}</p>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             {/* Part 2 */}
//             <div className="flex w-full gap-2 p-3 sm:p-4 lg:w-auto lg:mr-17 lg:p-0">
//                 <Link href='{`/groups/${group.id}`}'>
//                 <button className="btn btn-active flex-1 rounded-3xl bg-black text-xs text-white sm:text-sm lg:flex-none">
//                     View Details
//                 </button></Link>
                
//                 <button className="btn flex-1 rounded-3xl bg-[#CCFF00] text-xs sm:text-sm lg:flex-none">
//                     <FaCheck />
//                     Mark as Done
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default MyPlanCard;

import { IGroups } from "@/Types/groupsType";
import Image from "next/image";
import React from "react";
import { FaRegClock, FaCheck } from "react-icons/fa";
import { HiFire } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

const MyPlanCard = ({ group }: { group: IGroups }) => {
    return (
        <div className="mx-auto mb-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-700 lg:flex-row lg:items-center lg:justify-between">

            {/* Part 1 - Image + Info */}
            <div className="flex min-w-0 w-full gap-2 sm:gap-3">

                {/* Image */}
                <div className="shrink-0">
                    <Image
                        src={group.image}
                        alt={group.name}
                        width={144}
                        height={80}
                        className="m-3 h-[65px] w-[90px] rounded-xl object-cover sm:m-4 sm:h-[80px] sm:w-[120px] lg:h-[80px] lg:w-[144px]"
                    />
                </div>

                {/* Group Info */}
                <div className="min-w-0 flex-1 py-3 pr-2 sm:py-4 lg:py-4">

                    {/* Name */}
                    <h2 className="truncate text-base font-bold sm:text-xl lg:text-2xl">
                        {group.name}
                    </h2>

                    {/* Equipment */}
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                        {group.equipment.split(",").map((equipment, index) => (
                            <span
                                key={index}
                                className="text-xs text-gray-500 sm:text-sm lg:text-base"
                            >
                                {equipment.trim()}
                            </span>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-6 lg:gap-8">

                        <div className="flex items-center gap-1 text-xs text-gray-400 sm:text-sm lg:text-base">
                            <FaRegClock />
                            <p>{group.duration}min</p>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-gray-400 sm:text-sm lg:text-base">
                            <HiFire />
                            <p>{group.caloriesBurned}cal</p>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-gray-400 sm:text-sm lg:text-base">
                            <FaRegStar />
                            <p>{group.rating}</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Part 2 - Buttons */}
            <div className="flex w-full gap-2 p-3 sm:p-4 lg:w-auto lg:shrink-0 lg:p-4">

                {/* View Details */}
                <Link
                    href={`/groups/${group.id}`}
                    className="btn h-10 flex-1 rounded-3xl bg-black px-4 text-xs text-white sm:h-11 sm:text-sm lg:w-40 lg:flex-none"
                >
                    View Details
                </Link>

                {/* Mark as Done */}
                <button
                    className="btn h-10 flex-1 rounded-3xl bg-[#CCFF00] px-4 text-xs text-black sm:h-11 sm:text-sm lg:w-40 lg:flex-none"
                >
                    <FaCheck />
                    Mark as Done
                </button>

            </div>
        </div>
    );
};

export default MyPlanCard;