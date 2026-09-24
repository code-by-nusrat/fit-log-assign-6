"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyPlanBtn = () => {
    const pathname = usePathname();

    return (
        <li>
            <Link
                href="/my-plan"
                className={`rounded-3xl px-4 py-2 ${
                    pathname === "/my-plan"
                        ? "bg-[#CCFF00] text-black"
                        : "text-gray-400"
                }`}
            >
                My Plan
            </Link>
        </li>
    );
};

export default MyPlanBtn;