import { useGetJobById } from "../../../hooks/useJobs"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { ListDetail, Navbar, BackButton } from "../../../components"

export const Detail = () => {
    const { id } = useParams()    
    const job = useGetJobById(id)

    return (
        <div className="flex flex-col gap-3">
            <Navbar />
            <BackButton pathname="/list" />
            <ListDetail job={job} />
        </div>
    )
}