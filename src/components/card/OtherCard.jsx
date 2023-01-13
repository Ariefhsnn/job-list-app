export const OtherCard = ({job}) => {
    return (
        <div className="border-2 rounded-md p-4 bg-yellow-50">
            <p className="pb-4 border-b-2 text-lg font-bold"> How To Apply </p>
            <div className="mt-4" dangerouslySetInnerHTML={{__html: job.how_to_apply}}></div>
        </div>
    )
}