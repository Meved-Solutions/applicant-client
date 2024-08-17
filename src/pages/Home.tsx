import { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Job {
  _id: string;
  title: string;
  org_id: string;
  org_name: string;
  domain: string;
  job_type: string;
  department: string;
  job_description: string;
  salaryRange: { min: string; max: string };
  notice_period: string;
  skills: string[];
  evaluation: { question: string; _id: string }[];
}

const Home: React.FC = () => {
  const [jobData, setJobData] = useState<Job[]>([]);
  const [domain, setDomain] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");

  useEffect(() => {
    const fetchPostings = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/posting/getPostings`, {
        headers: {
          'Authorization': localStorage.getItem("token") || "",
        },
        withCredentials: true,
      });
      console.log(res.data);
      setJobData(res.data);
    };

    fetchPostings();
  }, []);

  const filteredPostings = jobData.filter(posting =>
    (jobType === "" ? true : posting.job_type === jobType) &&
    (domain === "" ? true : posting.domain === domain)
  );

  return (
    <div className="px-8 py-4 overflow-auto min-h-screen custom-scrollbar w-screen">
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Home
          </h1>
        </div>
        <div>
          <Dialog>
            <DialogTrigger>
              <Button>
                Filter Postings
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Filter Postings
                  </h2>
                </DialogTitle>
                <DialogDescription>
                  <div className='h-[50vh] overflow-auto'>
                    <div>
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight mb-2">
                        Domain
                      </h4>
                      <Select onValueChange={(value) => { setDomain(value); }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Domain" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Software">Software</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Management">Management</SelectItem>
                          <SelectItem value="Consultancy">Consultancy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='mt-6'>
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight mb-2">
                        Job Type
                      </h4>
                      <Select onValueChange={(value) => { setJobType(value); }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Job Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-Time">Full-Time</SelectItem>
                          <SelectItem value="Part-Time">Part-Time</SelectItem>
                          <SelectItem value="Internship">Internship</SelectItem>
                          <SelectItem value="Contractual">Contractual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6 w-full">
        {filteredPostings.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;