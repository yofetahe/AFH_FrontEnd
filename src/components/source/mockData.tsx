import * as type from './typeSource';

export const residents = [
    {
        ID: "1",
        PublicId: "0205284052462",
        FirstName: "James",
        MiddleNameInitial: "M",
        LastName: "Thomas",
        DateOfBirth: "10/04/1945",
        PlaceOfBirth: "Alaska",
        Gender: "Male",
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
        Gender: "Male",
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
        Gender: "Male",
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
        Gender: "Male",
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
        Gender: "Male",
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
export const resident = {
    ID: "1",
    PublicId: "0205284052462",
    FirstName: "James",
    MiddleNameInitial: "M",
    LastName: "Thomas",
    Geneder: "Male",
    DateOfBirth: "10/04/1945",
    PlaceOfBirth: "Alaska",
    PrimaryLanguage: "English",
    DateEntered: "01/10/2018",
    PhotoPath: "",
    EmergencyContacts: [
        {
            FirstName: "EC First Name",
            LastName: "EC Last Name",
            Relationship: "Brother",
            PhoneNumber: "206-887-6266",
            Email: "email@gmail.com"
        }
    ],
    MedicalHistory: {
        SpecialNeeds: "Yes",
        Dementia: "No",
        MentalHealth: "NO",
        DevelopmentalDisability: "No",
        Independency: "Yes",
        AssistnaceRequired: "Yes"
    },
    PrimaryPhysician: {
        FullName: "Barbara John",
        Phone: "206-000-0000"
    },
    MedicalGroup: [
        {
            Name: "",
            Phone: ""
        }
    ],
    Pharmacy: {
        Name: "Axios",
        Phone: "425-000-0000"
    }
}

export const medications = [
    {
        Id: 1,
        PublicId: '9797136141',
        ItemName: 'Oxycodon',
        Catagory: 'Tablet',
        Status: 'Active'
    },
    {
        Id: 2,
        PublicId: '9797136142',
        ItemName: 'Asprean',
        Catagory: 'Antibiotics',
        Status: 'Active'
    },
    {
        Id: 3,
        PublicId: '9797136143',
        ItemName: 'Ativan',
        Catagory: 'Prescribed',
        Status: 'Active'
    },
    {
        Id: 4,
        PublicId: '9797136144',
        ItemName: 'Apap',
        Catagory: 'Syrup',
        Status: 'Active'
    },
    {
        Id: 5,
        PublicId: '9797136145',
        ItemName: 'Insulin',
        Catagory: 'Other',
        Status: 'Active'
    }
]
export const medicationCategories = [
    {
        Id: '1',
        CategoryName: 'Cleaning'
    },
    {
        Id: '2',
        CategoryName: 'Sanitaizer'
    },
    {
        Id: '3',
        CategoryName: 'Food'
    },
    {
        Id: '4',
        CategoryName: 'Drinking'
    }
]
export const residentsMedications: type.residentsMedications[] = [
    {
        ID: "1",
        PublicId: "1397151341",
        ResidentId: "0205284052462",
        Medications: [
            {
                Id: '1',
                PublicId: "858446531",
                Name: 'Medication Name',
                Dose: '100ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            },
            {
                Id: '2',
                PublicId: "858446532",
                Name: 'Medication Name',
                Dose: '250ml',
                Type: 'Needed',
                Status: 'Active'
            },
            {
                Id: '1',
                PublicId: "858446533",
                Name: 'Medication Name',
                Dose: '150ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            }
        ]
    },
    {
        ID: "2",
        PublicId: "1397151342",
        ResidentId: "0985425246264",
        Medications: [
            {
                Id: '1',
                PublicId: "858446534",
                Name: 'Medication Name',
                Dose: '100ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            },
            {
                Id: '2',
                PublicId: "858446535",
                Name: 'Medication Name',
                Dose: '250ml',
                Type: 'Needed',
                Status: 'Active'
            },
            {
                Id: '1',
                PublicId: "858446536",
                Name: 'Medication Name',
                Dose: '150ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            }
        ]
    },
    {
        ID: "3",
        PublicId: "1397151343",
        ResidentId: "058062452462725",
        Medications: [
            {
                Id: '1',
                PublicId: "858446537",
                Name: 'Medication Name',
                Dose: '100ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            },
            {
                Id: '2',
                PublicId: "858446538",
                Name: 'Medication Name',
                Dose: '250ml',
                Type: 'Needed',
                Status: 'Active'
            },
            {
                Id: '1',
                PublicId: "858446539",
                Name: 'Medication Name',
                Dose: '150ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            }
        ]
    },
    {
        ID: "4",
        PublicId: "1397151344",
        ResidentId: "093485464546",        
        Medications: [
            {
                Id: '1',
                PublicId: "858446511",
                Name: 'Medication Name',
                Dose: '100ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            },
            {
                Id: '2',
                PublicId: "858446521",
                Name: 'Medication Name',
                Dose: '250ml',
                Type: 'Needed',
                Status: 'Active'
            },
            {
                Id: '1',
                PublicId: "858446541",
                Name: 'Medication Name',
                Dose: '150ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Terminated'
            }
        ]
    },
    {
        ID: "5",
        PublicId: "1397151345",
        ResidentId: "986985764563453",        
        Medications: [
            {
                Id: '1',
                PublicId: "858446551",
                Name: 'Medication Name',
                Dose: '100ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            },
            {
                Id: '2',
                PublicId: "858446561",
                Name: 'Medication Name',
                Dose: '250ml',
                Type: 'Needed',
                Status: 'Active'
            },
            {
                Id: '1',
                PublicId: "858446571",
                Name: 'Medication Name',
                Dose: '150ml',
                Type: '3X/day',
                Time: ['8:00AM', '2:00PM', '8:00PM'],
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            }
        ]
    }
]
export const residentMedications = [
    {
        Id: '1',
        Name: 'Medication Name',
        Dose: '100ml',
        Type: '3X/day',
        Time: ['8:00AM', '2:00PM', '10:00PM'],
        StartDate: '9/1/2020',
        NoOfDays: '30',
        EndDate: '9/30/2020',
        Status: 'Active'
    },
    {
        Id: '2',
        Name: 'Medication Name',
        Dose: '250ml',
        Type: 'Needed',
        Status: 'Active'
    },
    {
        Id: '1',
        Name: 'Medication Name',
        Dose: '150ml',
        Type: '3X/day',
        Time: ['8:00AM', '2:00PM', '8:00PM'],
        StartDate: '9/1/2020',
        NoOfDays: '30',
        EndDate: '9/30/2020',
        Status: 'Active'
    }
]

export const purchase = [
    {
        Id: 1,
        PublicId: '9797136141',
        ItemName: 'Item Name',
        Catagory: 'Food',
        Status: 'Active'
    },
    {
        Id: 2,
        PublicId: '9797136142',
        ItemName: 'Item Name',
        Catagory: 'Cleaning',
        Status: 'Active'
    },
    {
        Id: 3,
        PublicId: '9797136143',
        ItemName: 'Item Name',
        Catagory: 'Sanitizer',
        Status: 'Active'
    },
    {
        Id: 4,
        PublicId: '9797136144',
        ItemName: 'Item Name',
        Catagory: 'Drinking',
        Status: 'Active'
    },
    {
        Id: 5,
        PublicId: '9797136145',
        ItemName: 'Item Name',
        Catagory: 'Cleaning',
        Status: 'Active'
    }
]
export const itemCategories = [
    {
        Id: '1',
        CategoryName: 'Cleaning'
    },
    {
        Id: '2',
        CategoryName: 'Sanitaizer'
    },
    {
        Id: '3',
        CategoryName: 'Food'
    },
    {
        Id: '4',
        CategoryName: 'Drinking'
    }
]

export const DocumentsList = [
    {
        Id: '1',
        PublicId: '98067245026241',
        DocumentName: 'Document One',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    },
    {
        Id: '2',
        PublicId: '98067245026242',
        DocumentName: 'Document Two',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    },
    {
        Id: '3',
        PublicId: '98067245026243',
        DocumentName: 'Document Three',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    },
    {
        Id: '4',
        PublicId: '98067245026244',
        DocumentName: 'Document Four',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    }
]

export const incidentList = [
    {
        id: 1,
        public_id: "945624576241",
        incident_title: "Fall down",
        description: "fall from chair",
        careGiver_action: "hold ice on the area",
        resident_id: "987959567364",
        resident_name: "John Kris",
        incident_date: "8/29/2020",
        incident_level: "Minor",
        incident_pictures_path: [
            "path1",
            "path2"
        ],
        createBy: "2",
        createDate: "8/29/2020",
        reportedTo: "Tenagne Ashenafi",
        reportedBy: "Phone"
    },
    {
        id: 2,
        public_id: "945624576242",
        incident_title: "Fall down",
        description: "fall from chair",
        careGiver_action: "hold ice on the area",
        resident_id: "987959567364",
        resident_name: "John Kris",
        incident_date: "8/3/2020",
        incident_level: "Moderate",
        incident_pictures_path: [
            "path1",
            "path2"
        ],
        createBy: "1",
        createDate: "8/3/2020",
        reportedTo: "Sirgut Ashenafi",
        reportedBy: "paper"
    }
]
export const incident_level = [
    { key: 'minor', value: 'minor', text: 'Minor' },
    { key: 'moderate', value: 'moderate', text: 'Moderate' },
    { key: 'Serious', value: 'Serious', text: 'Serious' },
    { key: 'Severe', value: 'Severe', text: 'Severe' },
    { key: 'Critical', value: 'Critical', text: 'Critical' },
    { key: 'Maximal', value: 'Maximal', text: 'Maximal' }
]
export const report_to = [
    { key: 'sirgut_ashenafi', value: 'sirgut_ashenafi', text: 'Sirgut Ashenafi' },
    { key: 'tenagne_ashenafi', value: 'tenagne_ashenafi', text: 'Tenagne Ashenafi' }
]
export const reported_by = [
    { key: 'phone', value: 'phone', text: 'Phone' },
    { key: 'written', value: 'written', text: 'Written' }
]

export const staffsData = [
    {
        Id: "1",
        PublicId: "87959863421",
        FirstName: "Martin",
        LastName: "Odongu",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019",
        Status: "Active"
    },
    {
        Id: "1",
        PublicId: "87959863422",
        FirstName: "Nancy",
        LastName: "Lambada",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019",
        Status: "Active"
    },
    {
        Id: "1",
        PublicId: "87959863423",
        FirstName: "Kerim",
        LastName: "Husen",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019",
        Status: "Active"
    },
    {
        Id: "1",
        PublicId: "87959863424",
        FirstName: "Obang",
        LastName: "Ochasa",
        DateOfBirth: "10/16/1998",
        Address: "14522 52nd PL W",
        DriverLicenseNumber: "ERH7654",
        SSN: "Yes",
        Phone: "425-000-0000",
        DateStarted: "01/02/2019",
        Status: "Active"
    }
];
export const staffInfo = {
    Id: "1",
    PublicId: "87959863421",
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

export const workSchedule = [
    {
        Id: '1',
        PublicId: '97242569651',
        StaffId: '87959863421',
        schedule: [
            {
                ID: '20-09', //year+weakNo -> 20 - year, 09  - Month
                Value: ['Wed Sep 09 2020', 'Thu Sep 10 2020', 'Fri Sep 11 2020', 'Mon Sep 14 2020', 'Tue Sep 15 2020']
            }
        ]
    },
    {
        Id: '2',
        PublicId: '97242569652',
        StaffId: '87959863422',
        schedule: [
            {
                ID: '20-09', //year+weakNo -> 20 - year, 09  - Month
                Value: ['Mon Sep 07 2020', 'Tue Sep 08 2020', 'Sat Sep 12 2020', 'Sun Sep 13 2020']
            },
            {
                ID: '20-10',
                Value: ['Mon Sep 07 2020', 'Tue Sep 08 2020', 'Sat Sep 12 2020', 'Sun Sep 13 2020']
            }
        ]
    }
]
export const months = [
    { key: '1', value: 'January', text: 'January' },
    { key: '2', value: 'February', text: 'February' },
    { key: '3', value: 'March', text: 'March' },
    { key: '4', value: 'April', text: 'April' },
    { key: '5', value: 'May', text: 'May' },
    { key: '6', value: 'June', text: 'June' },
    { key: '7', value: 'July', text: 'July' },
    { key: '8', value: 'August', text: 'August' },
    { key: '9', value: 'September', text: 'September' },
    { key: '10', value: 'October', text: 'October' },
    { key: '11', value: 'November', text: 'November' },
    { key: '12', value: 'December', text: 'December' },
]
export const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const rowsOfMonth = [1, 2, 3, 4, 5];

export const appointmentList = [
    {
        Id: '1',
        PublicId: '9023234235',
        ResidentId: '0205284052462',
        ResidentName: 'James Thomas',
        AppointmentDate: 'Sep 16 2020',
        TimeFrom: '11:00AM',
        TimeTo: '12:00PM',
        Type: 'Doctor Appointment',
        Reason: 'Medical treatment',
        Address: '14522 52nd Pl W, WA, USA',
        ContactPerson: 'Dr. Alen Henery',
        Phone: '(206) 000 0000'
    },
    {
        Id: '2',
        PublicId: '9023234232',
        ResidentId: '058062452462725',
        ResidentName: 'Resident Two',
        AppointmentDate: 'Sep 16 2020',
        TimeFrom: '11:00AM',
        TimeTo: '12:00PM',
        Type: 'Doctor Appointment',
        Reason: 'Medical treatment',
        Address: '14522 52nd Pl W, WA, USA',
        ContactPerson: 'Dr. Alen Henery',
        Phone: '(206) 000 0000'
    },
    {
        Id: '3',
        PublicId: '9023234233',
        ResidentId: '0985425246264',
        ResidentName: 'Resident Three',
        AppointmentDate: 'Sep 17 2020',
        TimeFrom: '11:00AM',
        TimeTo: '12:00PM',
        Type: 'Doctor Appointment',
        Reason: 'Medical treatment',
        Address: '14522 52nd Pl W, WA, USA',
        ContactPerson: 'Dr. Alen Henery',
        Phone: '(206) 000 0000'
    },
    {
        Id: '4',
        PublicId: '9023234234',
        ResidentId: '0985425246264',
        ResidentName: 'Martin Odongu',
        AppointmentDate: 'Sep 18 2020',
        TimeFrom: '11:00AM',
        TimeTo: '12:00PM',
        Type: 'Doctor Appointment',
        Reason: 'Medical treatment',
        Address: '14522 52nd Pl W, WA, USA',
        ContactPerson: 'Dr. Alen Henery',
        Phone: '(206) 000 0000'
    }
]