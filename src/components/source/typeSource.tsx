export interface EmergencyContact {
    FirstName: string;
    LastName: string;
    Relationship: string;
    PhoneNumber: string;
    Email: string;
}

export interface Resident {
    ID: string;
    PublicId: string;
    FirstName: string;
    MiddleNameInitial: string;
    LastName: string;
    DateOfBirth: string;
    PlaceOfBirth: string;
    Gender: string;
    PhotoPath: string;
    EmergencyContacts: EmergencyContact[];
    Medication?: Medication[];
}

export interface Medication {
    Id: string;
    PublicId: string;
    Name: string;
    Dose: string;
    Type: string; //timely or needed
    Time?: string[];
    StartDate?: string;
    NoOfDays?: string;
    EndDate?: string;
    Status: string;
}

export interface residentsMedications {
    ID: string;
    PublicId: string;
    ResidentId: string;
    Medications: Array<Medication>;
}
