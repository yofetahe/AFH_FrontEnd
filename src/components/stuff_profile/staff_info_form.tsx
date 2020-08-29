import React, { useState, useEffect } from 'react';

import './staff_info_form.css';

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

const StaffForm = (props: any) => {

    const [staffProfile] = useState(staffInfo);

    useEffect(() => {
        console.log('url id', props.match.params.id)
    })

    return (
        <div className='main-content'>
            <form>
                <div>
                    <div className="formLeftSide">
                        <div>
                            <div className="formCatagory">Staff Information</div>
                            <div>
                                <label id="name">First Name</label>
                                <input id="name" type="text" />
                            </div>
                            <div>
                                <label id="name">Middle Name Initial</label>
                                <input id="name" type="text" />
                            </div>
                            <div>
                                <label id="name">Last Name</label>
                                <input id="name" type="text" />
                            </div>
                            <div>
                                <label>Date of birth</label>
                                <input id="dob" type="text" />
                            </div>
                            <div>
                                <label>Gender</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Address</label>
                                <input id="address" type="text" />
                            </div>
                            <div>
                                <label>SSN Documented</label>
                                <input type="radio" name="Dementia" value="YES" /> Yes <input type="radio" name="Dementia" value="NO" /> No
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input id="phoneNumber" type="text" />
                            </div>
                            <div>
                                <label>Date Entered</label>
                                <input id="dateEntered" type="text" />
                            </div>
                            {/* Date leave */}
                        </div>
                        <div>
                            <div className="formCatagory">Emergency Contacts</div>
                            <div>
                                <label>First Name</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Relation</label>
                                <input id="gender" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formBottom">
                    <input type="submit" value="Submit" className="commonButton" />
                </div>
            </form>
        </div>
    );
}

export default StaffForm;