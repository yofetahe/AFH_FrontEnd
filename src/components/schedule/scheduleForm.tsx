import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

import * as data from '../source/mockData';

const staffs = data.staffsData;

const ScheduleForm = () => {
    return (
        <div className='main-content'>
            Schedule Form
            <Form>                
                <Form.Input label='First name' placeholder='First Name' width={4} />
                <div className="formBottom">
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default ScheduleForm;