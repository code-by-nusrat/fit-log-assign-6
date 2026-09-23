
import Image from "next/image";
import React from "react";
import bannerpic from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="bg-black">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-10">

                {/* Left Content */}
                <div className="w-full lg:w-1/2">

                    <p className="text-[#ccff00] text-sm">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-white text-3xl sm:text-4xl lg:text-[3.5rem] mt-5 font-bold leading-tight">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-[#9CA3AF] text-sm sm:text-base font-thin mt-5 leading-6">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <button className="btn bg-[#C2F800] text-black font-bold mt-8 lg:mt-10 mb-10 lg:mb-25">
                        BROWSE WORKOUTS
                    </button>

                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src={bannerpic}
                        alt="FitLog workout"
                        className="w-full max-w-md lg:max-w-xl h-auto"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;