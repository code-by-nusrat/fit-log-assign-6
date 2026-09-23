// import { IGroups } from '@/Types/groupsType';
// import Image from 'next/image';
// import React from 'react';
// import { FaRegClock } from "react-icons/fa6";
// import { AiFillFire } from "react-icons/ai";
// import { IoIosStarOutline } from "react-icons/io";

// const GroupCard = ({ group }: { group: IGroups }) => {
//     return (
//         <div className='bg-black'>
//             <div className="card bg-black w-100 mx-auto shadow-sm">
//                 <figure>
//                     <Image
//                         src={group.image}
//                         alt={group.name}
//                         width={396}
//                         height={192} />
//                 </figure>
//                 <div className="card-body">
//                     <div className='card-title gap-2'>
//                         <button className=" px-4  rounded-3xl bg-[#C2F800] text-[1rem]">{group.muscleGroups[0]}</button>
//                         <button className="px-4  rounded-3xl bg-[#C2F800]  text-[1rem]">{group.muscleGroups[1]}</button>
//                     </div>
//                     {/* <h2 className="card-title">
//                         {group.muscleGroups[0]}
//                         <div className="">{group.muscleGroups[1]}</div>
//                     </h2> */}
//                     <h1 className='text-[1.2rem] font-bold mt-1 text-white'>{group.name}</h1>

//                     <div className="card-actions gap-5 mt-5">
//                         <div className='flex items-center gap-2'>
//                             <p className='text-[#9CA3AF]'><FaRegClock /></p>
//                             <p className='text-[#9CA3AF]'>{group.duration} min</p>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                             <p className='text-[#9CA3AF]'><AiFillFire />
//                             </p>
//                             <p className='text-[#9CA3AF]'> {group.caloriesBurned} kcal</p>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                             <p className='text-[#9CA3AF]'><IoIosStarOutline /></p>
//                             <p className='text-[#9CA3AF]'>{group.rating}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GroupCard;

import { IGroups } from '@/Types/groupsType';
import Image from 'next/image';
import React from 'react';
import { FaRegClock } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { IoIosStarOutline } from "react-icons/io";
const GroupCard = ({ group }: { group: IGroups }) => {
    return (
        <div className="w-[350px] border bg-black rounded-2xl">
            <div className="w-[350px] overflow-hidden">

                {/* Image */}
                <Image
                    src={group.image}
                    alt={group.name}
                    width={350}
                    height={100}
                    className='rounded-t-2xl'
                />

                {/* Card Content */}
                <div className="mt-5 pl-3">

                    {/* Muscle Groups */}
                    <div className="flex gap-2">
                        {group.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="px-3 sm:px-4 py-1 rounded-full bg-[#C2F800] text-sm sm:text-base text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                </div>
                {/* name */}
                <h2 className='mt-5 pl-3 text-white font-bold text-[1.5rem]'>{group.name}</h2>
                {/* eqipment */}
                <div className="flex gap-2">
                    {group.equipment.split(",").map((equipment, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-gray-500 text-sm text-black"
                        >
                            {equipment.trim()}
                        </span>
                    ))}
                </div>
                {/* footer */}
                <div className="card-actions gap-5 mt-5 mb-5">
                    <div className='flex items-center gap-2 ml-4'>
                        <p className='text-[#9CA3AF]'><FaRegClock /></p>
                        <p className='text-[#9CA3AF]'>{group.duration} min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#9CA3AF]'><AiFillFire />
                        </p>
                        <p className='text-[#9CA3AF]'> {group.caloriesBurned} kcal</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#9CA3AF]'><IoIosStarOutline /></p>
                        <p className='text-[#9CA3AF]'>{group.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;
