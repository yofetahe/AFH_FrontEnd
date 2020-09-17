import React from 'react';
import AppointmentForm from './appointmentForm';
import AppointmentList from './appointmentList';

import './appointment.css';

const Appointment = () => {
    return (
        <div className='main-content'>            
            <AppointmentList />            
        </div>
    );
}

export default Appointment;