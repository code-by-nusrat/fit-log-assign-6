
"use client";

import GroupNothingCard from "@/components/shared/GroupNothingCard";
import MyPlanCard from "@/components/shared/MyPlanCard";
import { GroupsContext } from "@/context/GroupsContext";
import { IGroups } from "@/Types/groupsType";
import React, { useContext, useState } from "react";

const PlanPage = () => {
    const { plan, save } = useContext(
        GroupsContext as unknown as React.Context<{
            plan: IGroups[];
            save: IGroups[];
        }>
    );
    const [shortBy,setShortBy]= useState <"duration" | "calories" | "rating">("duration")
    
    const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");
    console.log(shortBy,'shortby')
    const activeItems: IGroups[] =
        activeTab === "plan" ? plan : save;

    const exerciseCount = activeItems.length;

    const totalMinutes = activeItems.reduce(
        (total, group) => total + Number(group.duration),
        0
    );
    const totalCalories = activeItems.reduce(
        (total, group) => total + Number(group.caloriesBurned),
        0
    );
    const shortPlans=(groups:IGroups[])=>{
     const sortedExercise=[...groups];
     if(shortBy ==='duration'){
      sortedExercise.sort((a,b)=>a.duration - b.duration)
     }else if (shortBy === "calories"){
      sortedExercise.sort((a,b)=>a.caloriesBurned - b.caloriesBurned)
     }else if(shortBy === "rating"){
        sortedExercise.sort((a,b)=>a.rating - b.rating)
     }
     return sortedExercise;
    }
    const shortedAddToPlan=shortPlans(plan)
    const shortedAddToSave=shortPlans(save)

    return (
        <div className="container mx-auto mt-8 w-full px-4 sm:px-6 lg:w-380 lg:px-2">
            <div className="mx-auto lg:ml-4">

                {/* Heading */}
                <div>
                    <h1 className="text-2xl font-bold text-white sm:text-3xl">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-sm text-gray-400 sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats Card */}
                <div className="mt-8 min-h-30.5 w-full rounded-2xl border bg-gray-900 border-white/30 p-4 sm:mt-9 sm:p-5">
                    <div className="grid grid-cols-3 gap-3 sm:gap-6">

                        <div>
                            <p className="text-xs text-gray-400 sm:text-sm">
                                Exercises
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
                                {exerciseCount}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400 sm:text-sm">
                                Minutes
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
                                {totalMinutes}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400 sm:text-sm">
                                Calories
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
                                {totalCalories}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-15">

                    {/* Tab Buttons + Sort By */}
                    <div className="flex items-center justify-between">

                        {/* Tab Buttons */}
                        <div className="tabs tabs-box bg-black">

                            <input
                                type="radio"
                                name="my_tabs_1"
                                className="tab text-gray-400"
                                aria-label={`Today's Plan (${plan.length})`}
                                defaultChecked
                                onChange={() => setActiveTab("plan")}
                            />

                            <input
                                type="radio"
                                name="my_tabs_1"
                                className="tab text-gray-400"
                                aria-label={`Saved (${save.length})`}
                                onChange={() => setActiveTab("save")}
                            />

                        </div>

                        {/* Sort By */}
                        <div className="flex items-center gap-5 mr-3">
                            <h2 className="whitespace-nowrap text-gray-400">
                                Short By
                            </h2>

                            <select value={shortBy} onChange={(e)=>setShortBy(e.target.value as "duration" | "calories" | "rating")}
                                //defaultValue="Pick a Runtime"
                                className="select select-success"
                            >
                                {/* <option disabled value="Duration">
                                    Duration
                                </option> */}

                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                                
                            </select>
                           
                        </div>

                    </div>

                    {/* Today's Plan Content */}
                    {activeTab === "plan" && (
                        <div className="border-gray-900 bg-black p-6 text-white">

                            {shortedAddToPlan.length > 0 ? (
                                shortedAddToPlan.map((group: IGroups) => (
                                    <MyPlanCard
                                        key={group.id}
                                        group={group}
                                        type="plan"
                                    />
                                ))
                            ) : (
                                <GroupNothingCard />
                            )}

                        </div>
                    )}

                    {/* Saved Content */}
                    {activeTab === "save" && (
                        <div className="border-gray-900 bg-black p-6 text-white">

                            {shortedAddToSave.length > 0 ? (
                                shortedAddToSave.map((group: IGroups) => (
                                    <MyPlanCard
                                        key={group.id}
                                        group={group}
                                        type="save"
                                    />
                                ))
                            ) : (
                                <GroupNothingCard />
                            )}

                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default PlanPage;
