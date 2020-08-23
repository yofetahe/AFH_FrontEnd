import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './resident_info.css';
import DefaultPhoto from '../../images/defaultPhoto.png';

const residentData = {
    ID: "1",
    PublicId: "0205284052462",
    FirstName: "James",
    MiddleNameInitial: "M",
    LastName: "Thomas",
    DateOfBirth: "10/04/1945",
    PlaceOfBirth: "Alaska",
    PhotoPath: "",
    EmergencyContacts: [
        {
            FirstName: "EC First Name",
            LastName: "EC Last Name",
            Relationship: "Brother",
            PhoneNumber: "206-887-6266",
            Email: "email@gmail.com"
        }
    ]
}

const ResidentInfo = (props: any) => {

    const [residentInfo, setResidentInfo] = useState(residentData);

    return (
        <div className='main-content'>
            <div className='residentPhoto'>
                <img src={DefaultPhoto} alt='pic' />
                <div>
                    <Link to={`/updateResident/${residentInfo.ID}`}> Update </Link>
                </div>
            </div>
            <div className='residentData'>
                <p> <span>Full Name:</span> {residentInfo.FirstName} {residentInfo.MiddleNameInitial} {residentInfo.LastName} </p>
                <p> <span>Date of Birth:</span> {residentInfo.DateOfBirth} </p>
                <p> <span>Place of Birth:</span> {residentInfo.PlaceOfBirth} </p>
                <div className='emergencyContact'>Emergency Contacts</div>
                {residentInfo.EmergencyContacts.map(ec => {
                    return (
                        <div className='emergencyContactInfo'>
                            <p> <span>Name:</span> {ec.FirstName} {ec.LastName} </p>
                            <p> <span>Relationship:</span> {ec.Relationship} </p>
                            <p> <span>Phone Number:</span> {ec.PhoneNumber} </p>
                            <p> <span>Email:</span> {ec.Email} </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ResidentInfo;