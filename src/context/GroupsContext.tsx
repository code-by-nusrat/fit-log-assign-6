"use client"
import { IGroups } from '@/Types/groupsType';
import React, { createContext, ReactNode, useState } from 'react';
export const GroupsContext = createContext({})
const GroupsProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState([])
    const [save, setSave] = useState([])
    const [count, setCount] = useState(Number)
    const [countSave, setCountSave] = useState(Number)

// Add to Today's Plan
    const addToPlan = (group: IGroups) => {
        setPlan((prev) => {
            // Don't add the same group twice
            if (prev.some((item) => item.id === group.id)) {
                return prev;
            }

            return [...prev, group];
        });
    };

    // Add to Saved
    const addToSave = (group: IGroups) => {
        setSave((prev) => {
            // Don't add the same group twice
            if (prev.some((item) => item.id === group.id)) {
                return prev;
            }

            return [...prev, group];
        });
    };


    const sharedDtata = {
        plan,
        setPlan,
        save,
        setSave,
        count,
        setCount,
        countSave, setCountSave,
        addToPlan,
        addToSave
    }
    return <GroupsContext.Provider value={sharedDtata}>{children}</GroupsContext.Provider>
};

export default GroupsProvider;