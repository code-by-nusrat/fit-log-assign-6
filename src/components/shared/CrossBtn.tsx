
"use client";

import { GroupsContext } from "@/context/GroupsContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const CrossBtn = ({ id ,type}: { id: number,type: "plan" | "save"; }) => {
    const { removeFromPlan, removeFromSave, setCount, setCountSave } =
        useContext(GroupsContext) as unknown as {
            removeFromPlan: (id: number) => void;
            removeFromSave: (id: number) => void;
            setCount: React.Dispatch<React.SetStateAction<number>>;
            setCountSave: React.Dispatch<React.SetStateAction<number>>;
        };

    const handleRemove = () => {
        console.log("Removing ID:", id);
          if (type === "plan") {
            removeFromPlan(id);
            setCount((prev) => prev - 1);
            toast.success("Removed from today's plan!");
        } else {
            removeFromSave(id);
            setCountSave((prev) => prev - 1);
            toast.success("Removed from saved!");
        }
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