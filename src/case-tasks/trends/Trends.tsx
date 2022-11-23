import React from 'react';
import '../../App.scss';
import { CaseTaskListData } from '../../types/types';
import './Trends.css';

function Trends(props:CaseTaskListData) {
    const {data: caseTaskData} = props;
    if (!caseTaskData)
        return null;

    const numberOfCases = caseTaskData.filter(caseTask => caseTask.redirected_team)?.length;
    const numberOfDefects = caseTaskData.filter(caseTask => caseTask.defect_created)?.length;

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
