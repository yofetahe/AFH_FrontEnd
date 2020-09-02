import React, { useState } from 'react';

import './index.css';

const incidentList = [
    {
        id: 1,
        public_id: "945624576241",
        incident_title: "Fall down",
        description: "fall from chair",
        careGiver_action: "hold ice on the area",
        resident_id: "987959567364",
        resident_name: "John Kris",
        incident_date: "8/29/2020",
        incident_level: "Minor",
        incident_pictures_path: [
            "path1",
            "path2"
        ],
        createBy: "2",
        createDate: "8/29/2020",
        reportedTo: "Tenagne Ashenafi",
        reportedBy: "Phone"
    },
    {
        id: 2,
        public_id: "945624576242",
        incident_title: "Fall down",
        description: "fall from chair",
        careGiver_action: "hold ice on the area",
        resident_id: "987959567364",
        resident_name: "John Kris",
        incident_date: "8/3/2020",
        incident_level: "Moderate",
        incident_pictures_path: [
            "path1",
            "path2"
        ],
        createBy: "1",
        createDate: "8/3/2020",
        reportedTo: "Sirgut Ashenafi",
        reportedBy: "paper"
    }
]

const incident_level = [
    "Minor", "Moderate", "Serious", "Severe", "Critical", "Maximal"
]

const report_to = [
    "Sirgut Ashenafi", "Tenagne Ashenafi"
]

const reported_by = [
    "Phone", "Written"
]

const Incidence = () => {
    const [incidents] = useState(incidentList);
    return (
        <div className='main-content external-div'>
            <div className='incidentForm'>
                <form>
                    <div>
                        <label>Incident Title</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Action/Treatment</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Resident Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Incident Level</label>
                        <select id="incidentLevel">
                            <option value='-'></option>
                            {incident_level && incident_level.map(incident => {
                                return <option id={incident} value={incident}>{incident}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Reported To</label>
                        <select id="reportedTo">
                            <option value='-'></option>
                            {report_to && report_to.map(report => {
                                return <option id={report.trim()} value={report}>{report}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Reported By</label>
                        <input type="text" name="reportedBy" list="reportedBy" />
                        <datalist id="reportedBy">
                            {reported_by && reported_by.map(report => {
                                return <option id={report} value={report} />
                            })}
                        </datalist>
                    </div>
                    <input type='submit' value='Add' className='commonButton' />
                </form>
            </div>
            <div className='incidentList'>
                {incidents && incidents
                    .sort(function (a, b) {
                        if (new Date(a.incident_date) < new Date(b.incident_date)) { return 1; }
                        if (new Date(a.incident_date) > new Date(b.incident_date)) { return -1; }
                        return 0;
                    })
                    .map(incident => {
                        return (
                            <div key={incident.id} className='incidentContent'>
                                <u>Resident: {incident.resident_name} &nbsp; Date: {incident.incident_date} &nbsp; Level: {incident.incident_level}</u> <br />
                                What heppen? -<i>{incident.incident_title}</i> <br />
                                Description: <i>{incident.description}</i> <br /> Actions: <i>{incident.careGiver_action} </i> <br />
                                Reported To: <i>{incident.reportedTo}</i> &nbsp; Reported By: <i>{incident.reportedBy}</i> <br />
                                <div className='updateLink'>Update</div>
                            </div>
                        );
                    })}
                <div>Pagination Place holder - 1 2</div>
            </div>
        </div>
    );
}

export default Incidence