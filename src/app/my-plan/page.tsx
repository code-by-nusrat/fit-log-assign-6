
'use client'
import GroupCard from '@/components/shared/GroupCard';
import GroupNothingCard from '@/components/shared/GroupNothingCard';
import MyPlanCard from '@/components/shared/MyPlanCard';
import { GroupsContext } from '@/context/GroupsContext';
import { IGroups } from '@/Types/groupsType';
import React, { useContext } from 'react';

const PlanPage = () => {
    const {plan,save } = useContext(GroupsContext);
    return (
        <div className="container mx-auto w-full lg:w-380 px-4 sm:px-6 lg:px-2 mt-8">
            <div className="lg:ml-4 mx-auto">

                {/* Heading */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-sm sm:text-base text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats Card */}
                <div className="w-full border border-white/30 min-h-30.5 mt-8 sm:mt-9 rounded-2xl p-4 sm:p-5">

                    <div className="grid grid-cols-3 gap-3 sm:gap-6">

                        {/* Exercises */}
                        <div>
                            <p className="text-xs sm:text-sm text-gray-400">
                                Exercises
                            </p>

                            <p className="mt-1 font-bold text-2xl sm:text-[2.2rem] text-[#CCFF00]">
                                0
                            </p>
                        </div>

                        {/* Minutes */}
                        <div>
                            <p className="text-xs sm:text-sm text-gray-400">
                                Minutes
                            </p>

                            <p className="mt-1 font-bold text-2xl sm:text-[2.2rem] text-[#CCFF00]">
                                0
                            </p>
                        </div>

                        {/* Calories */}
                        <div>
                            <p className="text-xs sm:text-sm text-gray-400">
                                Calories
                            </p>

                            <p className="mt-1 font-bold text-2xl sm:text-[2.2rem] text-[#CCFF00]">
                                0
                            </p>
                        </div>

                    </div>
                </div>

                {/* tab-content */}
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box bg-black mt-15" >
                    <input type="radio" name="my_tabs_1" className="tab text-gray-400 mb-4" aria-label={`Today's Plan (${plan.length})`} />
                    <div className="tab-content border-base-300 p-6 bg-black text-white">
                        {
                            plan.length> 0 ? plan.map((group:IGroups,ind:number)=>{
                                return <MyPlanCard key={ind} group={group}></MyPlanCard>
                            }) :  <GroupNothingCard></GroupNothingCard>
                        }
                    </div>

                    <input type="radio" name="my_tabs_1" className="tab text-gray-400" aria-label={`Saved (${save.length})`} defaultChecked />
                    <div className="tab-content bg-black border-gray-900 p-6 text-white">
                        {
                            save.length> 0 ? save.map((group:IGroups,ind:number)=>{
                                return <MyPlanCard key={ind} group={group}></MyPlanCard>
                            }) :  <GroupNothingCard></GroupNothingCard>
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PlanPage;

