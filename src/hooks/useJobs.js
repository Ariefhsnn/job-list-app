import axios from "axios"
import { useEffect, useState } from "react";

axios.defaults.baseURL="http://dev3.dansmultipro.co.id"

export const GetAllJobs = (params) => {   
    const [jobData, setJobData] = useState([])
    console.log(params, 'param')
    useEffect(() => {
        const getAllJob = async() => {
            try {
                const res = await axios.get(
                    params ? 
                    `/api/recruitment/positions.json?description=${params.description ? params.description : ''}&&location=${params.location ? params.location : ''} ${params.full_time != false ? '&&full_time=' + params.full_time : ''}`
                    :
                    `/api/recruitment/positions.json`
                    );    
                let { status, data } = res;
                if(status == 200){
                    setJobData(data)
                }
            } catch (error) {
                console.log(error.response)
            }
            
        }
        getAllJob()
    }, [params])
    return jobData;
}

export const useGetJobById = (id) => {   
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        const getAllJob = async() => {
            try {
                const res = await axios.get(`/api/recruitment/positions/${id}`);    
                let { status, data } = res;
                if(status == 200){
                    setJobData(data)
                }
            } catch (error) {
                console.log(error.response)
            }
            
        }
        getAllJob()
    }, [])
    return jobData;
}

