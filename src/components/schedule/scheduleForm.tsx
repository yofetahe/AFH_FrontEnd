import React, { useState } from 'react';
import { Button, Form, Icon, Label, Divider } from 'semantic-ui-react'

import * as data from '../source/mockData';

const staffs = data.staffsData.map(staff => ({ key: staff.Id, text: staff.FirstName + ' ' + staff.LastName, value: staff.PublicId }));

const ScheduleForm = () => {

    const dts: string[] = [];
    const [dateList, setDateList] = useState(dts);
    const [selectedDate, setSelectedDate] = useState('');

    const selectedDateInput = (e: any, d: any) => {
        setSelectedDate(d.value)
    }

    const manageAddDate = () => {

        if (!dateList.some(dt => dt === selectedDate)) {
            const dtList = [...dateList, selectedDate];
            setDateList(dtList);
        }
    }

    const removeAddedDate = (val: number) => {
        const dtList = dateList.filter((dt, index) => index !== val);
        setDateList(dtList);
    }

    return (
        <div className='main-content'>
            Schedule Form
            <Form>
                <Form.Select label='Staff Name' options={staffs} width={8} />
                <Form.Group>
                    <Form.Input id='selectedDate' fluid placeholder='Pick schedule date (MM/dd/yyyy)' width={6} onChange={selectedDateInput} />
                    <Button icon labelPosition='left' onClick={manageAddDate}>
                        <Icon name='add' />
                        Add Date
                    </Button>
                </Form.Group>
                {dateList.length > 0 &&
                    <div>
                        Selected Dates
                        <Divider />
                        {dateList.map((dt, index) => {
                            return (
                                <Label key={'dt_' + index} as='a'>
                                    {dt}
                                    <Icon name='delete' color='red' onClick={() => removeAddedDate(index)} />
                                </Label>
                            );
                        })}
                    </div>
                }
                <div className="formBottom">
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default ScheduleForm;