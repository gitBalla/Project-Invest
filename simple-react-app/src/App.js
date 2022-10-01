import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboardComponents/dashboard.js';
import AppBar from './components/appBarComponents/appBar.js';
import Profile from './components/pages/profile.js';
import MyApplications from './components/pages/myApplications';
import MyProjects from './components/pages/myProjects.js';
import Settings from './components/pages/settings.js';
import ProjectForm from './components/pages/projectForm.js';
import ApplicationForm from './components/pages/applicationForm.js';
import Signup from './components/pages/signup.js';
import Login from './components/pages/login.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="myApplications" element={<MyApplications />} />
            <Route path="myProjects" element={<MyProjects />} />
            <Route path="settings" element={<Settings />} />
            <Route path="projectForm" element={<ProjectForm />} />
            <Route path="applicationForm" element={<ApplicationForm />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
