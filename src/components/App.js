import React from 'react';
import {
    Route,
    BrowserRouter as Router, Routes,
    Navigate
  } from 'react-router-dom';import '../App.scss';
import Trends from '../case-tasks/trends/Trends';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import NavMenu from './nav/NavMenu';

function App() {
    const isLoggedIn = true;

    return (
        <Router>
        { isLoggedIn ? <NavMenu /> : null }
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/" element={<Navigate to={isLoggedIn ? "/trends" : "/login" } replace />}/> 
        </Routes>
        </Router>
    );
}

export default App;