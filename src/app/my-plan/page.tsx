
// 'use client'
// import ExerciseBtn from '@/components/shared/ExerciseBtn';
// import GroupCard from '@/components/shared/GroupCard';
// import GroupNothingCard from '@/components/shared/GroupNothingCard';
// import MyPlanCard from '@/components/shared/MyPlanCard';
// import TodaysPlanTab from '@/components/shared/TodaysPlanTab';
// import { GroupsContext } from '@/context/GroupsContext';
// import { IGroups } from '@/Types/groupsType';
// import React, { useContext } from 'react';

// const PlanPage = () => {
//     const { plan, save } = useContext(GroupsContext);
//     return (
//         <div className="container mx-auto w-full lg:w-380 px-4 sm:px-6 lg:px-2 mt-8">
//             <div className="lg:ml-4 mx-auto">

//                 {/* Heading */}
//                 <div>
//                     <h1 className="text-2xl sm:text-3xl font-bold text-white">
//                         MY PLAN
//                     </h1>

//                     <p className="mt-1 text-sm sm:text-base text-gray-400">
//                         Cap of five lifts for today. Finish them, then load more.
//                     </p>
//                 </div>

//                 {/* Stats Card */}
//                 <div className="w-full border border-white/30 min-h-30.5 mt-8 sm:mt-9 rounded-2xl p-4 sm:p-5">

//                     <div className="grid grid-cols-3 gap-3 sm:gap-6">

//                         {/* Exercises */}
//                         <div>
//                             <p className="text-xs sm:text-sm text-gray-400">
//                                 Exercises
//                             </p>

//                             <p className="mt-1 font-bold text-2xl sm:text-[2.2rem] text-[#CCFF00]">
//                                 0
//                             </p>
//                         </div>

//                         {/* Minutes */}
//                         <div>
//                             <p className="text-xs sm:text-sm text-gray-400">
//                                 Minutes
//                             </p>

//                             <p className="mt-1 font-bold text-2xl sm:text-[2.2rem] text-[#CCFF00]">
//                                 0
//                             </p>
//                         </div>

//                         {/* Calories */}
//                         <div>
//                             <p className="text-xs sm:text-sm text-gray-400">
//                                 Calories
//                             </p>

//                             <p className="mt-1 font-bold text-2xl sm:text-[2.2rem] text-[#CCFF00]">
//                                 0
//                             </p>
//                         </div>

//                     </div>
//                 </div>

//                 {/* tab-content */}
//                 {/* name of each tab group should be unique */}
//                 <div className="tabs tabs-box bg-black mt-15" >
//                     {/* <TodaysPlanTab plan={plan}></TodaysPlanTab> */}
//                     <input type="radio" name="my_tabs_1" className="tab text-gray-400 mb-4" aria-label={`Today's Plan (${plan.length})`} />
//                     <div className="tab-content border-base-300 p-6 bg-black text-white">
//                         {
//                             plan.length > 0 ? plan.map((group: IGroups, ind: number) => {
//                                 return <MyPlanCard key={ind} group={group}></MyPlanCard>
//                             }) : <GroupNothingCard></GroupNothingCard>
//                         }
//                     </div>
//                     <input type="radio" name="my_tabs_1" className="tab text-gray-400" aria-label={`Saved (${save.length})`} defaultChecked />
//                     <div className="tab-content bg-black border-gray-900 p-6 text-white">
//                         {
//                             save.length > 0 ? save.map((group: IGroups, ind: number) => {
//                                 return <MyPlanCard key={ind} group={group}></MyPlanCard>
//                             }) : <GroupNothingCard></GroupNothingCard>
//                         }
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default PlanPage;

// "use client";

// import GroupNothingCard from "@/components/shared/GroupNothingCard";
// import MyPlanCard from "@/components/shared/MyPlanCard";
// import { GroupsContext } from "@/context/GroupsContext";
// import { IGroups } from "@/Types/groupsType";
// import React, { useContext, useState } from "react";

// const PlanPage = () => {
//     const { plan, save } = useContext(
//         GroupsContext as unknown as React.Context<{
//             plan: IGroups[];
//             save: IGroups[];
//         }>
//     );

//     // Which tab is currently selected?
//     const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");

//     // Get the data of the currently selected tab
//     const activeItems: IGroups[] =
//         activeTab === "plan" ? plan : save;

//     // Exercises
//     const exerciseCount = activeItems.length;

//     // Total minutes
//     const totalMinutes = activeItems.reduce(
//         (total, group) => total + Number(group.duration),
//         0
//     );

//     // Total calories
//     const totalCalories = activeItems.reduce(
//         (total, group) => total + Number(group.caloriesBurned),
//         0
//     );

//     return (
//         <div className="container mx-auto mt-8 w-full px-4 sm:px-6 lg:w-380 lg:px-2">

//             <div className="mx-auto lg:ml-4">

//                 {/* Heading */}
//                 <div>
//                     <h1 className="text-2xl font-bold text-white sm:text-3xl">
//                         MY PLAN
//                     </h1>

//                     <p className="mt-1 text-sm text-gray-400 sm:text-base">
//                         Cap of five lifts for today. Finish them, then load more.
//                     </p>
//                 </div>


//                 {/* ================= Stats Card ================= */}
//                 <div className="mt-8 min-h-30.5 w-full rounded-2xl border border-white/30 p-4 sm:mt-9 sm:p-5">

//                     <div className="grid grid-cols-3 gap-3 sm:gap-6">

//                         {/* Exercises */}
//                         <div>
//                             <p className="text-xs text-gray-400 sm:text-sm">
//                                 Exercises
//                             </p>

//                             <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
//                                 {exerciseCount}
//                             </p>
//                         </div>


//                         {/* Minutes */}
//                         <div>
//                             <p className="text-xs text-gray-400 sm:text-sm">
//                                 Minutes
//                             </p>

//                             <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
//                                 {totalMinutes}
//                             </p>
//                         </div>


//                         {/* Calories */}
//                         <div>
//                             <p className="text-xs text-gray-400 sm:text-sm">
//                                 Calories
//                             </p>

//                             <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
//                                 {totalCalories}
//                             </p>
//                         </div>

//                     </div>
//                 </div>


//                 {/* ================= Tabs ================= */}
//                 <div className="tabs tabs-box mt-15 bg-black">

//                     {/* Today's Plan */}
//                     <input
//                         type="radio"
//                         name="my_tabs_1"
//                         className="tab mb-4 text-gray-400"
//                         aria-label={`Today's Plan (${plan.length})`}
//                         defaultChecked
//                         onChange={() => setActiveTab("plan")}
//                     />

//                     <div className="tab-content border-gray-900 bg-black p-6 text-white">

//                         {plan.length > 0 ? (
//                             plan.map((group: IGroups) => (
//                                 <MyPlanCard
//                                     key={group.id}
//                                     group={group}
//                                 />
//                             ))
//                         ) : (
//                             <GroupNothingCard />
//                         )}

//                     </div>


//                     {/* Saved */}
//                     <input
//                         type="radio"
//                         name="my_tabs_1"
//                         className="tab text-gray-400"
//                         aria-label={`Saved (${save.length})`}
//                         onChange={() => setActiveTab("save")}
//                     />

//                     <div className="tab-content border-gray-900 bg-black p-6 text-white">

//                         {save.length > 0 ? (
//                             save.map((group: IGroups) => (
//                                 <MyPlanCard
//                                     key={group.id}
//                                     group={group}
//                                 />
//                             ))
//                         ) : (
//                             <GroupNothingCard />
//                         )}

//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default PlanPage;



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

    // Track selected tab
    const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");

    // Current tab data
    const activeItems: IGroups[] =
        activeTab === "plan" ? plan : save;

    // Number of exercises
    const exerciseCount = activeItems.length;

    // Total minutes
    const totalMinutes = activeItems.reduce(
        (total, group) => total + Number(group.duration),
        0
    );

    // Total calories
    const totalCalories = activeItems.reduce(
        (total, group) =>
            total + Number(group.caloriesBurned),
        0
    );
    

    return (
        <div className="container mx-auto mt-8 w-full px-4 sm:px-6 lg:w-380 lg:px-2">

            <div className="mx-auto lg:ml-4">

                {/* ================= Heading ================= */}
                <div>
                    <h1 className="text-2xl font-bold text-white sm:text-3xl">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-sm text-gray-400 sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>


                {/* ================= Stats Card ================= */}
                <div className="mt-8 min-h-30.5 w-full rounded-2xl border border-white/30 p-4 sm:mt-9 sm:p-5">

                    <div className="grid grid-cols-3 gap-3 sm:gap-6">

                        {/* Exercises */}
                        <div>
                            <p className="text-xs text-gray-400 sm:text-sm">
                                Exercises
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
                                {exerciseCount}
                            </p>
                        </div>


                        {/* Minutes */}
                        <div>
                            <p className="text-xs text-gray-400 sm:text-sm">
                                Minutes
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#CCFF00] sm:text-[2.2rem]">
                                {totalMinutes}
                            </p>
                        </div>


                        {/* Calories */}
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


                {/* ================= Tabs ================= */}
                <div className="tabs tabs-box mt-15 bg-black">

                    {/* ================= Today's Plan ================= */}
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab mb-4 text-gray-400"
                        aria-label={`Today's Plan (${plan.length})`}
                        defaultChecked
                        onChange={() => setActiveTab("plan")}
                    />

                    <div className="tab-content border-gray-900 bg-black p-6 text-white">

                        {plan.length > 0 ? (
                            plan.map((group: IGroups) => (
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


                    {/* ================= Saved ================= */}
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab text-gray-400"
                        aria-label={`Saved (${save.length})`}
                        onChange={() => setActiveTab("save")}
                    />

                    <div className="tab-content border-gray-900 bg-black p-6 text-white">

                        {save.length > 0 ? (
                            save.map((group: IGroups) => (
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

                </div>

            </div>
        </div>
    );
};

export default PlanPage;