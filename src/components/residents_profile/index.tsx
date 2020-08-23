import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import Resident from './resident';

interface EmergencyContact {
    FirstName: string;
    LastName: string;
    Relationship: string;
    PhoneNumber: string;
    Email: string;
}
interface Resident {
    ID: string;
    PublicId: string;
    FirstName: string;
    MiddleNameInitial: string;
    LastName: string;
    DateOfBirth: string;
    PlaceOfBirth: string;
    PhotoPath: string;
    EmergencyContacts: EmergencyContact[];
}

const residents: Resident[] = [
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

class ResidentProfile extends Component {
    state = {
        page: "Resident Profile Page",
        residents: residents
    }
    render() {
        return (
            <div className='main-content'>
                <div>
                    <Link to={'/addResident'}>Add Resident</Link>
                </div>
                {this.state.residents.map(resident => {
                    return <Resident key={resident.ID} residentInfo={resident} />
                })}
            </div>
        );
    }
}

export default ResidentProfile;