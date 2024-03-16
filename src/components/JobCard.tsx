import { useState } from 'react';
import { IoIosPeople, IoIosBriefcase, IoIosCash } from 'react-icons/io';
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from './ui/input';
import InputDropdown from './ui/InputDropdown';
import { InputFile } from './ui/inputform';



interface JobData {
  companyName: string;
  domain: string;
  roleName: string;
  companySize: string;
  experienceNeeded: string;
  baseStipend: string;
}



interface JobCardProps {
  job: JobData;
}

const JobApplicationForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('Select Gender');
    const [selectedFile, setSelectedFile] = useState(null);
    const [experiences, setExperiences] = useState([{ company: '', role: '', description: '' }]);
    const [education, setEducation] = useState([{ institute_name: '', marks: '', year: '', work_done: '' }]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        console.log('Location:', location);
        console.log('Years of Experience:', yearsOfExperience);
        console.log('Bio:', bio);
        console.log('Gender:', gender);
        console.log('Selected File:', selectedFile);
        console.log('Experiences:', experiences);
        console.log('Education:', education);
        // handle form submission here
    };

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleYearsOfExperienceChange = (e) => setYearsOfExperience(e.target.value);
    const handleBioChange = (e) => setBio(e.target.value);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };
      
    const handleExperienceChange = (index, field, value) => {
        const newExperiences = [...experiences];
        newExperiences[index][field] = value;
        setExperiences(newExperiences);
      };
      
      const addExperience = () => {
        setExperiences([...experiences, { company: '', role: '', description: '' }]);
      };

      const handleEducationChange = (index, field, value) => {
        const newEducation = [...education];
        newEducation[index][field] = value;
        setEducation(newEducation);
      };

      
        const addEducation = () => {
            setEducation([...education, { institute_name: '', marks: '', year: '', work_done: '' }]);
        };
  
  
    // const onSubmit = (data) => {
    //   console.log(data);
    // };

    return (
        <div className='px-8  overflow-auto custom-scrollbar h-[60vh]'>
            <div>
                <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                    Email
                </h4>
                <Input placeholder='Enter your email' value={email} onChange={handleEmailChange}/>
            </div>
            <div>
                <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                    Name
                </h4>
                <Input placeholder='Enter your name' value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                    Phone Number
                </h4>
                <Input placeholder='Enter your phone number' value={phoneNumber} onChange={handlePhoneNumberChange}/>
            </div>
            <div className="flex flex-row gap-24 items-center">
                <div> 
                    <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                        Location
                    </h4>
                    <Input placeholder='Enter your location'  className='w-80' value={location} onChange={handleLocationChange}/>
                </div>
                <div>
                    <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                    Years of Experience
                    </h4>
                    <Input placeholder='Enter your years of experience' className='w-80' value={yearsOfExperience} onChange={handleYearsOfExperienceChange}/>
                </div>
                <div className="w-1/2">
                    <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                    Gender
                    </h4>
                    <InputDropdown 
                    value={gender} 
                    options={['Male', 'Female', 'Others']} 
                    onChange={setGender} 
                    />
                </div>
            </div>
            <div>
                <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                    Bio
                </h4>
                <textarea className='w-full h-48 rounded-md outline outline-gray-200 outline-2' value={bio} onChange={handleBioChange}/>
            </div>
                <div className='w-full'>
                    <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                       Resume
                    </h4>
                    <InputFile onChange={(e) => handleFileChange(e)} />
                </div>
                {experiences.map((experience, index) => (
                <div key={index} className='w-full'>
                    <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                    Experience {index + 1}
                    </h4>
                    <Input placeholder='Company' value={experience.company} onChange={(e) => handleExperienceChange(index, 'company', e.target.value)} className='my-4' />
                    <Input placeholder='Role' value={experience.role} onChange={(e) => handleExperienceChange(index, 'role', e.target.value)} className='my-4' />
                    <textarea className='w-full h-48 rounded-md outline outline-gray-200 outline-2 py-2 px-2 mb-2' placeholder='Description' value={experience.description} onChange={(e) => handleExperienceChange(index, 'description', e.target.value)} />
                </div>
                ))}
                 <Button onClick={addExperience}>Add Experience</Button>
                 {education.map((edu, index) => (
                    <div key={index} className='w-full'>
                        <h4 className="scroll-m-20 my-2 font-semibold tracking-tight">
                        Education {index + 1}
                        </h4>
                        <Input placeholder='Institute Name' value={edu.institute_name} onChange={(e) => handleEducationChange(index, 'institute_name', e.target.value)} className='my-4'/>
                        <Input placeholder='Marks' value={edu.marks} onChange={(e) => handleEducationChange(index, 'marks', e.target.value)} className='my-4' />
                        <Input placeholder='Year' value={edu.year} onChange={(e) => handleEducationChange(index, 'year', e.target.value)} className='my-4' />
                        <textarea placeholder='Work Done' value={edu.work_done} onChange={(e) => handleEducationChange(index, 'work_done', e.target.value)} className='w-full h-48 rounded-md outline outline-gray-200 outline-2 py-2 px-2 mb-2'/>
                    </div>
                    ))}
                    <Button onClick={addEducation}>Add Education</Button>
                    <DrawerFooter className='overflow-auto'>
                    <Button onClick={handleSubmit}>Submit</Button>
                    </DrawerFooter>
      </div>
    );
  };
  

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-gray-200 h-24 rounded-md pl-2 pr-4 pt-1">
      <div className="flex flex-row justify-between">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 text-gray-900">
          {job.companyName}
        </h2>
        <h3 className="scroll-m-20 font-medium tracking-tight text-gray-600">
          {job.domain}
        </h3>
      </div>
      <h3 className="scroll-m-20 font-medium tracking-tight text-gray-600">
        {job.roleName}
      </h3>
      <div className="flex flex-row items-center justify-between text-gray-500 pb-2">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-center gap-1">
            <IoIosPeople />
            <h4 className="scroll-m-20 text-sm tracking-tight">
              Company Size: {job.companySize}
            </h4>
          </div>
          <div className="flex flex-row items-center gap-1">
            <IoIosBriefcase /> 
            <h4 className="scroll-m-20 text-sm tracking-tight">
              Experience Needed: {job.experienceNeeded}
            </h4>
          </div>
          <div  className="flex flex-row items-center gap-1">
            <IoIosCash />
            <h4 className="scroll-m-20 text-sm tracking-tight">
              Base Stipend: {job.baseStipend}
            </h4>
          </div>
        </div>
        <Drawer>
          <DrawerTrigger>
            <Button size="sm">Apply</Button>
          </DrawerTrigger>
          <DrawerContent >
            <DrawerHeader>
              <DrawerTitle>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Job Application
              </h3>
              </DrawerTitle>
              <DrawerDescription>Please fill out the form below to apply.</DrawerDescription>
            </DrawerHeader>
             <div>
                <JobApplicationForm />
             </div>

          </DrawerContent>
        </Drawer>  
      </div>
    </div>
  );
};

export default JobCard;