import React from 'react';
import { Form, Button } from 'semantic-ui-react';

import './index.css';
import * as data from '../source/mockData';

// const incidentList = data.incidentList;
const incident_level = data.incident_level;
const report_to = data.report_to;
const reported_by = data.reported_by;
const options = data.residents.map(m => ({key: m.PublicId, text: m.FirstName + ' ' + m.LastName, value: m.PublicId}));

const Incidence = () => {
    // const [incidents] = useState(incidentList);
    return (
        <div className='main-content '>
            <div className='incidentForm'>
                <Form>
                    <Form.Input label='Incident Title' placeholder='title' />
                    <Form.TextArea label='Description' placeholder='Tell us what happen...' />
                    <Form.TextArea label='Action taken/Treatment' placeholder='What did you do?' />
                    <Form.Select label='Medicine Name' options={options} placeholder='Medications' />
                    <Form.Input label='Date' placeholder='mm/d/yyyy' />
                    <Form.Select label='Incident Level' options={incident_level} placeholder='Medications' />
                    <Form.Select label='Reported To' options={report_to} placeholder='Medications' />
                    <Form.Select label='Reported By' options={reported_by} placeholder='Medications' />
                    <Button type='submit'>Add</Button>
                </Form>                
            </div>
            {/* <div className='incidentList'>
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
            </div>*/}
        </div>
    );
}

export default Incidence