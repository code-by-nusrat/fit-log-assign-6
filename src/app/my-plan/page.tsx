// 'use client'
// import SaveBtn from '@/components/groupDetails/SaveBtn';
// import { GroupsContext } from '@/context/GroupsContext';
// import React, {useContext } from 'react';

// const PlanPage = () => {
//     const{planBtn,saveBtn}=useContext(GroupsContext)
//     console.log(planBtn,SaveBtn)
//     return (
//         <div className='container mx-auto'>
//           <div className='container mx-auto'>
//                 <h1 className='text-[1.9rem] text-white text-bold'>MY PLAN</h1>
//                 <p className='text-gray-400 '>Cap of five lifts for today. Finish them, then load more.</p>
//                  <div className='w-295 border border-white h-30.5 items-center  mt-9 rounded-2xl'>
//                   <div className='flex justify-between pt-2 mx-3 mt-3'>
//                     <div>
//                         <p className='text-gray-400'>Exercises</p>
//                         <p className='font-bold text-[2.2rem] text-[#CCFF00]'>0</p>
//                     </div>
//                     <div>
//                         <p className='text-gray-400'>Minutes</p>
//                         <p className='font-bold text-[2.2rem] text-[#CCFF00]'>0</p>
//                     </div>
//                     <div>
//                         <p className='text-gray-400'>Calories</p>
//                         <p className='font-bold text-[2.2rem] text-[#CCFF00]'>0</p>
//                     </div>
//                  </div>
//                 </div>

//           </div>
//         </div>
//     );
// };

// export default PlanPage;


'use client'

import { GroupsContext } from '@/context/GroupsContext';
import React, { useContext } from 'react';

const PlanPage = () => {
    const { planBtn, saveBtn } = useContext(GroupsContext);

    console.log(planBtn, saveBtn);

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
                    <input type="radio" name="my_tabs_1" className="tab text-gray-400 mb-4" aria-label="Today's Plan" />
                    <div className="tab-content border-base-300 p-6 bg-black text-white">Tab content 1</div>

                    <input type="radio" name="my_tabs_1" className="tab text-gray-400" aria-label="Saved" defaultChecked />
                    <div className="tab-content bg-black border-gray-900 p-6 text-white">Tab content 2</div>

                </div>

            </div>
        </div>
    );
};

export default PlanPage;

