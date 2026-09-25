"use client"
import { GroupsContext } from '@/context/GroupsContext';
import { IGroups } from '@/Types/groupsType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AiFillSave } from "react-icons/ai";
const SaveBtn = ({group}:{group:IGroups}) => {
    const { save, addToSave, setCountSave } = useContext(
        GroupsContext as unknown as React.Context<{
            save: IGroups[];
            addToSave: (group: IGroups) => void;
            setCountSave: React.Dispatch<React.SetStateAction<number>>;
        }>
    );
    const handleSaveBtn=()=>{
        // console.log('triggered')
        // // setSave([...save,group])
        // toast.success(`"${group.name}"Added to Save for later`)
        // addToSave(group);
         console.log('triggered',group)
                const alreadyAdded = save.some((item) => item.id === group.id);
        
                if (alreadyAdded) {
                    toast.info(`"${group.name}" is already saved for later`);
                    return;
                }
        
                addToSave(group);
                setCountSave((prev) => prev + 1);
        
                toast.success(`"${group.name}" added to save for later`);
    }
    return (
        <div>
           <button className="btn w-full rounded-2xl border border-gray-400 bg-black text-white hover:bg-gray-900 sm:w-auto" onClick={()=>handleSaveBtn()}>
                            <AiFillSave />
                            Save for later
                        </button>
        </div>
    );
};

export default SaveBtn;