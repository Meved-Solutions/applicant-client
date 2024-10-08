import { Authenticated, User } from "@/atom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const setAuthenticated = useSetRecoilState(Authenticated);
  const setUser = useSetRecoilState(User);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
   try {
      e.preventDefault();
      const data = {
        email,
        password,
      };

      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/applicant/login`, data);

      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("_id", res.data.eapplicant._id);
      setAuthenticated(true);
      setUser(res.data.eapplicant);
      navigate('/');
      window.location.reload();
   } catch (error) {
    console.log(error);
    
   }
  };

  const handleNavigateToOnBoarding = () => {
    navigate('/onboarding');
  };

  return (
    <div className="bg-gray-200 w-screen h-screen">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center min-h-screen">
          <div className="bg-white w-96 py-4 rounded-md shadow-md">
            <div>
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight flex flex-row justify-center my-8">
                Meved
              </h1>
            </div>
            <div onClick={handleNavigateToOnBoarding} className="flex flex-row justify-center text-sm font-medium text-black hover:text-gray-500">
              New to the Platform?
            </div>
            <div className="px-8">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Email
              </h4>
              <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="mt-2" />
            </div>
            <div className="px-8 mt-4">
              <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
                Password
              </h4>
              <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" className="mt-2" />
              <div className="flex flex-row justify-end items-center gap-2 my-2 mr-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />} Password
              </div>
            </div>
            <div className="mt-4 flex flex-row justify-center">
              <Button onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;