import React from 'react';
import '../../App.scss';
import './Trends.css';

function Trends() {
    const numberOfCases = 12;
    const numberOfDefects = 5;

    return (
        <div>
            <div id='trends-body'>
                <div className='card light' id='type-trends'>
                    <h2 className='trends-title'>Case task type trends</h2>
                </div>
                <div className='card light' id='other-trends'>
                    <h2 className='trends-title'>Other trends</h2>
                    <div id='other-trends-body'>
                        <div className='card dark trends-text'>
                            <p>Number of case tasks sent to other teams: {numberOfCases}</p>
                            <p>Most teams cases were redirected to</p>
                        </div>
                        <div className='card dark trends-text'>
                            <p>Defects created based on case tasks: {numberOfDefects}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trends;
