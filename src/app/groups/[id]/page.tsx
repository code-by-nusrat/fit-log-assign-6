
import { IGroups } from "@/Types/groupsType";
import Image from "next/image";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { AiFillSave } from "react-icons/ai";
import PlanBtn from "@/components/groupDetails/PlanBtn";
import SaveBtn from "@/components/groupDetails/SaveBtn";

const getGroups = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

interface IGroupDetailsProp {
    params: Promise<{
        id: string;
    }>;
}

const GroupDetailsPage = async ({ params }: IGroupDetailsProp) => {
    const { id } = await params;

    const groupsData = await getGroups();

    const group = groupsData.find(
        (group: IGroups) => String(group.id) === String(id)
    );

    return (
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">

            {/* Main Content */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">

                {/* Image */}
                <div className="w-full">
                    <div className="relative mx-auto aspect-588/735 w-full max-w-147 overflow-hidden rounded-2xl">
                        <Image
                            src={group.image}
                            alt={group.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="w-full">

                    {/* Title */}
                    <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.4rem]">
                        {group.name}
                    </h1>

                    {/* Description */}
                    <p className="text-sm leading-6 text-gray-400 sm:text-base">
                        {group.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                            {group.muscleGroups.map((muscle, index:number) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-[#C2F800] px-3 py-1 text-sm text-black sm:px-4 sm:text-base"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Workout Information */}
                    <div className="mt-6 border px-5 rounded-3xl bg-gray-900">

                        {/* Equipment */}
                        <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-50">
                            <p className="text-sm text-gray-400">
                                EQUIPMENT
                            </p>

                            <div className="flex flex-wrap gap-2 sm:justify-end">
                                {group.equipment
                                    .split(",")
                                    .map((equipment, index) => (
                                        <span
                                            key={index}
                                            className="text-sm text-gray-400"
                                        >
                                            {equipment.trim()}
                                        </span>
                                    ))}
                            </div>
                        </div>

                        {/* Difficulty */}
                        
                        <div className="flex items-center gap-52 py-4">
                            <p className="text-sm text-gray-400">
                                DIFFICULTY
                            </p>

                            <p className="text-sm text-gray-400">
                                {group.difficulty}
                            </p>
                        </div>

                        {/* Sets */}
                        <div className="flex items-center gap-64 py-4">
                            <p className="text-sm text-gray-400">
                                SETS
                            </p>

                            <p className="text-sm text-gray-400">
                                {group.sets}
                            </p>
                        </div>

                        {/* Reps */}
                        <div className="flex items-center gap-63  py-4">
                            <p className="text-sm text-gray-400">
                                REPS
                            </p>

                            <p className="text-sm text-gray-400">
                                {group.reps}
                            </p>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-55 py-4">
                            <p className="text-sm text-gray-400">
                                DURATION
                            </p>

                            <p className="text-sm text-gray-400">
                                {group.duration}
                            </p>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-56 py-4">
                            <p className="text-sm text-gray-400">
                                CALORIES
                            </p>

                            <p className="text-sm text-gray-400">
                                {group.caloriesBurned}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-58 py-4">
                            <p className="text-sm text-gray-400">
                                RATING
                            </p>

                            <p className="text-sm text-gray-400">
                                ⭐ {group.rating}
                            </p>
                        </div>
                    </div>
                    

                    {/* Instructions */}
                    <div className="mt-6">
                        <h2 className="mb-3 text-lg font-bold text-white">
                            INSTRUCTIONS
                        </h2>

                        <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-gray-400 sm:text-base">
                            {group.instructions.map(
                                (instruction, index) => (
                                    <li key={index}>
                                        {instruction}
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                        <PlanBtn group={group}></PlanBtn>

                        <SaveBtn group={group}></SaveBtn>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupDetailsPage;

