import { useState} from "react";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Applications from './pages/Applications';
import Messages from './pages/Messages';
import OnBoarding from "./pages/Onboarding";
import Auth from "./pages/Auth";


const Navigate = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return(
    <div>
      {isAuthenticated &&
        <div className="flex flex-row py-2">
          <div>
            <Sidebar/>
          </div>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/applications' element={<Applications/>}/>
          <Route path='/messages' element={<Messages/>}/>
        </Routes>
        </div>
      }
      {
        !isAuthenticated &&
            <Routes>
              <Route path="/onboarding" element={<OnBoarding/>} />
              <Route path="/auth" element={<Auth/>}/>
            </Routes>
      }
    </div>
  )
}





const App = () => {
  return(
    <Router>
      <Navigate/>
    </Router>
  );
}
export default App
