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
        ResidentId: "0205284052462",
        Medications: [
            {
                Id: '1',
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
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            }
        ]
    },
    {
        ID: "2",
        ResidentId: "0985425246264",
        Medications: [
            {
                Id: '1',
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
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            }
        ]
    },
    {
        ID: "3",
        ResidentId: "058062452462725",
        Medications: [
            {
                Id: '1',
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
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Active'
            }
        ]
    },
    {
        ID: "4",
        ResidentId: "093485464546",        
        Medications: [
            {
                Id: '1',
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
                StartDate: '8/2/2020',
                NoOfDays: '30',
                EndDate: '9/1/2020',
                Status: 'Terminated'
            }
        ]
    },
    {
        ID: "5",
        ResidentId: "986985764563453",        
        Medications: [
            {
                Id: '1',
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

export const staffInfo = {
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