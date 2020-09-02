import React, { useState } from 'react';
import * as typeSrc from '../source/typeSource';

import './index.css';
import DefaultPhoto from '../../images/defaultPhoto.png';

const residentsList: typeSrc.Resident[] = [
    {
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
    },
    {
        ID: "2",
        PublicId: "0985425246264",
        FirstName: "Hanery",
        MiddleNameInitial: "M",
        LastName: "Anderson",
        DateOfBirth: "10/10/1981",
        PlaceOfBirth: "Washington",
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
    },
    {
        ID: "3",
        PublicId: "058062452462725",
        FirstName: "Waren",
        MiddleNameInitial: "M",
        LastName: "Buffet",
        DateOfBirth: "10/10/1981",
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
    },
    {
        ID: "4",
        PublicId: "093485464546",
        FirstName: "Mark",
        MiddleNameInitial: "M",
        LastName: "Zumberg",
        DateOfBirth: "10/10/1981",
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
    },
    {
        ID: "5",
        PublicId: "986985764563453",
        FirstName: "Sherry",
        MiddleNameInitial: "M",
        LastName: "Henery",
        DateOfBirth: "07/03/1974",
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
]

const Medication = () => {
    const [residents] = useState(residentsList);
    return (
        <div className='main-content'>
            {residents.map(resident => {
                return (
                    <div key={resident.ID} className='medicationContent'>
                        <div className='residentPicture'>
                            <img src={DefaultPhoto} alt='pic' />
                        </div>
                        <div className='residentMedInfo'>
                            <div>Resident Info</div>
                            <div>Medication Info</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Medication