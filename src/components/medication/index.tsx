import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as typeSrc from '../source/typeSource';
import { Icon } from 'semantic-ui-react'

import './index.css';
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
                <span className='dateSlot'>Date: {todayDate} </span>
                <span className='timeSlot'>Time: {currentHour}</span>
            </div>
            {residents.map(resident => {
                return (
                    <div key={resident.ID} className='medicationContent'>
                        <div className='residentPicture'>
                            <img src={DefaultPhoto} alt='pic' />
                        </div>
                        <div className='residentMedInfo'>
                            <div className='personalInfoBlock'>
                                <span id='name'> Name: {resident.FirstName} {resident.MiddleNameInitial} {resident.LastName} </span>
                                <span id='dob'> DOB: {resident.DateOfBirth} </span>
                                <span id='gender'> Gender: {resident.Gender} </span>
                                <span id='viewLink'>
                                    <Link to={`/medication/distribution/${resident.PublicId}`}>
                                        <Icon circular color='teal' name='triangle right' />
                                    </Link>
                                    <Link to={`/medication/add/${resident.PublicId}`}>
                                        <Icon circular color='teal' name='add' />
                                    </Link>
                                </span>
                            </div>
                            <div>
                                {medications && medications
                                    .filter(x => x.ResidentId === resident.PublicId)
                                    .map(y => y.Medications)
                                    .map(z => {
                                        return z.map(med => {
                                            return (
                                                <div className='medicationList'>
                                                    <Icon color='teal' name='pills' />
                                                    {med.Name} ({med.Dose}) - {med.Type} {med.Time && ('(' + med.Time.map(t => (t)) + ')')}
                                                    {med.StartDate && med.EndDate && (' - from ' + med.StartDate + ' to ' + med.EndDate)} &nbsp;
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