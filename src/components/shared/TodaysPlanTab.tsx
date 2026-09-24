// 'use client'
// import { GroupsContext } from '@/context/GroupsContext';

// import { IGroups } from '@/Types/groupsType';
// import React, { useContext } from 'react';
// import MyPlanCard from './MyPlanCard';
// import GroupNothingCard from './GroupNothingCard';

// const TodaysPlanTab = ({plan})=> {
//     const {exercise,setExercise}=useContext(GroupsContext)
//     return (
//         <div>
//             <input type="radio" name="my_tabs_1" className="tab text-gray-400 mb-4" aria-label={`Today's Plan (${plan.length})`} />
//             <div className="tab-content border-base-300 p-6 bg-black text-white">
//                 {
//                     plan.length > 0 ? plan.map((group: IGroups, ind: number) => {
//                         return <MyPlanCard key={ind} group={group}></MyPlanCard>
//                     }) : <GroupNothingCard></GroupNothingCard>
//                 }
//             </div>
//         </div>
//     );
// };

// export default TodaysPlanTab;