
import { IGroups } from '@/Types/groupsType';
import Image from 'next/image';
import React from 'react';
import { FaRegClock } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { IoIosStarOutline } from "react-icons/io";
import Link from 'next/link';
const GroupCard = ({ group }: { group: IGroups }) => {
    return (
        <div>
        <div className="w-87.5 bg-black rounded-2xl">
            <Link href={`/groups/${group.id}`}>
            <div className="w-87.5 overflow-hidden">

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
                <h2 className='oswald mt-5 pl-3 text-white font-bold text-[1.5rem]'>{group.name}</h2>
                {/* eqipment */}
                <div className="flex gap-2">
                    {group.equipment.split(",").map((equipment, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-gray-500 text-sm "
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
             </Link>       
        </div>
        </div>
    );
};

export default GroupCard;
