import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
//page imports
import LoginLanding from './pages/LoginLanding/loginLanding';
import NonSsoLogin from './pages/LoginLanding/nonSSOLogin';
import MainPage from './pages/MainPage/mainPage';
import RoomPage from './pages/RoomPage/RoomPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginLanding />} />
        <Route path = '/nonssologin' element = {<NonSsoLogin />} />
        <Route path = '/MainPage' element = {<MainPage />} />
        <Route path = '/room/:roomIndex' element={<RoomPage />} />
      </Routes>

      
    </div>
  );
}

export default App;
