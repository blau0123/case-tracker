import React, {useState, useEffect} from 'react';
import {
    Route,
    BrowserRouter as Router, Routes,
    Navigate
  } from 'react-router-dom';import '../App.scss';
import Trends from '../case-tasks/trends/Trends';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import NavMenu from './nav/NavMenu';
import { CaseTask } from '../types/types';

function App() {
    const [caseTaskData, setCaseTaskData] = useState<CaseTask[] | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // didMount effect to fetch data
    useEffect(() => {
        // Call util func to fetch case task data via firebase
        setCaseTaskData([{
            teamName: 'Dev-IH-ETL',
            id: 'CSTASK12345',
            defect_created: true
        }, {
            teamName: 'Dev-IH-ETL',
            id: 'CSTASK76323',
            defect_created: false,
            redirected_team: "Dev-IH-Core"
        }, {
            teamName: 'Dev-IH-ETL',
            id: 'CSTASK23423',
            defect_created: false,
            redirected_team: "Dev-IH-Core"
        }]);
        setIsLoggedIn(true);
    }, []);

    return (
        <Router>
        { isLoggedIn ? <NavMenu /> : null }
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/trends" element={<Trends data={caseTaskData} />} />
            <Route path="/" element={<Navigate to={isLoggedIn ? "/trends" : "/login" } replace />}/> 
        </Routes>
        </Router>
    );
}

export default App;