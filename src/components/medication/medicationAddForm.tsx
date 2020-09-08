import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

import './medicationAddForm.css';
import DefaultPhoto from '../../images/defaultPhoto.png';
import * as data from '../source/mockData';

const AddForm = (props: any) => {

    const { resData } = props.location.state;
    const [timeInput, setTimeInput] = useState([1]);

    const handleTimeInput = (event: any) => {
        event.preventDefault();
        const val = event.currentTarget.value;
        const inputs: number[] = [];
        for (let x = 0; x < val; x++) {
            inputs[x] = x + 1;
        }
        setTimeInput(inputs);
    }

    const options = data.medications.map(m => ({key: m.PublicId, text: m.ItemName, value: m.PublicId}));
   
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
                        <Form.Select label='Medicine Name' options={options} placeholder='Medications' />
                        <Form.Input label='Dose' placeholder='Dose' />
                        <Form.Input label='How many times per day' placeholder='how many times per day' onChange={(event) => { handleTimeInput(event) }} />
                        <div className='timeSlot'>
                            {timeInput.map(val => {
                                return (
                                    <Form.Field>
                                        <label>Time slot {val}</label>
                                        <input id={'timeInput_' + val} placeholder='time' />
                                    </Form.Field>
                                );
                            })}
                        </div>
                        <Form.Input label='Start Date' placeholder='Start Date' />
                        <Form.Input label='End date' placeholder='End date' />
                    </div>
                    <div className="formBottom">
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default AddForm;