import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as typeSrc from '../source/typeSource';
import { Icon, Button } from 'semantic-ui-react';

import './medication.css';
import DefaultPhoto from '../../images/defaultPhoto.png';
import * as data from '../source/mockData';

const residentsList: typeSrc.Resident[] = data.residents;
const residentsMedications: typeSrc.residentsMedications[] = data.residentsMedications;

const Medication = () => {

    const [residents] = useState(residentsList);
    const [medications] = useState(residentsMedications);

    const today = new Date();
    const todayDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    const currentHour = today.getHours() + ":" + today.getMinutes();

    return (
        <div className='main-content'>
            <div className='dateTimeBar'>
                <span>Date: {todayDate} (Time: {currentHour})</span>
            </div>
            {residents.map((resident, index) => {
                return (
                    <div key={resident.ID} className='medicationContent'>
                        <div key={'pic_' + index} className='residentPicture'>
                            <img src={DefaultPhoto} alt='pic' />
                        </div>
                        <div key={'info_' + index} className='residentMedInfo'>
                            <div key={'perInfo_' + index} className='personalInfoBlock'>
                                <span id='name'> Name: {resident.FirstName} {resident.MiddleNameInitial} {resident.LastName} </span>
                                <span id='dob'> DOB: {resident.DateOfBirth} </span>
                                <span id='gender'> Gender: {resident.Gender} </span>
                                <span id='viewLink'>
                                    <Link to={{
                                        pathname: `/medication/distribution/${resident.PublicId}`,
                                        state: { resData: resident }
                                    }}>                                        
                                        <Button icon>
                                            <Icon color='teal' name='sync alternate' />
                                        </Button>
                                    </Link>
                                    <Link to={{
                                        pathname: `/medication/${resident.PublicId}`,
                                        state: { resData: resident }
                                    }}>
                                        <Button icon>
                                            <Icon color='teal' name='add' />
                                        </Button>
                                    </Link>
                                </span>
                            </div>
                            <div key={'medInfo_' + index}>
                                {medications && medications
                                    .filter(x => x.ResidentId === resident.PublicId)
                                    .map(y => y.Medications)
                                    .map(z => {
                                        return z.filter(m => m.Status === 'Active')
                                            .map(med => {
                                                return (
                                                    <div key={med.Id} className='medicationList'>
                                                        <Icon color='teal' name='pills' />
                                                        {med.Name} ({med.Dose}) - {med.Type} {med.Time && ('(' + med.Time.map(t => (t)) + ')')}
                                                        {med.StartDate && med.EndDate && (' - from ' + med.StartDate + ' to ' + med.EndDate)} &nbsp;
                                                        <Link to={{
                                                            pathname: `/medication/${resident.PublicId}/${med.PublicId}`,
                                                            state: { resData: resident }
                                                        }}>
                                                            <Icon color='blue' name='edit' />                                                            
                                                        </Link>
                                                        <span className='terminateMedication'><Icon color='red' name='times rectangle' /></span>
                                                    </div>
                                                );
                                            })
                                    })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Medication