import Link from "next/link";
import { FaDumbbell } from "react-icons/fa6";

const NotFound = () => {
    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-black px-4">
            
            <div className="w-full max-w-2xl rounded-3xl border border-gray-800 bg-[#0a0a0a] px-6 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#CCFF00] text-black sm:h-20 sm:w-20">
                    <FaDumbbell className="text-2xl sm:text-3xl" />
                </div>

                {/* 404 */}
                <h1 className="text-7xl font-black tracking-tight text-[#CCFF00] sm:text-8xl md:text-9xl">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    NOTHING HERE YET
                </h2>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
                    Looks like this workout page took a rest day.
                    The page you are looking for doesn&apos;t exist.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="btn mt-7 rounded-3xl border-none bg-[#CCFF00] px-7 text-black hover:bg-[#b8e600]"
                >
                    <FaDumbbell />
                    Go to workouts
                </Link>

            </div>
        </div>
    );
};

export default NotFound;