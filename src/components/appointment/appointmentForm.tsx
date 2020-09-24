import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import * as data from '../source/mockData';

const staffsList = data.staffsData.map(staff => ({ key: staff.Id, text: staff.FirstName + ' ' + staff.LastName, value: staff.PublicId }));
const appointmentType = data.appointmentType;

const AppointmentForm = () => {
    return (
        <div className='main-content'>
            <Form className='appAddForm'>
                <Form.Select label='Resident Name' placeholder='resident name' options={staffsList} />
                <Form.Input label='Appointment Date' icon='calendar alternate outline' placeholder='appointment date' />
                <Form.Group widths='equal'>
                    <Form.Input type='date' label='Time From' placeholder='hh:mm' />
                    <Form.Input type='date' label='Time To' placeholder='hh:mm' />
                </Form.Group>
                <Form.Select label='Type' placeholder='type' options={appointmentType} />
                <Form.TextArea label='Reason' />
                <Form.Input label='Address' placeholder='Address' icon='point' />
                <Form.Input label='Contact Person' placeholder='contact person' />
                <Form.Input label='Phone' icon='phone' />
                <div className="formBottom">
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default AppointmentForm;