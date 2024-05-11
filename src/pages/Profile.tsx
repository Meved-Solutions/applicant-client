import { Input } from "@/components/ui/input"
import { useState } from "react"
import { FaLinkedin, FaPencilAlt } from "react-icons/fa";
import { IoIosLink, IoMdDownload } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { useRecoilValue } from "recoil";
import { User } from "@/atom";


const Profile = () => {

  const Cuser = useRecoilValue(User);
  

  const [user,setUser] = useState({
    "name" : Cuser.name,
    "email" : Cuser.email,
    "phone" : Cuser.phone,
    "location" : {
      "name" : Cuser.location.name,
      "state" : Cuser.location.state,
      "country" : Cuser.location.country,
    },
    "bio" : Cuser.bio,
    "gender" : Cuser.gender,
    "cctc" :  Cuser.currentSalary,
    "ectc" : Cuser.expectedSalary,
    "noticePeriod" : Cuser.noticePeriod,
    "quota" : Cuser.quota,
    "domain" : Cuser.domain,
    "edu" : Cuser.education,
    "exp" : Cuser.experience,
    "linkedInProfile" : Cuser.linkedInProfile,
    "otherLinks" : Cuser.otherLinks,
    "resume"  : Cuser.resume,
    "image" : Cuser.image
  })

  
  const [newResume,setNewResume] = useState("");


  return (
    <div className="px-10 py-4 w-full " style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Profile
      </h1>
      <div className="flex flex-row mt-6 gap-6">
          <div>
            <div>
              <img src={user.image} className="w-56 rounded-full"/>
            </div>
            <div className="flex flex-row mt-6 justify-center gap-4">
                <a href={user.linkedInProfile}>
                  <FaLinkedin size={25}/>
                </a>
                <a href={user.otherLinks}>
                  <IoIosLink size={25}/> 
                </a>
                <a href={user.resume}>
                  <IoMdDownload size={25} />
                </a>
            </div>
          </div>
          <div className="ml-8 w-[50vh]">
          <Sheet>
              <SheetTrigger>
                <div className="font-medium flex flex-row gap-3">
                  <FaPencilAlt /> Edit Profile
                </div>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto w-full">
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                <div>
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Name
                </h4>
                    <Input disabled type="text" value={user.name} className="mt-2"/>
                  </div>
                  <div className="mt-6">
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                        Email
                      </h4>
                      <Input type="text" value={user.email} onChange={(e) => setUser({ ...user, "email": e.target.value })} className="mt-2"/>                  </div>
                  <div className="mt-6">
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                        Phone Number
                      </h4>
                      <Input type="text" value={user.phone} onChange={(e) => setUser({ ...user, "phone": e.target.value })} className="mt-2"/>
                  </div>
                  <div className="mt-6">
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                          Location
                      </h4>
                      <Input type="text" value={user.location.name} onChange={(e) => setUser({ ...user, "location": { ...user.location , "name" :  e.target.value } })} className="mt-2"/>
                      <Input type="text" value={user.location.state} onChange={(e) => setUser({ ...user, "location": { ...user.location , "state" :  e.target.value } })} className="mt-2"/>
                      <Input type="text" value={user.location.country} onChange={(e) => setUser({ ...user, "location": { ...user.location , "country" :  e.target.value } })} className="mt-2"/>
                  </div>
                  <div className="mt-6">
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                        Gender
                      </h4>
                      <Input type="text" value={user.gender} onChange={(e) => setUser({ ...user, "gender": e.target.value })} className="mt-2"/>
                  </div>
                  <div className="mt-6">
                        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                          Your Bio
                        </h4>
                        <textarea  value={user.bio} onChange={(e) => setUser({ ...user, "bio": e.target.value })} className="text-xs h-20 px-1 py-1 mt-2 w-full rounded-sm shadow-sm ring-1 ring-gray-200"/>
                  </div>
                    <div className="mt-6">
                        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                          Current CTC (in LPA)
                        </h4>
                        <Input type="text" value={user.cctc} onChange={(e) => setUser({ ...user, "cctc": e.target.value })} className="mt-2"/>
                  </div> 
                  <div className="mt-6">
                        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                          Expected CTC (in LPA)
                        </h4>
                        <Input type="text" value={user.ectc} onChange={(e) => setUser({ ...user, "ectc": e.target.value })} className="mt-2"/>
                  </div>  
                  <div className="mt-6">
                        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                          Notice Period
                        </h4>
                        <Input type="text" value={user.noticePeriod} onChange={(e) => setUser({ ...user, "noticePeriod": e.target.value })} className="mt-2"/>
                  </div> 
                  <div className="mt-6">
                        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                          Quota
                        </h4>
                        <Input type="text" value={user.quota} onChange={(e) => setUser({ ...user, "quota": e.target.value })} className="mt-2"/>
                  </div>
                  <div className="mt-6">
                        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                          Domain
                        </h4>
                        <Input type="text" value={user.domain} onChange={(e) => setUser({ ...user, "domain": e.target.value })} className="mt-2"/>
                  </div>
                  <div className="mt-6">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Education
              </h4>
              {user.edu.map((education, index) => (
                <div key={index}>
                  <Input type="text" value={education.institute_name} onChange={(e) => {
                    const newEducation = [...user.edu];
                    newEducation[index] = { ...newEducation[index], institute_name: e.target.value };
                    setUser({ ...user, edu: newEducation });
                  }} className="mt-2"/>
                 <Input type="text" value={education.type} onChange={(e) => {
                    const newEducation = [...user.edu];
                    newEducation[index] = { ...newEducation[index], type: e.target.value };
                    setUser({ ...user, edu: newEducation });
                  }} className="mt-2"/>
                   <Input type="text" value={education.marks} onChange={(e) => {
                    const newEducation = [...user.edu];
                    newEducation[index] = { ...newEducation[index], marks: e.target.value };
                    setUser({ ...user, edu: newEducation });
                  }} className="mt-2"/>
                  <Input type="text" value={education.year} onChange={(e) => {
                    const newEducation = [...user.edu];
                    newEducation[index] = { ...newEducation[index], year: e.target.value };
                    setUser({ ...user, edu: newEducation });
                  }} className="mt-2"/>
                  <div className="mt-2 w-[95vh]">
                  <textarea  value={education.workDone}  onChange={(e) => {
                    const newEducation = [...user.edu];
                    newEducation[index] = { ...newEducation[index], workDone: e.target.value };
                    setUser({ ...user, edu: newEducation });
                  }} className="text-xs h-20 px-1 py-1 mt-2 w-full rounded-sm shadow-sm ring-1 ring-gray-200"/>
                  </div>
                </div>
              ))}
            </div>
                <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Experience
                  </h4>
                  {user.exp.map((experience, index) => (
                    <div key={index}>
                      <Input type="text" value={experience.company} onChange={(e) => {
                        const newExp = [...user.exp];
                        newExp[index] = { ...newExp[index], company: e.target.value };
                        setUser({ ...user, exp: newExp });
                      }} className="mt-2"/>
                      <Input type="text" value={experience.role} onChange={(e) => {
                        const newExp = [...user.exp];
                        newExp[index] = { ...newExp[index], role: e.target.value };
                        setUser({ ...user, exp: newExp });
                      }} className="mt-2"/>
                      <Input type="text" value={experience.timePeriod} onChange={(e) => {
                        const newExp = [...user.exp];
                        newExp[index] = { ...newExp[index], timePeriod: e.target.value };
                        setUser({ ...user, exp: newExp });
                      }} className="mt-2"/>
                       <div className="mt-2 w-[95vh]">
                      <textarea  value={experience.description}  onChange={(e) => {
                        const newExp = [...user.exp];
                        newExp[index] = { ...newExp[index], description: e.target.value };
                        setUser({ ...user, edu: newExp });
                      }} className="text-xs h-20 px-1 py-1 mt-2 w-full rounded-sm shadow-sm ring-1 ring-gray-200"/>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-8 mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    LinkedInProfile
                  </h4>
              <Input type="text" value={user.linkedInProfile} onChange={(e) => setUser({ ...user, "linkedInProfile": e.target.value })} className="mt-2"/>
                </div>
                <div className="px-8 mt-6">
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                        Other Links
                      </h4>
                      <Input type="text" value={user.otherLinks} onChange={(e) => setUser({ ...user, "otherLinks": e.target.value })} className="mt-2"/>
                </div>
                <div className="px-8 mt-6">
                      <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                        Resume
                      </h4>
                      <Input type="file"  onChange={(e) => setNewResume(e.target.files ? e.target.files[0] : null)} className="mt-2"/>
                </div>
                <div className="px-8 mt-6">
                  <Button>
                    Save Changes
                  </Button>
                </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
            <div>
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Name
                </h4>
              <Input disabled type="text" value={user.name} className="mt-2"/>
            </div>
            <div className="mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Email
                </h4>
              <Input disabled type="text" value={user.email} className=" mt-2"/>
            </div>
            <div className="mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Phone Number
                </h4>
              <Input disabled type="text" value={user.phone} className=" mt-2"/>
            </div>
            <div className="mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Location
                </h4>
                <Input
                    disabled  
                    type="text" 
                    value={user.location.name}  
                    className="mt-2"
                />
                <Input
                    disabled  
                    type="text" 
                    value={user.location.state} 
                    className="mt-2"
                />
                <Input 
                    disabled 
                    type="text" 
                    value={user.location.country} 
                    className="mt-2"
                />
            </div>
            <div className="mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Gender
                </h4>
              <Input disabled type="text" value={user.gender} className=" mt-2"/>
            </div>
            <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Your Bio
                  </h4>
                  <div className="mt-2 w-[95vh]">
                    {user.bio}
                  </div>
            </div>
              <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Current CTC (in LPA)
                  </h4>
                <Input disabled type="text" value={user.cctc}  className="mt-2"/>
            </div> 
            <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Expected CTC (in LPA)
                  </h4>
                <Input disabled type="text" value={user.ectc}  className="mt-2"/>
            </div>  
            <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Notice Period
                  </h4>
                <Input disabled type="text" value={user.noticePeriod}  className="mt-2"/>
            </div> 
            <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Quota
                  </h4>
                <Input disabled type="text" value={user.quota}  className="mt-2"/>
            </div>
            <div className="mt-6">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Domain
                  </h4>
                <Input disabled type="text" value={user.domain}  className="mt-2"/>
            </div>
            <div className="mt-6">
        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
          Education
        </h4>
        {user.edu.map((education, index) => (
          <div key={index}>
            <Input disabled type="text" value={education.institute_name} className="mt-2"/>
            <Input disabled type="text" value={education.type} className="mt-2"/>
            <Input disabled type="text" value={education.marks} className="mt-2"/>
            <Input disabled type="text" value={education.year} className="mt-2"/>
            <div className="mt-2 w-[95vh]">
              {education.work_done.split('.').map((line, index) => (
                line.trim() !== '' && <li key={index}>{line.trim()}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
          Experience
        </h4>
        {user.exp.map((experience, index) => (
          <div key={index}>
            <Input disabled type="text" value={experience.company} className="mt-2"/>
            <Input disabled type="text" value={experience.role} className="mt-2"/>
            <Input disabled type="text" value={experience.timePeriod} className="mt-2"/>
            <div className="mt-2 w-[95vh]">
              {experience.description.split('.').map((line, index) => (
                line.trim() !== '' && <li key={index}>{line.trim()}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
