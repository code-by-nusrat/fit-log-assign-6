"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WorkOutBtn = () => {
    const pathname = usePathname();

    return (
        <li>
            <Link
                href="/"
                className={`rounded-3xl px-4 py-2 ${
                    pathname === "/"
                        ? "bg-[#CCFF00] text-black"
                        : "text-gray-400"
                }`}
            >
                Workouts
            </Link>
        </li>
    );
};

export default WorkOutBtn;