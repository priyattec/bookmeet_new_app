import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
//page imports
import LoginLanding from './pages/LoginLanding/loginLanding';
import NonSsoLogin from './pages/LoginLanding/nonSSOLogin';
import MainPage from './pages/mainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginLanding />} />
        <Route path = '/nonssologin' element = {<NonSsoLogin />} />
        <Route path = '/MainPage' element = {<MainPage />} />
      </Routes>

      
    </div>
  );
}

export default App;
