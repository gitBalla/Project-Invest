import React from 'react';
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import './App.css';
import Dashboard from './components/dashboardComponents/dashboard.js';
import Profile from './components/profile.js';
import Application from './components/application';
import AppBar from './components/appBarComponents/appBar.js';


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="application" element={<Application />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
