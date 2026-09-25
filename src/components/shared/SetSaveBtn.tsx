'use client'
import { GroupsContext } from '@/context/GroupsContext';
import React, { useContext } from 'react';

const SetSaveBtn = () => {
    const { countSave } = useContext(GroupsContext) as { countSave: number };
    return (
        <span className="ml-1 sm:ml-3 px-2 py-0.5 rounded-3xl border border-[#ccff00]">
                        {countSave}
                        </span>
    );
};

export default SetSaveBtn;