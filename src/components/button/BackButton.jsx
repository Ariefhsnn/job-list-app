import { MdArrowBack } from "react-icons/md"
import { Link } from "react-router-dom"
export const BackButton = ({pathname}) => {
    return (
        <Link to={pathname} className="flex items-center gap-3 px-4">
            <MdArrowBack className="h-6 w-6 text-gray-500" />
            <p className="text-sky-700 text-lg font-bold">Back</p>
        </Link>
    )
}