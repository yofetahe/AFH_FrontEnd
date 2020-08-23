import React from 'react';

const ResidentRegistration = () => {
    return (
        <div className='main-content'>
            Resident Registration Form
            <p>Resident Name</p>
            Date of birth
            Gender
            SSN
            Primary Language
            Date Entered
            Date Discharged

            Contacts
            * Emergency Contacts
                - Full Name
                - Phone
                - Relation
            * Primary Physician
                - Full Name 
                - Phone
            * Physician/Medical Group --- can be more than one
                - Name 
                - Phone
            * Pharmacy
                - Name
                - Phone
            * Medical History - Yes or No
                - Special Needs
                - Dementia
                - Mental Health
                - Developmental Disability
                - Independency - Safe to get out from home
                - Assistance Required
        </div>
    );
}

export default ResidentRegistration;