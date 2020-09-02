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
    PhotoPath: string;
    EmergencyContacts: EmergencyContact[];
}