import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const staffInfo = {
    Id: "1",
    PublicId: "87959863425",
    FirstName: "First",
    MiddleNameInitial: "I",
    LastName: "Last",
    DateOfBirth: "10/16/1998",
    Gender: "Male",
    Address: "14522 52nd PL W",
    DriverLicenseNumber: "ERH7654",
    SSN: "Yes",
    Phone: "425-000-0000",
    DateStarted: "01/02/2019",
    EmergencyContacts: [
        {
            FirstName: "EC First Name",
            LastName: "EC Last Name",
            Relationship: "Brother",
            PhoneNumber: "206-887-6266",
            Email: "email@gmail.com"
        }
    ],
    RequiredDocuments: [
        {
            DocumentId: '1',
            DocumentName: 'Document 1',
            AddedDate: '8/26/2010'
        },
        {
            DocumentId: '3',
            DocumentName: 'Document 3',
            AddedDate: '8/26/2010'
        }
    ]
}
const requiredDocuments = [
    {
        ID: '1',
        PublicId: '987625462643',
        DocumentName: 'Document 1',
        Description: 'Description',
        DocumentStatus: 'Required'
    },
    {
        ID: '2',
        PublicId: '958715914134',
        DocumentName: 'Document 2',
        Description: 'Description',
        DocumentStatus: 'Required'
    },
    {
        ID: '3',
        PublicId: '9876145516134',
        DocumentName: 'Document 3',
        Description: 'Description',
        DocumentStatus: 'Required'
    },
    {
        ID: '4',
        PublicId: '51141351647987',
        DocumentName: 'Document 4',
        Description: 'Description',
        DocumentStatus: 'Optional'
    }
]

const StaffInfo = () => {
    const [staffProfile] = useState(staffInfo);
    const [documents] = useState(requiredDocuments);
    return (
        <div className='main-content'>
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
                <div className="catagoryTitle"> Medical History </div>
                {documents.map(doc => {
                    return (
                        <div className='documentList'>
                            {doc.DocumentName}: &nbsp;
                            {staffProfile && staffProfile.RequiredDocuments.some(reqDoc => reqDoc.DocumentId === doc.ID) ? 'V' : 'X'}
                        </div>
                    );
                })}
            </div>
            <div className="commonButtonDiv">
                <Link to={`/staffForm/${staffProfile.PublicId}`} className="commonButton"> Update </Link>
            </div>
        </div>
    );
}

export default StaffInfo;