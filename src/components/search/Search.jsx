import * as Icons from 'react-icons/md'

export const Search = ({label, placeholder, icon, setValue}) => {

    function Icon({ icon, ...props }) {
        const Icon = Icons[icon]
        return <Icon {...props} />
    }

    return (
        <div className="flex flex-col">
            <label htmlFor="search" className='font-bold text-gray-800'>
                {label}
            </label>
            <div className='flex items-center'>
                <div className='border-l-2 border-y-2 px-2 py-1.5 rounded-md rounded-r-none bg-white'>
                    <Icon className="h-5 w-5 text-gray-500" icon={icon} />
                </div>                
                <input onChange={(e) => setValue(e.target.value)} type="text" placeholder={placeholder} className="pr-4 py-1 outline-none w-full border-r-2 border-y-2 rounded-md rounded-l-none" />
            </div>
            
        </div>
    )
}