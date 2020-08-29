import React, { useState } from 'react';

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

const Documents = () => {
    const [documents] = useState(requiredDocuments);
    const [staffProfile] = useState(staffInfo);
    return (
        <div className='main-content'>
            <div className="formCatagory">Required Documents</div>
            {documents.map(doc => {
                return (
                    <div className='documentList'>
                        {doc.DocumentName}: &nbsp;
                        {staffProfile && staffProfile.RequiredDocuments.some(reqDoc => reqDoc.DocumentId === doc.ID) ? 'Added' : <span className='sideButton'>Add</span>}
                    </div>
                );
            })}
        </div>
    );
}

export default Documents;