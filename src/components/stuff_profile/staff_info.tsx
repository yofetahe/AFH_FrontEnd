import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import * as data from '../source/mockData';

import './staff_info.css';

const staffInfo = data.staffInfo;

const requiredDocuments = data.DocumentsList;

const StaffInfo = () => {
    const [staffProfile] = useState(staffInfo);
    const [documents] = useState(requiredDocuments);
    return (
        <div className='main-content'>
            <div className="commonButtonDiv">
                <Link to={`/staffUpdate/${staffProfile.PublicId}`} className="commonButton"> Update </Link>
            </div>
            <div className='residentData'>
                <div className="catagoryTitle"> Personal Info </div>
                <div>
                    <p> <span>Full Name:</span> {staffProfile.FirstName} {staffProfile.MiddleNameInitial} {staffProfile.LastName} </p>
                    <p> <span>Gender:</span> {staffProfile.Gender} </p>
                    <p> <span>Date of Birth:</span> {staffProfile.DateOfBirth} </p>
                    <p> <span>Phone:</span> {staffProfile.Phone} </p>
                    <p> <span>Address:</span> {staffProfile.Address} </p>
                    <p> <span>SSN:</span> {staffProfile.SSN} </p>
                    <p> <span>Date Started:</span> {staffProfile.DateStarted} </p>
                </div>
            </div>
            <div className='residentData'>
                <div className='catagoryTitle'>Emergency Contacts</div>
                {staffProfile.EmergencyContacts.map(ec => {
                    return (
                        <div>
                            <p> <span>Name:</span> {ec.FirstName} {ec.LastName} </p>
                            <p> <span>Relationship:</span> {ec.Relationship} </p>
                            <p> <span>Phone Number:</span> {ec.PhoneNumber} </p>
                            <p> <span>Email:</span> {ec.Email} </p>
                        </div>
                    );
                })}
            </div>
            <div className='residentData'>
                <div className="catagoryTitle"> Resident's Document </div>
                {documents.map(doc => {
                    return (
                        <div className='documentList'>
                            {doc.DocumentName}: &nbsp;
                            {staffProfile && staffProfile.RequiredDocuments.some(reqDoc => reqDoc.DocumentId === doc.Id) ? <Icon color='blue' name='check' /> : <Icon color='red' name='times rectangle' />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StaffInfo;