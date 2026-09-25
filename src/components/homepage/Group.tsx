import React from 'react';
import GroupCard from '../shared/GroupCard';
import { IGroups } from '@/Types/groupsType';

const getGroups = async () => {
    
    const res = await fetch ("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data;
    }

const Groups = async () => {
    const groupsData = await getGroups()
    console.log(groupsData, "groupsdata")
    return (
        <div className=''>
            <div className=' mx-auto w-full px-4 sm:px-6 lg:px-8  flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-10 border '>
                <h2 className='text-[1.9rem] font-bold card-content text-white'>THE LIBRARY</h2>
                <p className='text-[1rem]font-thin card-content text-gray-500'>Twelve lifts covering every major muscle group.</p>
                <div className='container mx-auto mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 card mb-10'>
                    {
                       groupsData.map((group:IGroups,ind:number)=>{
                        return <GroupCard key={ind} group={group}></GroupCard>
                       }) 
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Groups;

// import GroupCard from "../shared/GroupCard";
// import { IGroups } from "@/Types/groupsType";

// const getGroups = async (): Promise<IGroups[]> => {
//     try {
//         const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

//         if (!baseUrl) {
//             throw new Error("NEXT_PUBLIC_SERVER_BASE_URL is not defined");
//         }

//         const res = await fetch(baseUrl);

//         if (!res.ok) {
//             throw new Error("Failed to fetch groups");
//         }

//         const data: IGroups[] = await res.json();

//         return data;
//     } catch (error) {
//         console.error("Error fetching groups data:", error);
//         return [];
//     }
// };

// const Groups = async () => {
//     const groupsData = await getGroups();

//     return (
//         <div>
//             <div className="mx-auto flex w-full flex-col items-center px-4 pt-10 sm:px-6 lg:px-8">
//                 <h2 className="text-[1.9rem] font-bold text-white">
//                     THE LIBRARY
//                 </h2>

//                 <p className="text-[1rem] font-thin text-gray-500">
//                     Twelve lifts covering every major muscle group.
//                 </p>

//                 <div className="container mx-auto mt-10">
//                     <div className="mb-10 grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
//                         {groupsData.map((group) => (
//                             <GroupCard
//                                 key={group.id}
//                                 group={group}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Groups;