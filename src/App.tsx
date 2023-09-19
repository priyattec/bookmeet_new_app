import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        

//page imports
import LoginLanding from './pages/LoginLanding/loginLanding';
import NonSSOLogin from './pages/LoginLanding/nonSSOLogin';
import MainPage from './pages/MainPage/mainPage';
import RoomPage from './pages/RoomPage/RoomPage';
function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<LoginLanding />} />
        <Route path = '/nonssologin' element = {<NonSSOLogin />} />
        <Route path = '/MainPage' element = {<MainPage />} />
        <Route path = '/room/:roomIndex' element={<RoomPage />} />
      </Routes> 
    </div>
    
  );
}

export default App;
