import React, { useEffect } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

import './staff_info_form.css';
// import * as data from '../source/mockData';

// const staffInfo = data.staffInfo;

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const StaffForm = (props: any) => {

    // const [staffProfile] = useState(staffInfo);

    useEffect(() => {
        console.log('url id', props.match.params.id)
    })

    return (
        <div className='main-content'>
            <Form>
                <div>
                    <div className="formColumn wideColumn">
                        <div className="formCatagory">Staff Information</div>
                        <Form.Group>
                            <Form.Input label='First name' placeholder='First Name' width={6} />
                            <Form.Input label='Middle I. Name' placeholder='Middle Name' width={4} />
                            <Form.Input label='Last Name' placeholder='Last Name' width={6} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Date of Birth' placeholder='Date of Birth' width={8} />
                            <Form.Select label='Gender' options={options} placeholder='Gender' width={8} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Address' placeholder='Address' width={16}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='SSN Documented' placeholder='SSN' width={6} />
                            <Form.Input label='Phone Number' placeholder='Phone Number' width={5} />
                            <Form.Input label='Date Entered' placeholder='Date Entered' width={5} />
                        </Form.Group>
                    </div>
                    <div className="formColumn">
                        <div className="formCatagory">Emergency Contacts</div>
                        <Form.Field control={Input} label='First Name' value='' />
                        <Form.Field control={Input} label='Last Name' value='' />
                        <Form.Field control={Input} label='Phone' value='' />
                        <Form.Field control={Input} label='Relation' value='' />
                    </div>
                </div>
                <div className="formBottom">
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default StaffForm;