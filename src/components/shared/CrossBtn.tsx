// import { GroupsContext } from '@/context/GroupsContext';
// import React, { useContext } from 'react';
// import { RxCross2 } from "react-icons/rx";
// const CrossBtn = () => {
//     const { removeFromPlan,removeFromSave,setPlan} =useContext(GroupsContext)
//     const removeFromPlans = (id: number) => {
//     console.log("REMOVE PLAN ID:", id);

//     setPlan((prev) => {
//         console.log("BEFORE:", prev);

//         const newPlan = prev.filter(
//             (item) => item.id !== id
//         );

//         console.log("AFTER:", newPlan);

//         return newPlan;
//     });
// };
//     return (
//         <button onClick={()=> removeFromPlans()}><RxCross2 />
//                 </button>
//     );
// };

// export default CrossBtn;



"use client";

import { GroupsContext } from "@/context/GroupsContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";

const CrossBtn = ({ id }: { id: number }) => {
    const { removeFromPlan,removeFromSave } = useContext(GroupsContext);

    const handleRemove = () => {
        console.log("Removing ID:", id);

        removeFromPlan(id);
        removeFromSave(id)
    };

    return (
        <button
            type="button"
            onClick={handleRemove}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-red-500/10 hover:text-red-500 sm:h-11 sm:w-11"
        >
            <RxCross2 size={22} />
        </button>
    );
};

export default CrossBtn;