import Image from 'next/image';
import React from 'react';
import bannerpic from '@/assets/banner.png'
const Banner = () => {
    return (
        <section className='bg-black'>
            <div className='w-7xl border container mx-auto flex pt-10'>
                <div>
                    <p className='text-[#ccff00] text-[15px] '>WORKOUT LIBRARY</p>
                    <h1 className='text-white text-[3.5rem] mt-5 font-bold'>TRAIN WITH INTENT. LOG
                        EVERY SET.</h1>
                    <p className='text-[#9CA3AF] text-[1rem] font-thin'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today's plan, and watch the week's work add up.</p>
                    <button className="btn bg-[#C2F800] text-black font-bold  mt-10 mb-25">BROWSE WORKOUTS</button>
                </div>
                <div>
                   <Image src={bannerpic}
                   alt=''></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;