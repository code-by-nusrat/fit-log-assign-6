
import { IGroups } from "@/Types/groupsType";
import Image from "next/image";
import PlanBtn from "@/components/groupDetails/PlanBtn";
import SaveBtn from "@/components/groupDetails/SaveBtn";

const getGroups = async (): Promise<IGroups[]> => {
    const res =await fetch ('https://api.abcz.workers.dev/api/fitlog')
    const data=await res.json()
    return data;
}
    
interface IGroupDetailsProp {
    params: Promise<{
        id: string;
    }>;
}

const GroupDetailsPage = async ({ params }: IGroupDetailsProp) => {
    const { id } = await params;

    const groupsData = await getGroups();

    const group = groupsData.find(
        (group: IGroups) => String(group.id) === String(id)
    );

    // If group doesn't exist
    if (!group) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Group Not Found
                    </h1>

                    <p className="mt-3 text-gray-400">
                        The workout group you are looking for does not exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">

            {/* Main Content */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">

                {/* Image */}
                <div className="w-full">
                    <div className="relative mx-auto aspect-588/735 w-full max-w-147 overflow-hidden rounded-2xl">
                        <Image
                            src={group.image}
                            alt={group.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="w-full">

                    {/* Title */}
                    <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.4rem]">
                        {group.name}
                    </h1>

                    {/* Description */}
                    <p className="text-sm leading-6 text-gray-400 sm:text-base">
                        {group.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                            {group.muscleGroups.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-[#C2F800] px-3 py-1 text-sm text-black sm:px-4 sm:text-base"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Workout Information */}
                    <div className="mt-6 rounded-3xl border border-gray-800 bg-gray-900 px-5">

                        {/* Equipment */}
                        <div className="grid grid-cols-1 gap-2 border-b border-gray-800 py-4 sm:grid-cols-2 sm:items-center">
                            <p className="text-sm text-gray-400">
                                EQUIPMENT
                            </p>

                            <div className="flex flex-wrap gap-2 sm:justify-end">
                                {group.equipment
                                    .split(",")
                                    .map((equipment, index) => (
                                        <span
                                            key={index}
                                            className="text-sm text-gray-400"
                                        >
                                            {equipment.trim()}
                                        </span>
                                    ))}
                            </div>
                        </div>

                        {/* Difficulty */}
                        <div className="grid grid-cols-2 items-center border-b border-gray-800 py-4">
                            <p className="text-sm text-gray-400">
                                DIFFICULTY
                            </p>

                            <p className="text-right text-sm text-gray-400">
                                {group.difficulty}
                            </p>
                        </div>

                        {/* Sets */}
                        <div className="grid grid-cols-2 items-center border-b border-gray-800 py-4">
                            <p className="text-sm text-gray-400">
                                SETS
                            </p>

                            <p className="text-right text-sm text-gray-400">
                                {group.sets}
                            </p>
                        </div>

                        {/* Reps */}
                        <div className="grid grid-cols-2 items-center border-b border-gray-800 py-4">
                            <p className="text-sm text-gray-400">
                                REPS
                            </p>

                            <p className="text-right text-sm text-gray-400">
                                {group.reps}
                            </p>
                        </div>

                        {/* Duration */}
                        <div className="grid grid-cols-2 items-center border-b border-gray-800 py-4">
                            <p className="text-sm text-gray-400">
                                DURATION
                            </p>

                            <p className="text-right text-sm text-gray-400">
                                {group.duration}
                            </p>
                        </div>

                        {/* Calories */}
                        <div className="grid grid-cols-2 items-center border-b border-gray-800 py-4">
                            <p className="text-sm text-gray-400">
                                CALORIES
                            </p>

                            <p className="text-right text-sm text-gray-400">
                                {group.caloriesBurned}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="grid grid-cols-2 items-center py-4">
                            <p className="text-sm text-gray-400">
                                RATING
                            </p>

                            <p className="text-right text-sm text-gray-400">
                                ⭐ {group.rating}
                            </p>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-6">
                        <h2 className="mb-3 text-lg font-bold text-white">
                            INSTRUCTIONS
                        </h2>

                        <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-gray-400 sm:text-base">
                            {group.instructions.map(
                                (instruction, index) => (
                                    <li key={index}>
                                        {instruction}
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <PlanBtn group={group} />
                        <SaveBtn group={group} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupDetailsPage;

// import { IGroups } from "@/Types/groupsType";
// import Image from "next/image";
// import PlanBtn from "@/components/groupDetails/PlanBtn";
// import SaveBtn from "@/components/groupDetails/SaveBtn";

// interface IGroupDetailsProp {
//     params: Promise<{
//         id: string;
//     }>;
// }

// const getGroup = async (id: string): Promise<IGroups | null> => {
//     try {
//         const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

//         if (!baseUrl) {
//             throw new Error("NEXT_PUBLIC_SERVER_BASE_URL is not defined");
//         }

//         const res = await fetch(`${baseUrl}/${id}`, {
//             cache: "no-store",
//         });

//         if (!res.ok) {
//             return null;
//         }

//         const data: IGroups = await res.json();

//         return data;
//     } catch (error) {
//         console.error("Error fetching group:", error);
//         return null;
//     }
// };

// const GroupDetailsPage = async ({
//     params,
// }: IGroupDetailsProp) => {
//     const { id } = await params;

//     const group = await getGroup(id);

//     if (!group) {
//         return (
//             <div className="flex min-h-[70vh] items-center justify-center px-4">
//                 <div className="text-center">
//                     <h1 className="text-3xl font-bold text-white">
//                         Group Not Found
//                     </h1>

//                     <p className="mt-3 text-gray-400">
//                         The workout group you are looking for does not exist.
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">

//                 {/* Image */}
//                 <div className="w-full">
//                     <div className="relative mx-auto aspect-[588/735] w-full max-w-[588px] overflow-hidden rounded-2xl">
//                         <Image
//                             src={group.image}
//                             alt={group.name}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>

//                 {/* Details */}
//                 <div className="w-full">
//                     <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.4rem]">
//                         {group.name}
//                     </h1>

//                     <p className="text-sm leading-6 text-gray-400 sm:text-base">
//                         {group.description}
//                     </p>

//                     {/* Muscle Groups */}
//                     <div className="mt-6 flex flex-wrap gap-2">
//                         {group.muscleGroups.map((muscle, index) => (
//                             <span
//                                 key={index}
//                                 className="rounded-full bg-[#C2F800] px-3 py-1 text-sm text-black sm:px-4 sm:text-base"
//                             >
//                                 {muscle}
//                             </span>
//                         ))}
//                     </div>

//                     {/* Workout Information */}
//                     <div className="mt-6 rounded-3xl border border-gray-800 bg-gray-900 px-5">

//                         {/* Equipment */}
//                         <div className="grid grid-cols-1 gap-2 border-b border-gray-800 py-4 sm:grid-cols-2 sm:items-center">
//                             <p className="text-sm text-gray-400">
//                                 EQUIPMENT
//                             </p>

//                             <div className="flex flex-wrap gap-2 sm:justify-end">
//                                 {group.equipment
//                                     .split(",")
//                                     .map((equipment, index) => (
//                                         <span
//                                             key={index}
//                                             className="text-sm text-gray-400"
//                                         >
//                                             {equipment.trim()}
//                                         </span>
//                                     ))}
//                             </div>
//                         </div>

//                         <InfoRow
//                             label="DIFFICULTY"
//                             value={group.difficulty}
//                         />

//                         <InfoRow
//                             label="SETS"
//                             value={String(group.sets)}
//                         />

//                         <InfoRow
//                             label="REPS"
//                             value={String(group.reps)}
//                         />

//                         <InfoRow
//                             label="DURATION"
//                             value={String(group.duration)}
//                         />

//                         <InfoRow
//                             label="CALORIES"
//                             value={String(group.caloriesBurned)}
//                         />

//                         {/* Rating */}
//                         <div className="grid grid-cols-2 items-center py-4">
//                             <p className="text-sm text-gray-400">
//                                 RATING
//                             </p>

//                             <p className="text-right text-sm text-gray-400">
//                                 ⭐ {group.rating}
//                             </p>
//                         </div>
//                     </div>

//                     {/* Instructions */}
//                     <div className="mt-6">
//                         <h2 className="mb-3 text-lg font-bold text-white">
//                             INSTRUCTIONS
//                         </h2>

//                         <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-gray-400 sm:text-base">
//                             {group.instructions.map(
//                                 (instruction, index) => (
//                                     <li key={index}>
//                                         {instruction}
//                                     </li>
//                                 )
//                             )}
//                         </ol>
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//                         <PlanBtn group={group} />
//                         <SaveBtn group={group} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const InfoRow = ({
//     label,
//     value,
// }: {
//     label: string;
//     value: string;
// }) => {
//     return (
//         <div className="grid grid-cols-2 items-center border-b border-gray-800 py-4">
//             <p className="text-sm text-gray-400">
//                 {label}
//             </p>

//             <p className="text-right text-sm text-gray-400">
//                 {value}
//             </p>
//         </div>
//     );
// };

// export default GroupDetailsPage;