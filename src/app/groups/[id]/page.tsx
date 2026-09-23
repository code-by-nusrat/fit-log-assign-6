import { IGroups } from '@/Types/groupsType';
import Image from 'next/image';
import React from 'react';
const getGroups = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data;
}
interface IGroupDetailsProp{
    params:Promise<{
        id:string
}>;
}
const GroupDetailsPage =async ({params}:IGroupDetailsProp)=> {
    const {id}=await params;
    const groupsData = await getGroups()
    const group =groupsData.find((group:IGroups)=>String(group.id )=== String(id))
    return (
        <div className='w-7xl border container mx-auto'>
            <div>
                <Image src={group.image}
                 width={588}alt=''
                 height={735}></Image>
            </div>
            <div></div>
        </div>
    );
};

export default GroupDetailsPage;