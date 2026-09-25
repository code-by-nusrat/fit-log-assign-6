'use client'
import React from 'react';
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';
const MarkBtn = ({ group }: { group: { name: string } }) => {
    const toastify=()=>{
        toast.success(`"${group.name}" is marked as done sucessfully`)
    }
    return (
        <button
                    className="btn h-10 flex-1 rounded-3xl bg-[#CCFF00] px-4 text-xs text-black sm:h-11 sm:text-sm lg:w-40 lg:flex-none" onClick={()=>toastify()}
                >
                    <FaCheck />
                    Mark as Done
                </button>
    );
};

export default MarkBtn;