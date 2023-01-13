import { Link } from "react-router-dom"
import { timeSince } from "../../utils/useFunction"

export const Card = ({job}) => {
    return (
        <div className="flex justify-between items-center border-b-2 pb-3">
            <div className="flex flex-col">
                <Link to={`/list/${job.id}`} className="text-sky-700 font-bold text-lg">{job?.title}</Link>
                <p className="text-gray-500"> {job?.company} - <span className="text-green-600">{job?.type}</span> </p>
            </div>
            <div className="flex flex-col text-gray-500">
                <p className="flex justify-end">{job?.location}</p>
                <p className="font-light flex justify-end">{timeSince(new Date(job?.created_at))} ago</p>
            </div>
        </div>
    )
}