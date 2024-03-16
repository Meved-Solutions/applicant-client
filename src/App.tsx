import { useState, useEffect } from "react";


import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Applications from './pages/Applications';
import Messages from './pages/Messages';
import Auth from "./pages/Auth";
import LandingPage from "./pages/LandingPage";


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
              <Route path="/page" element={<LandingPage/>} />
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
