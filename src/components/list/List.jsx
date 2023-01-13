import { Card } from "../card/Card"

export const List = ({jobs}) => {

    return (
        <div className="w-full px-5">
            <div className="border-4 rounded-2xl  bg-white p-5 flex flex-col gap-3">
                <h1 className="py-5 border-b-2 text-2xl text-gray-800 font-bold">Job List</h1>
                <div className="flex flex-col">
                    {jobs && jobs.length > 0 && jobs.map((job) => (
                        <Card job={job} key={job.id} />                        
                    ))}                    
                </div>                 
            </div>
        </div>
    )
}