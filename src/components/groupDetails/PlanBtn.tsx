"use client"
import GroupsProvider, { GroupsContext } from '@/context/GroupsContext';
import { IGroups } from '@/Types/groupsType';
import React, { useContext } from 'react';
import { FiCalendar } from "react-icons/fi";
import { toast } from 'react-toastify';

const PlanBtn = ({group}:{group:IGroups}) => {
    const {plan,setPlan,addToPlan}=useContext(GroupsContext)
    const handlePlanBtn=()=>{
        console.log('triggered',group)
        // setPlan([...plan,group])
        toast.success(`"${group.name}"Added to todays's plan`)
        addToPlan(group)
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