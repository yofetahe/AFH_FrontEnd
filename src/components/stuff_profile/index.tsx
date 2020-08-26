import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const staffsData = [
    {
        Id: "1",
        PublicId: "87959863425",
        FirstName: "First",
        LastName: "Last",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019"
    },
    {
        Id: "1",
        PublicId: "87959863425",
        FirstName: "First",
        LastName: "Last",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019"
    },
    {
        Id: "1",
        PublicId: "87959863425",
        FirstName: "First",
        LastName: "Last",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019"
    },
    {
        Id: "1",
        PublicId: "87959863425",
        FirstName: "First",
        LastName: "Last",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019"
    }
];

const Staff = () => {
    const [staffs, setStaffs] = useState(staffsData);
    return (
        <div className='main-content'>
            <div className="residentHeader">
                <Link to={'/addStaff'} className="commonButton">Add Staff</Link>
            </div>
            <div className="table">
                <head className="tableRow">
                    <div className="tableCell">#</div>
                    <div className="tableCell">Full Name</div>
                    <div className="tableCell">Address</div>
                    <div className="tableCell">Phone</div>
                    <div className="tableCell">Date Started</div>
                    <div className="tableCell">&nbsp;</div>
                    <div className="tableCell">&nbsp;</div>
                </head>
                {staffs.map(staff => {
                    return (
                        <div className="tableRow">
                            <div className="tableCell">#</div>
                            <div className="tableCell">{staff.FirstName} {staff.LastName}</div>
                            <div className="tableCell">{staff.Address}</div>
                            <div className="tableCell">{staff.Phone}</div>
                            <div className="tableCell">{staff.DateStarted}</div>
                            <div className="tableCell">
                                <Link to={`/staff/${staff.Id}`} className="sideButton">View</Link>
                            </div>
                            <div className="tableCell">
                                <div className="sideButton">Leave</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Staff;