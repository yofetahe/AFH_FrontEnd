import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon, Button } from 'semantic-ui-react';

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
    const [staffs] = useState(staffsData);
    return (
        <div className='main-content'>
            <div className="residentHeader">
                <Link to={'/staffForm'}>
                    <Button icon labelPosition='left'>
                        <Icon name='add' />
                        Staff
                    </Button>
                </Link>
            </div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Date Stared</Table.HeaderCell>
                        <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                        <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                        <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {staffs.map((staff, index) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>{staff.FirstName} {staff.LastName}</Table.Cell>
                                <Table.Cell>{staff.Address}</Table.Cell>
                                <Table.Cell>{staff.Phone}</Table.Cell>
                                <Table.Cell>{staff.DateStarted}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/staff/document/${staff.PublicId}`}>
                                        <Icon color='blue' name='book' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to={`/staff/${staff.PublicId}`}>
                                        <Icon color='blue' name='external square alternate' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Icon color='red' name='times rectangle' />
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    );
}

export default Staff;