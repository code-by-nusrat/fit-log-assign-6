import Link from "next/link";



const GroupNothingCard = () => {
    return (
        <div className="container mx-auto flex h-75 w-full flex-col items-center rounded-2xl border border-gray-700 px-4">
            
            <h1 className="mt-20 text-center text-xl font-bold sm:mt-24 sm:text-2xl oswald">
                NOTHING HERE YET
            </h1>

            <p className="mt-3 max-w-md text-center text-sm font-semibold text-gray-400 sm:text-base">
                Browse the library and add a lift to get today moving.
            </p>
             <Link href='/'>
            <button
                className="btn mt-4 w-auto rounded-3xl bg-[#CCFF00] px-6 text-xs text-black hover:bg-[#b8e600] sm:text-sm"
            >
                Go to workouts
            </button>
            </Link>
        </div>
    );
};

export default GroupNothingCard;