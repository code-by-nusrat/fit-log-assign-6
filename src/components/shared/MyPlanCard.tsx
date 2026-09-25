
import { IGroups } from "@/Types/groupsType";
import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { HiFire } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import CrossBtn from "./CrossBtn";
import MarkBtn from "./MarkBtn";

const MyPlanCard = ({ group,type }: { group: IGroups,type: "plan" | "save"; }) => {
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
                        className="m-3 h-16.25 w-22.5 rounded-xl object-cover sm:m-4 sm:h-20 sm:w-30 lg:h-20 lg:w-36"
                    />
                </div>

                {/* Group Info */}
                <div className="min-w-0 flex-1 py-3 pr-2 sm:py-4 lg:py-4">

                    {/* Name */}
                    <h2 className="oswald truncate text-base font-bold sm:text-xl lg:text-2xl">
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
            <div className="flex w-full gap-2 p-3 sm:p-4 lg:w-auto lg:shrink-0 lg:p-4 items-center">

                {/* View Details */}
                <Link
                    href={`/groups/${group.id}`}
                    className="btn h-10 flex-1 rounded-3xl bg-black px-4 text-xs text-white sm:h-11 sm:text-sm lg:w-40 lg:flex-none"
                >
                    View Details
                </Link>

                {/* Mark as Done */}
                <MarkBtn group={group}></MarkBtn>
                {/* cross btn */}
                <CrossBtn id={group.id} type={type}></CrossBtn>
            </div>



        </div>
    );
};

export default MyPlanCard;