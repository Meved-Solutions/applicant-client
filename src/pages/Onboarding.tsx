import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import axios from "axios"
import { useSetRecoilState } from "recoil";
import { Authenticated, User } from "@/atom";

const OnBoarding = () => {

  const navigate = useNavigate();
  const setAuthenticated = useSetRecoilState(Authenticated);
  const setUser = useSetRecoilState(User);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setConfirmShowPassword] = useState(false);
  const [locationName, setLocationName] = useState('');
  const [locationState, setLocationState] = useState('');
  const [locationCountry, setLocationCountry] = useState('');
  const [image,setImage] = useState<File | null>(null);
  const [resume,setResume] = useState<File | null>(null);
  const [bio , setBio] = useState('');
  const [gender , setGender] = useState('');
  const [ctc,setCTC] = useState('');  
  const [exctc,setExCTC] = useState('');
  const [noticePeriod,setNoticePeriod] = useState('');
  const [quota,setOuata] = useState('');
  const [domain , setDomain] = useState('');
  const [education, setEducation] = useState([{ institute_name: '', type:'' , specialization:'' ,marks: '', year: '', work_done: '' }]);
  const [experience, setExperience] = useState([{ company: '', timePeriod : '', role: '', description: '' }]);
  const [linkedIn,setLinkedIn] = useState('');
  const [portfolio,setPortfolio] = useState('');
  const [otherLinks,setOtherLinks] = useState('');
  const [ph , setPh] = useState(false);
  
  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const addEducation = () => {
    setEducation([...education, { institute_name: '',type:'', specialization:'',marks: '', year: '', work_done: '' }]);
  };

  const addExperience = () => {
    setExperience([...experience, { company: '', timePeriod : '', role: '', description: '' }]);
  };


  const handleNavigateToAuth = () => {
    navigate('/auth')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      alert("Passwords Don't Match")
    }

    const data = {
      name : name,
      email : email,
      phone : phone,
      password : password,
      location : {
        name : locationName,
        state : locationState,
        locationCountry : locationCountry
      },
      image,
      resume,
      bio : bio,
      gender : gender,
      currentSalary : ctc,
      expectedSalary : exctc,
      noticePeriod : noticePeriod,
      quota : quota,
      domain : domain,
      education : education,
      experience : experience,
      linkedInProfile :linkedIn,
      personalWebsite :portfolio,
      otherLinks : otherLinks,
      physicallyHandiCapped : ph,
    };  
    console.log(data);
    

    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/applicant/createApplicant`,data,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  
    console.log(res.data);
    localStorage.setItem("token" ,res.data.token );
    localStorage.setItem("_id" ,res.data.applicant._id );
    setAuthenticated(true);
    setUser(res.data.applicant)
    navigate('/');
  };

  return (
    <div className="bg-gray-200 w-screen h-screen">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center min-h-screen">
        <div className="bg-white w-[80vh] py-4 rounded-md shadow-md h-[70vh] overflow-auto">
          <div>
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight flex flex-row justify-center my-8">
              Meved Onboarding
            </h1>
          </div>
          <div onClick={handleNavigateToAuth} className="flex flex-row justify-center text-sm font-medium text-black hover:text-gray-500">Already Resigtered?</div>
          <div className="px-8">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Name
              </h4>
            <Input  type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Email
              </h4>
            <Input  type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Name" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Phone Number
              </h4>
            <Input  type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter Your Phone Number" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Image
              </h4>
              <Input  type="file" onChange={(event)=>{setImage(event.target.files ? event.target.files[0] : null)}} placeholder="Enter Your Org Name" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Resume
              </h4>
              <Input type="file" onChange={(event)=>{setResume(event.target.files ? event.target.files[0] : null)}} placeholder="Enter Your Org Name" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Password
              </h4>
              <Input type={showPassword ? "text" : "password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Your Password" className="mt-2"/>
              <div className="flex flex-row justify-end items-center gap-2 my-2 mr-2" onClick={() => setShowPassword(!showPassword)}>{showPassword ?  <FaEyeSlash/> : <FaEye/>} Show Password</div>
          </div>
          <div className="px-8 mt-6">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Confirm Password
              </h4>
              <Input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Your Password" className="mt-2"/>
            <div className="flex flex-row justify-end items-center gap-2 my-2 mr-2" onClick={() => setConfirmShowPassword(!showConfirmPassword)}>{showConfirmPassword ?  <FaEyeSlash/> : <FaEye/>} Show Password</div>
          </div>
          <div className="px-8 mt-4 gap-4">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Location
                </h4>
                <Input  
                    type="text" 
                    value={locationName} 
                    onChange={(e) => setLocationName(e.target.value)} 
                    placeholder="Enter Location Name" 
                    className="mt-2"
                />
                <Input  
                    type="text" 
                    value={locationState} 
                    onChange={(e) => setLocationState(e.target.value)} 
                    placeholder="Enter Your State" 
                    className="mt-2"
                />
                <Input  
                    type="text" 
                    value={locationCountry} 
                    onChange={(e) => setLocationCountry(e.target.value)} 
                    placeholder="Enter Your Country" 
                    className="mt-2"
                />
            </div>
            <div className="px-8 mt-4">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                    Your Bio
                  </h4>
                  <textarea value={bio} onChange={(e)=>{setBio(e.target.value)}} placeholder="Enter Your Bio" className="text-xs h-20 px-1 py-1 mt-2 w-full rounded-sm shadow-sm ring-1 ring-gray-200"/>
            </div>
            <div className="px-8 mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Physically Handicapped
                </h4>
                <Select onValueChange={(value)=>{setPh(value === "Yes" ?  true : false)}}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
          </div>
            <div className="px-8 mt-4">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight mb-2">
                    Gender
                  </h4>
                  <Select onValueChange={(value)=>{setGender(value)}}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div className="px-8 mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Current CTC (in LPA) (Write N/A if none)
                </h4>
              <Input  type="text" value={ctc} onChange={(e)=>{setCTC(e.target.value)}} placeholder="Enter Your Current CTC" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Notice Period (If any) (Write N/A if none)
                </h4>
              <Input  type="text" value={noticePeriod} onChange={(e)=>{setNoticePeriod(e.target.value)}} placeholder="Enter Your Current CTC" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Expected CTC (in LPA) 
                </h4>
              <Input  type="text" value={exctc} onChange={(e)=>{setExCTC(e.target.value)}} placeholder="Enter Your Expected CTC" className="mt-2"/>
          </div>
          <div className="px-8 mt-4">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight mb-2">
                    Quota
                  </h4>
                  <Select onValueChange={(value)=>{setOuata(value)}}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Quota" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="OBC">OBC</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="ST">ST</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div className="px-8 mt-4">
                  <h4 className="scroll-m-20 text-sm font-medium tracking-tight mb-2">
                    Domain
                  </h4>
                  <Select onValueChange={(value)=>{setDomain(value)}}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Quota" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Software">Software</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Management">Management</SelectItem>
                    <SelectItem value="Consultancy">Consultancy</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div>
            {education.map((edu, index) => (
              <div key={index} className='w-full px-8'>
                <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                  Education {index + 1}
                </h4>
                <Input placeholder='Institute Name' value={edu.institute_name} onChange={(e) => handleEducationChange(index, 'institute_name', e.target.value)} className='my-4'/>
                <Input placeholder='Type' value={edu.type} onChange={(e) => handleEducationChange(index, 'type', e.target.value)} className='my-4' />
                <Input placeholder='Specialization' value={edu.specialization} onChange={(e) => handleEducationChange(index, 'specialization', e.target.value)} className='my-4' />
                <Input placeholder='Marks' value={edu.marks} onChange={(e) => handleEducationChange(index, 'marks', e.target.value)} className='my-4' />
                <Input placeholder='Completion Year' value={edu.year} onChange={(e) => handleEducationChange(index, 'year', e.target.value)} className='my-4' />
                <textarea placeholder='Work Done' value={edu.work_done} onChange={(e) => handleEducationChange(index, 'work_done', e.target.value)} className='w-full h-48 rounded-md outline outline-gray-200 outline-2 py-2 px-2 mb-2'/>
              </div>
            ))}
            <Button className="ml-8" onClick={addEducation}>Add Education</Button>
          {experience.map((exp, index) => (
            <div key={index} className='w-full px-8'>
              <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                Experience {index + 1}
              </h4>
              <Input placeholder='Company' value={exp.company} onChange={(e) => handleExperienceChange(index, 'company', e.target.value)} className='my-4' />
              <Input placeholder='Role' value={exp.role} onChange={(e) => handleExperienceChange(index, 'role', e.target.value)} className='my-4' />
              <Input placeholder='Time Period' value={exp.timePeriod} onChange={(e) => handleExperienceChange(index, 'timePeriod', e.target.value)} className='my-4' />
              <textarea className='w-full h-48 rounded-md outline outline-gray-200 outline-2 py-2 px-2 mb-2' placeholder='Description' value={exp.description} onChange={(e) => handleExperienceChange(index, 'description', e.target.value)} />
              </div>
            ))}
            <Button className="ml-8" onClick={addExperience}>Add Experience</Button>
          </div>
          <div className="px-8 mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  LinkedInProfile
                </h4>
              <Input  type="text" value={linkedIn} onChange={(e)=>{setLinkedIn(e.target.value)}} placeholder="Linkedin Link" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Portfolio
                </h4>
              <Input  type="text" value={portfolio} onChange={(e)=>{setPortfolio(e.target.value)}} placeholder="Portfolio Link" className="mt-2"/>
          </div>
          <div className="px-8 mt-6">
                <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                  Other Links
                </h4>
              <Input  type="text" value={otherLinks} onChange={(e)=>{setOtherLinks(e.target.value)}} placeholder="Other Links(if any)" className="mt-2"/>
          </div>
            <Button className="w-full px-8 mt-2 flex flex-row justify-center" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnBoarding
