import AppliedPostingCard from "@/components/AppliedPostingCard";
import axios from "axios";
import { useEffect, useState } from "react"

const Applications = () => {

  const [appliedPostings, setAppliedPostings] = useState([]);

  useEffect(()=>{
    const fetchApplications = async () =>{
        const _id = localStorage.getItem("_id");
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/application/getApplicationsByApplicant/${_id}`,{
          headers : {
            "Authorization" : localStorage.getItem("token")
          },
          withCredentials : true
      });

      console.log(res.data);
      setAppliedPostings(res.data)
    }

    fetchApplications()
  },[])
  return (
    <div className="px-10 py-4">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Applications
      </h1>
      <div className="mt-6 mx-2 grid grid-cols-3 gap-6 overflow-y-auto" style={{ maxHeight: '400px' }}>
        {appliedPostings.map((posting,index)=>(
          <AppliedPostingCard key={index} posting={posting}/>
        ))}
      </div>
    </div>
  )
}

export default Applications
