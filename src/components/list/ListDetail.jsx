import { PhotoCard } from "../"
import { OtherCard } from "../"

export const ListDetail = ({job}) => {
    return (
        <div className="w-full px-5">
            <div className="border-4 rounded-2xl  bg-white p-5 flex flex-col gap-3">
                <div className="flex border-b-2 py-5 flex-col">
                    <p className="text-gray-500"> {job.type} / {job.location} </p>
                    <h1 className=" text-2xl text-gray-800 font-bold">{job.title}</h1>
                </div>
                
                <div className="flex w-full gap-5">
                    <div dangerouslySetInnerHTML={{__html: job.description}} className="w-2/3 overflow-hidden"></div>
                    <div className="w-1/3 flex flex-col gap-3">
                        <PhotoCard job={job} />
                        <OtherCard job={job} />
                    </div>
                </div>               
            </div>
        </div>
    )
}