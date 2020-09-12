import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Label, Button, Icon, Divider } from 'semantic-ui-react';

import './schedule.css';
import * as data from '../source/mockData';

const months = data.months;
const daysPerMonth = data.daysPerMonth;
const weekDays = data.weekDays;
const rowsOfMonth = data.rowsOfMonth;
const workSchedule = data.workSchedule;
const staffs = data.staffsData;

type colorsChoice = "red" | "blue" | "green" | "brown" | "purple" | "orange" | "yellow" | "olive" | "teal" | "violet" | "pink" | "grey" | "black" | undefined

interface scheduleDate {
    NAME: string;
    DATE: string;
    ID: string;
    DAY: string;
}

const Schedule = () => {
    const today = new Date();
    const schDate: scheduleDate[] = getWorkSchedule(today.getMonth());;
    const daysValue: number[] = getDaysArray(today.getMonth());

    const [month, setMonth] = useState(months[today.getMonth()].value);
    const [daysArray, setDaysArray] = useState(daysValue);
    const [mergedScheduleDate, setMergedScheduleDate] = useState(schDate);

    // var beginningDay = new Date(today.getFullYear(), today.getMonth(), 1);
    // console.log(beginningDay);

    function getWorkSchedule(mIndex: number) {
        const currentMonthSchedule = workSchedule.map(sch => {
            return sch.schedule.filter(s => {
                const ids = s.ID.split('-');
                if (Number(ids[1]) === mIndex + 1) {
                    return true;
                }
                return false;
            }).map(schDate => {
                return schDate.Value.map(dt => {
                    const staff = staffs.filter(st => st.PublicId === sch.StaffId)[0];
                    return ({ NAME: staff.FirstName + ' ' + staff.LastName, DATE: dt, ID: staff.PublicId, DAY: dt.split(' ')[2] });
                });
            })
        });
        var mergedScheduleDate = currentMonthSchedule.flat(1).flat(1).sort((a, b) => {
            if (a.DAY > b.DAY) { return 1 }
            if (a.DAY < b.DAY) { return -1 }
            return 0;
        });
        return mergedScheduleDate;
    }

    function getDaysArray(monthIndex: number) {
        let daysValue: number[] = [];
        const totalDays = daysPerMonth[monthIndex];
        let init = 1;
        while (init <= totalDays) {
            daysValue = daysValue.concat(init);
            init++;
        }
        return daysValue;
    }

    const getColor = (publicId: string): colorsChoice => {
        const color = ['red', 'blue', 'green', 'brown', 'purple'];
        const colorSet = staffs.filter(st => st.Status === 'Active')
            .map((s, index) => {
                return ({ ID: s.PublicId, COLOR: color[index] })
            });
        return colorSet.find(c => c.ID === publicId)?.COLOR as colorsChoice;
    }

    const manageSchedulePerMonth = (e: any, data: any) => {
        e.preventDefault();
        setMonth(data.value);
        const mIndex = months.findIndex(m => m.value === data.value);
        setDaysArray(getDaysArray(mIndex));
        setMergedScheduleDate(getWorkSchedule(mIndex));
    }

    return (
        <div className='main-content'>
            <div id='monthDropdown'>
                <Form.Select label='Month' options={months} defaultValue={month} onChange={manageSchedulePerMonth} width={8} />
            </div>
            <div id='scheduleAddButton'>
                <Link to={'/scheduleForm'}>
                    <Button icon labelPosition='left'>
                        <Icon name='add' />
                        Schedule
                    </Button>
                </Link>
            </div>
            <Divider />
            <div>
                {daysArray.map((monthDay, index) => {
                    const schedule = mergedScheduleDate.find(m => Number(m.DAY) === monthDay);
                    return schedule !== undefined ? (
                        <Label key={index} as='a' color={getColor(schedule.ID)} basic id='scheduleRaw'>
                            {schedule.NAME} <br /> {schedule.DATE}
                        </Label>
                    ) : (
                            <Label key={index} as='a' color='grey' basic id='scheduleRaw'>
                                Not Assigned <br /> {month} {monthDay} {today.getFullYear()}
                            </Label>
                        );
                })}
            </div>
            {/* <div>
                <div className='scheduleRaw'>
                    {weekDays.map(day => {
                        return (
                            <Label key={day} as='a' basic style={{ width: '130px', textAlign: 'center' }}>
                                {day}
                            </Label>
                        );
                    })}
                </div>
                {rowsOfMonth.map((row, index) => {
                    return (
                        <div key={index} className='scheduleRaw'>
                            {weekDays.map((day, index) => {
                                return (
                                    <Label key={index} as='a' basic style={{ width: '130px' }}>
                                        -
                                    </Label>
                                );
                            })}
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}

export default Schedule;