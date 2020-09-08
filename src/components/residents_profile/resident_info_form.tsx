import React from 'react';
import { Button, Form, Radio } from 'semantic-ui-react';

import './resident_info_form.css';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const ResidentRegistration = () => {
    
    const handleChange = () => {
        console.log('handle change');
    }
    
    return (
        <div className='main-content'>
            <div className="formTitle">Resident Profile Information</div>
            <Form className='residentForm'>
                <div className="formColumn wideColumn">
                    <div className="formCatagory">Resident Information</div>
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
                        <Form.Input label='SSN Documented' placeholder='SSN' width={6} />
                        <Form.Input label='Primary Language' placeholder='Primary Language' width={5} />
                        <Form.Input label='Date Entered' placeholder='Date Entered' width={5} />
                    </Form.Group>
                    {/* Date Discharged */}
                    <div>
                        <div className="formCatagory">Medical History</div>
                        <Form.Group inline>
                            <label>Special Needs:</label>
                            <Form.Field control={Radio} label='Yes' value='1' onChange={handleChange} />
                            <Form.Field control={Radio} label='No' value='2' onChange={handleChange} />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Dementia:</label>
                            <Form.Field control={Radio} label='Yes' value='1' onChange={handleChange} />
                            <Form.Field control={Radio} label='No' value='2' onChange={handleChange} />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Mental Health: </label>
                            <Form.Field control={Radio} label='Yes' value='1' onChange={handleChange} />
                            <Form.Field control={Radio} label='No' value='2' onChange={handleChange} />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Developmental Disability: </label>
                            <Form.Field control={Radio} label='Yes' value='1' onChange={handleChange} />
                            <Form.Field control={Radio} label='No' value='2' onChange={handleChange} />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Independency (Safe to get out from home): </label>
                            <Form.Field control={Radio} label='Yes' value='1' onChange={handleChange} />
                            <Form.Field control={Radio} label='No' value='2' onChange={handleChange} />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Assistance Required: </label>
                            <Form.Field control={Radio} label='Yes' name='1' value='1' onChange={handleChange} />
                            <Form.Field control={Radio} label='No' name='1' value='2' onChange={handleChange} />
                        </Form.Group>
                    </div>
                </div>
                <div className="formColumn smallColumn">
                    <div>
                        <div className="formCatagory">Emergency Contacts</div>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Middle Name Initial</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Relation</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                    </div>
                    <div>
                        <div className="formCatagory">Primary Physician</div>
                        <Form.Field>
                            <label>Full Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                    </div>
                </div>
                <div className='formColumn smallColumn'>
                    <div>
                        <div className="formCatagory">Physician/Medical Group</div>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                    </div>
                    <div>
                        <div className="formCatagory">Pharmacy</div>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                    </div>
                </div>
                <div>
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>

        </div>
    );
}

export default ResidentRegistration;