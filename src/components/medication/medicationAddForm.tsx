import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

import './medicationAddForm.css';
import DefaultPhoto from '../../images/defaultPhoto.png';
import * as data from '../source/mockData';

const AddForm = (props: any) => {

    const { resData } = props.location.state;
    const medicationId = props.match.params.medId;
    const [timeInput, setTimeInput] = useState([1]);
    const [isScheduled, setIsScheduled] = useState(false);

    const handleTimeInput = (event: any) => {
        event.preventDefault();
        const val = event.currentTarget.value;
        const inputs: number[] = [];
        for (let x = 0; x < val; x++) {
            inputs[x] = x + 1;
        }
        setTimeInput(inputs);
    }

    const handleMedicationByCategory = (event: any, data: any) => {
        event.preventDefault();
        const val = data.value;
        if (val.toLowerCase() === 'scheduled') {
            setIsScheduled(true);
        } else {
            setIsScheduled(false);
        }
    }

    const medList = data.medications.map(m => ({ key: m.PublicId, text: m.ItemName, value: m.PublicId }));
    const medCategoryList = data.medCategoryList;

    return (
        <div className='main-content'>
            <div className='residentInfoBlock'>
                <div className='residentPicture'>
                    <img src={DefaultPhoto} alt='pic' />
                </div>
                <div id='name'> Name: {resData.FirstName} {resData.MiddleNameInitial} {resData.LastName} </div>
                <div id='dob'> DOB: {resData.DateOfBirth} </div>
                <div id='gender'> Gender: {resData.Gender} </div>
            </div>
            <div className='medicineAddForm'>
                <div className="formCatagory">Medicine Information</div>
                <Form>
                    <div>
                        <Form.Select label='Medicine Category' options={medCategoryList} placeholder='Medications category' onChange={handleMedicationByCategory} />
                        <Form.Select label='Medicine Name' options={medList} placeholder='Medications' />
                        <Form.Input label='Dose' placeholder='Dose' />
                        {isScheduled &&
                            <Segment>
                                <Form.Input label='How many times per day' placeholder='how many times per day' onChange={handleTimeInput} />
                                <div className='timeSlot'>
                                    {timeInput.map(val => {
                                        return (
                                            <Form.Input id={'timeInput_' + val} label={'Time slot ' + val} icon='time' placeholder='hh:mm PM/AM' />
                                        );
                                    })}
                                </div>
                                <Form.Input label='Start Date' placeholder='Start Date' />
                                <Form.Input label='End date' placeholder='End date' />
                            </Segment>
                        }
                    </div>
                    <div className="formBottom">
                        {medicationId && <Button type='submit'>update</Button>}
                        {medicationId && <Button type='submit'>Refill</Button>}
                        {!medicationId && <Button type='submit'>Add</Button>}
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default AddForm;