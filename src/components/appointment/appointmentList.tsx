import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Table, Divider, Icon } from 'semantic-ui-react';

import * as data from '../source/mockData';
import './appointment.css';

const appointmentList = data.appointmentList;
const months = data.months;
const residents = data.residents.map(m => ({ key: m.PublicId, text: m.FirstName + ' ' + m.LastName, value: m.PublicId }));

const AppointmentList = () => {
    const today = new Date();
    const dt = today.toString().split(' ');
    const todayString = dt[1] + ' ' + dt[2] + ' ' + dt[3];

    const [residentId, setResidentId] = useState('');
    const [dateFrom, setDateFrom] = useState(todayString);
    const [dateTo, setDateTo] = useState(todayString);
    const [appointments, setAppointments] = useState(appointmentList);

    useEffect(() => {
        const appList = appointmentList.filter(app => app.AppointmentDate === todayString);
        setAppointments(appList);
    }, []);

    const handleResidentName = (e: any, data: any) => {
        console.log(data.value);
        setResidentId(data.value);
    }

    const handleDateFrom = (e: any, data: any) => {
        e.preventDefault();
        setDateFrom(data.value);
    }

    const handleDateTo = (e: any, data: any) => {
        e.preventDefault();
        setDateTo(data.value);
    }

    const handleAppointmentSearch = (e: any) => {
        e.preventDefault();
        console.log(residentId);
        if (residentId !== '') {
            const filteredAppList = appointmentList.filter(app => {
                return app.ResidentId === residentId ? true : false;
            });
            setAppointments(filteredAppList);
        }

        if (dateFrom !== todayString || dateTo !== todayString) {

            const dtFromArray = dateFrom.split('-');
            const dtFromDate = new Date(Number(dtFromArray[0]), Number(dtFromArray[1]), Number(dtFromArray[2]));

            const dtToArray = dateTo.split('-');
            const dtToDate = new Date(Number(dtToArray[0]), Number(dtToArray[1]), Number(dtToArray[2]));

            const filteredAppList = appointmentList.filter(app => {
                const appDateArray = app.AppointmentDate.split(' ');
                const appDateMonthObj = getMonthObj(appDateArray[0]);
                const appDate = new Date(Number(appDateArray[2]), Number(appDateMonthObj.key), Number(appDateArray[1]));
                if (appDate >= dtFromDate && appDate <= dtToDate) {
                    return true;
                }
                return false;
            });
            setAppointments(filteredAppList);
        }
    }

    function getMonthObj(month: string) {
        return months.filter(m => m.text.toLowerCase().startsWith(month.toLowerCase())).reduce(x => x);
    }

    const handleDeleteAppointment = (appId: string) => {
        console.log(appId);
    }

    return (
        <div>
            <Form>
                <div id='searchDateForm'>
                    <Form.Group widths='equal'>
                        <Form.Select label='Resident Name' placeholder='resident Name' options={residents} onChange={handleResidentName} />
                        <Form.Input type='date' label='Date From' id='appDateFrom' value={dateFrom} onChange={handleDateFrom} />
                        <Form.Input type='date' label='Date To' id='appDateTo' value={dateTo} onChange={handleDateTo} />
                    </Form.Group>
                </div>
                <div id='searchBtn'>
                    <Button icon labelPosition='left' onClick={handleAppointmentSearch}>
                        <Icon name='search' />
                        Search
                    </Button>
                </div>
                <div id='addBtn'>
                    <Link to={'/appointment/add'}>
                        <Button icon labelPosition='left'>
                            <Icon name='add' />
                            Add Appointment
                        </Button>
                    </Link>
                </div>
            </Form>
            <Divider />
            <div className='appointmentListTable'>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Appointment Date</Table.HeaderCell>
                            <Table.HeaderCell>Time</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Reason</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Contact Person</Table.HeaderCell>
                            <Table.HeaderCell>Phone</Table.HeaderCell>
                            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {appointments && appointments.map(app => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{app.ResidentName}</Table.Cell>
                                    <Table.Cell>{app.AppointmentDate}</Table.Cell>
                                    <Table.Cell>{app.TimeFrom} - {app.TimeTo}</Table.Cell>
                                    <Table.Cell>{app.Type}</Table.Cell>
                                    <Table.Cell>{app.Reason}</Table.Cell>
                                    <Table.Cell>{app.Address}</Table.Cell>
                                    <Table.Cell>{app.ContactPerson}</Table.Cell>
                                    <Table.Cell>{app.Phone}</Table.Cell>
                                    <Table.Cell>
                                        <Link to={`/appointment/${app.PublicId}`}>
                                            <Icon color='blue' name='external square alternate' />
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell> <Icon color='red' name='delete calendar' onClick={() => handleDeleteAppointment(app.PublicId)} /> </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </div>
            <div className='appointmentListFormat'>
            {appointments && appointments.map(app => {
                return (
                    <div className='appointmentList'>
                        <span> {app.ResidentName} </span>
                        <span> <b>Date</b>: {app.AppointmentDate} </span>
                        <span> <b>Time</b>: {app.TimeFrom} - {app.TimeTo} </span>
                        <span> <b>Appointment Type</b>: {app.Type} </span>
                        <span> <b>Reason</b>: {app.Reason} </span>
                        <span> <b>Address</b>: {app.Address} </span>
                        <span> <b>Contact Person</b>: {app.ContactPerson} </span>
                        <span> <b>Phone</b>: {app.Phone} </span>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default AppointmentList;