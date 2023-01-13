export const PhotoCard = ({job}) => {
    return (
        <div className="border-2 rounded p-3 bg-gray-50 flex flex-col gap-3">
            <p className="pb-2 text-lg font-bold text-gray-800 border-b-2">
                {job.company}
            </p>
            {!job.company_logo ? (
                <img src='/logo192.png' alt="logo" className="h-auto w-[90%] mx-auto object-cover" />
                 
            ) : (
                <img src={job.company_logo} alt="logo" className="h-auto w-[90%] mx-auto object-cover" />
            )}
            <a href={job.company_url} className="underline text-sky-500 hover:text-sky-700">{job.company_url}</a>
        </div>
    )
}