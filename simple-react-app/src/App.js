import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboardComponents/dashboard.js';
import AppBar from './components/appBarComponents/appBar.js';
import Profile from './components/profileComponents/profile.js';
import MyApplications from './components/myApplicationsComponents/myApplications';
import MyProjects from './components/myProjectsComponents/myProjects.js';
import Settings from './components/registrationComponents/settings.js';
import ProjectForm from './components/newProjectComponents/newProjectForm.js';
import Signup from './components/registrationComponents/signup.js';
import Login from './components/registrationComponents/login.js';
import ProjectPage from './components/projectPageComponents/projectPage.js';
import EditProfileForm from './components/profileComponents/editProfileForm.js';

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="myApplications" element={<MyApplications />} />
              <Route path="myProjects" element={<MyProjects />} />
              <Route path="settings" element={<Settings />} />
              <Route path="projectForm" element={<ProjectForm />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="editProfileForm" element={<EditProfileForm />} />
              <Route path="projectPage" element={<ProjectPage />} />
              <Route path="*" element={<h1>404</h1>} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
