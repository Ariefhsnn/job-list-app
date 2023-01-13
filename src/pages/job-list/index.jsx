import { useEffect, useState } from "react";
import { Button, Navbar, Search, List, Loader } from "../../components"
import { GetAllJobs } from "../../hooks/useJobs"

export const Index = () => {
    
    
    const [locationValue, setLocationValue] = useState('');
    const [params, setParams] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);
    const jobs = GetAllJobs(params);

    const submitHandler = () => {                
        setParams({description: descriptionValue, location: locationValue, full_time:isFullTime})
    }

    return (
        <div className="bg-gray-100 h-screen">
            <Navbar />            
            <div className="w-full flex flex-col md:flex-row justify-start items-end mt-5 p-5 gap-3">
                <div className="w-full md:w-5/12">
                    <Search 
                        label="Job Description" 
                        placeholder="Filter by title, benefits, companies, experties"    
                        icon="MdOutlineBusiness"   
                        setValue={setDescriptionValue}              
                    />
                </div>
                <div className="w-full md:w-5/12">
                    <Search 
                        label="Location" 
                        placeholder="Filter by city, status, zip code or country"
                        icon="MdOutlinePublic"
                        setValue={setLocationValue}
                    />
                </div>    
                <div className="w-full md:w-1/12 flex gap-3 items-center">                    
                    <input onChange={() => setIsFullTime(curr => !curr)} type="checkbox" name="fulltime" id="fulltime" className="h-6 w-6" />
                    <label htmlFor="fulltime" className="text-gray-800 font-bold">Full time only</label>
                </div>
                <div className="w-full md:w-1/12">
                    <Button 
                    onClick={submitHandler} variant="primary" className="flex justify-center w-full">
                        <p>Search</p>
                    </Button>
                </div>            
            </div>

            <div className="mt-5 mx-auto">
                {!jobs || jobs.length == 0 ? (
                    <Loader />
                ): (
                    <List jobs={jobs} />
                )}
                
            </div>
        </div>
    )    
}