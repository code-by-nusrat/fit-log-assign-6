"use client"
import GroupsProvider, { GroupsContext } from '@/context/GroupsContext';
import { IGroups } from '@/Types/groupsType';
import React, { useContext } from 'react';
import { FiCalendar } from "react-icons/fi";
import { toast } from 'react-toastify';

const PlanBtn = ({group}:{group:IGroups}) => {
    const {plan,setPlan,addToPlan,setCount,exercise,setExercise}=useContext(GroupsContext)
    
    const handlePlanBtn=()=>{
         console.log('triggered',group)
        const alreadyAdded = plan.some((item) => item.id === group.id);

        if (alreadyAdded) {
            toast.info(`"${group.name}" is already in today's plan`);
            return;
        }

        addToPlan(group);
        setCount((prev) => prev + 1);

        toast.success(`"${group.name}" added to today's plan`);
        setExercise((prev)=>prev + 1)
    }
    return (
        <div>
            <button className="btn w-full rounded-2xl bg-[#CCFF00] text-black hover:bg-[#b8e600] sm:w-auto" onClick={()=>handlePlanBtn()}>
                <FiCalendar />
                Add to today's plan
            </button>
        </div>
    );
};

export default PlanBtn;