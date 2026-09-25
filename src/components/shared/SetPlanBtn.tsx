'use client'
import { GroupsContext } from '@/context/GroupsContext';
import React, { useContext } from 'react';

const SetPlanBtn = () => {
    const { count } = useContext(GroupsContext) as { count: number };
    return (
            <span className="ml-1 sm:ml-3 bg-[#ccff00] px-2 py-0.5 rounded-3xl text-black">       {count} </span>
    );
};

export default SetPlanBtn;