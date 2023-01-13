import {BiLoader} from 'react-icons/bi'
export const Loader = () => {
    return (
        <div className="w-full flex justify-center gap-2 items-center">
            <BiLoader className='h-10 w-10 animate-spin' />
            <p className="text-gray-500 text-2xl animate-pulse">Loading</p>            
        </div>
    )
}