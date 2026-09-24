"use client"
import React, { createContext, ReactNode, useState } from 'react';
export const GroupsContext = createContext({})
const GroupsProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState([])
    const [save, setSave] = useState([])
    const [count, setCount] = useState(Number)
    const [countSave, setCountSave] = useState(Number)
    const sharedDtata = {
        plan,
        setPlan,
        save,
        setSave,
        count,
        setCount,
        countSave, setCountSave
    }
    return <GroupsContext.Provider value={sharedDtata}>{children}</GroupsContext.Provider>
};

export default GroupsProvider;