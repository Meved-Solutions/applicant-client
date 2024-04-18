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


const Profile = () => {

  const [user,setUser] = useState({
    "name" : "Dilpreet Grover",
    "email" : "dilpreetgrover2@gmail.com",
    "phone" : "+918287645453",
    "lookingFor" : "Internships",
    "location" : {
      "name" : "New Delhi",
      "state" : "Delhi",
      "country" : "India",
    },
    "bio" : "As a software developer with a fervent passion for learning and staying at the forefront of new technologies, I am dedicated to contributing my skills to both open-source initiatives and real-world projects. My commitment to continuous improvement is not only evident in my technical pursuits but also in my desire to connect with fellow professionals. I thrive on building meaningful relationships within the tech community, fostering collaborations, and sharing knowledge. With a solid foundation in software development and an unwavering enthusiasm for growth, I am poised to tackle challenges and make impactful contributions to the ever-evolving world of technology. Let's connect and embark on this exciting journey together!",
    "gender" : "Male",
    "cctc" :  "N/A",
    "ectc" : "3",
    "noticePeriod" : "N/A",
    "quota" : "General",
    "domain" : "Software",
    "edu" : [
      {
        "institute_name" : "YMCA Faridabad",
        "type" : "Bachleors",
        "marks" : "7.81",
        "year" : "2025",
        "workDone" : "N/A"
      }
    ],
    "exp" : [
      {
        "company" : "GeeksforGeeks",
        "role" : "Student Coordinator",
        "timePeriod" : "April 2022 - March 2023",
        "description" : "Orchestrated and coordinated marketing events, contributing significantly to the success of the college's technical fest, Digi Fiesta. Played a key role in securing sponsorship for the event and successfully invited Sandeep Jain Sir to deliver an insightful tech talk at the university. Established connections with a diverse range of tech enthusiasts and industry experts, enhancing networking opportunities and contributing to the dynamic tech community."
      },
      {
        "company" : "Training & Placement Cell,YMCA",
        "role" : "Student Coordinator",
        "timePeriod" : "December-2022 - Present",
        "description" : "Coordinated and supervised the orchestration of multiple companies' placement drives. Developed an in-house test-taking platform in collaboration with IT team members, offering assistance to peers in their placement preparation based on past drives. Responsible for the design and creation of posters and social media content for placement notifications and updates."
      },
      {
        "company" : "SimplifyNote",
        "role" : "Full-Stack Developer Intern",
        "timePeriod" : "July 2023 - September 2023",
        "description" : "Revamped the product's landing page, providing it with a contemporary aesthetic and an enhanced user interface for a more modern appeal. Spearheaded the incorporation of a speech-to-text feature, significantly improving the product's user-friendliness and robustness. Orchestrated the integration of Stripe & RazorPay using MongoDB & Node.js, into the product's functionality, establishing an optimized payment gateway and initiating a consistent revenue stream."
      },
    ],
    "linkedInProfile" : "https://www.linkedin.com/in/dilpreet-grover-17726b224",
    "otherLinks" : "https://dilpreetgrover.vercel.app/",
    "resume"  : "https://res.cloudinary.com/db6fheiii/image/upload/v1711287040/rq99tnhknndftjytf4qx.pdf",
  })
  const [newResume,setNewResume] = useState<File | null>(null);

  const handleDownload = async () => {
    const response = await fetch(user.resume);
    console.log(response);
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
  
    // Extract the file extension from the URL
    const fileExtension = user.resume.split('.').pop();
  
    // Use the file extension when setting the 'download' attribute
    link.setAttribute('download', `file.${fileExtension}`);
  
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="px-10 py-4 w-full " style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Profile
      </h1>
      <div className="flex flex-row mt-6 gap-6">
          <div>
            <div>
              <img src="https://avatars.githubusercontent.com/u/92905896?v=4" className="w-56 rounded-full"/>
            </div>
            <div className="flex flex-row mt-6 justify-center gap-4">
                <a href={user.linkedInProfile}>
                  <FaLinkedin size={25}/>
                </a>
                <a href={user.otherLinks}>
                  <IoIosLink size={25}/>
                </a>
                <div onClick={handleDownload}>
                  <IoMdDownload size={25} />
                </div>
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
                        Looking for
                      </h4>
                      <Input type="text" value={user.lookingFor} onChange={(e) => setUser({ ...user, "lookingFor": e.target.value })} className="mt-2"/>
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
                  Looking for
                </h4>
              <Input disabled type="text" value={user.lookingFor} className=" mt-2"/>
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
              {education.workDone.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
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
