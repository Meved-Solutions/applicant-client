import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer" 
import { Input } from "./ui/input";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { User } from "@/atom";
import axios from "axios";

const JobCard = ({ job }) => {

  const user = useRecoilValue(User);
  const [reason,setReason] = useState("");
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (id, answer) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
  };
  

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const data = {
      posting_id : job._id,
      posting_role : job.title,
      applicant_id :  user._id,
      applicant_name : user.name,
      applicant_email : user.email,
      org_id : job.org_id,
      org_name : job.org_name,
      reason : reason,
      evaluation : Object.values(answers),
    }

    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/application/createApplication`,data,{
      headers: {
        'Authorization': localStorage.getItem("token"),
      },
      withCredentials: true
    })

    console.log(res.data);
    setReason("")
    setAnswers({});
  }

  return (
    <div className="bg-gray-200 h-28 rounded-md px-2  py-2">
      <div className="flex flex-col justify-between">
        <div>
        <h2 className="pb-2 text-xl font-bold tracking-tight first:mt-0">
          {job.title}
        </h2>
        </div>
        <div className="flex flex-row gap-2 font-semibold text-sm">
           <div>
            {job.org_name} |
           </div>
           <div>
            {job.domain}
           </div>
        </div>
        <div className="flex flex-row justify-between font-medium items-center text-sm">
          <div className="flex flex-row gap-2">
          <div>
          {job.skills.slice(0, 3).map((skill, index, array) => (
            <span key={index}>
              {skill}
              {index < array.length - 1 ? ' | ' : ''}
            </span>
          ))}
            </div>
          </div>
          <div>
            <Drawer>
            <DrawerTrigger>
              <Button>
                Apply 
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Application
                  </h3>
                </DrawerTitle>
                <DrawerDescription>Complete the Form to Apply</DrawerDescription>
              </DrawerHeader>
              <div className="mt-4 px-4 h-[50vh] overflow-auto">
                <div>
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Org Name
                  </h4>
                  <Input disabled type="text" value={job.org_name} className="mt-2"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Job Title
                  </h4>
                  <Input disabled type="text" value={job.title} className="mt-2"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Job Type
                  </h4>
                  <Input disabled type="text" value={job.job_type} className="mt-2"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Job Domain
                  </h4>
                  <Input disabled type="text" value={job.domain} className="mt-2"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Job Department
                  </h4>
                  <Input disabled type="text" value={job.department} className="mt-2"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Job Description
                  </h4>
                  <textarea disabled value={job.job_description} className="mt-2 w-full text-xs h-20 px-1 py-1 rounded-sm shadow-sm ring-1 ring-gray-200"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Salary Range
                  </h4>
                 <div className="flex flex-row items-center gap-4">
                 <Input disabled type="text" value={job.salaryRange.min} className="mt-2 w-20"/>
                  <div>
                    to
                  </div>
                 <Input disabled type="text" value={job.salaryRange.max} className="mt-2 w-20"/>
                 </div>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Notice Period
                  </h4>
                  <Input disabled type="text" value={job.notice_period} className="mt-2"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Skills
                  </h4>
                  <Input disabled type="text" value={job.skills} className="mt-2"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Why do you want to join this organization
                  </h4>
                  <textarea value={reason} onChange={(e)=>{setReason(e.target.value)}} className="mt-2 w-full text-xs h-20 px-1 py-1 rounded-sm shadow-sm ring-1 ring-gray-200"/>
                </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Evaluation
                  </h4>
                  {job.evaluation.map(({ question, _id }) => (
                    typeof question === "string" && (
                      <div key={_id}>
                        <h5>{question}</h5>
                        <textarea
                          value={answers[_id] || ''}
                          onChange={e => handleAnswerChange(_id, e.target.value)}
                          className="mt-2 w-full text-xs h-20 px-1 py-1 rounded-sm shadow-sm ring-1 ring-gray-200"
                        />
                      </div>
                    )
                  ))}
                </div>
              </div>
              <DrawerFooter>
                <Button onClick={handleSubmit}>Submit</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;