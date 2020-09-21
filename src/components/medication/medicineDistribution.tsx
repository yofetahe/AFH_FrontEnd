import React, { useState } from 'react';
import { Icon, List, Label, Divider } from 'semantic-ui-react';

import './medicineDistribution.css'
import DefaultPhoto from '../../images/defaultPhoto.png';
import * as data from '../source/mockData';

const residentMedicines = data.residentMedications;

const MedicineDistribution = (props: any) => {

    const { resData } = props.location.state;
    const [medicines] = useState(residentMedicines);
    const today = new Date();
    const medDate = new Date();

    function hourDistribution(t: string) {
        let dhr = t.split(':');
        const temp = dhr[1].substring(2);
        dhr[1] = dhr[1].substring(0, 2);
        dhr[2] = temp;
        if (dhr[2] === 'PM') {
            medDate.setHours(Number(dhr[0]) + 12, Number(dhr[1]));
        } else {
            medDate.setHours(Number(dhr[0]), Number(dhr[1]));
        }
        const diff = Math.abs(today.getTime() - medDate.getTime()) / 60000;
        return diff < 60 ? true : false;
    }

    function isInValidDateInterval(sd: string, ed: string) {
        const startDate = new Date(sd);
        const endDate = new Date(ed);
        return startDate <= today && endDate >= today;
    }

    function manageTakenMedicine(e: any, medId: string, resId: string) {
        e.preventDefault();
        console.log('Taken >>> ', medId, resId);
    }

    function manageRejectedMedicine(e: any, medId: string, resId: string) {
        e.preventDefault();
        console.log('Rejected >>> ', medId, resId);
    }

    return (
        <div className='main-content'>
            <div className='residentInfo'>
                <div className='residentPicture'>
                    <img src={DefaultPhoto} alt='pic' />
                </div>
                <div id='name'> Name: {resData.FirstName} {resData.MiddleNameInitial} {resData.LastName} </div>
                <div id='dob'> DOB: {resData.DateOfBirth} </div>
                <div id='gender'> Gender: {resData.Gender} </div>
            </div>
            <div className='medicineDetail'>
                <div>Medicine Distribution</div>
                <Divider />
                {medicines.filter(med => {
                    return med.Category === 'Needed' || (med.Time?.some(t => hourDistribution(t)) && isInValidDateInterval(med.StartDate, med.EndDate));
                }).sort((a, b) => {
                    if (a.Category > b.Category) { return 1 }
                    if (a.Category < b.Category) { return -1 }
                    return 0;
                }).map(med => {
                    return (
                        <List key={med.Id} divided verticalAlign='middle'>
                            <List.Item>
                                <List.Content floated='right'>
                                    <Label as='a' onClick={(e) => manageTakenMedicine(e, med.Id, resData.ID)}>
                                        <Icon color='blue' name='check' />
                                        Taken
                                    </Label>
                                    {med.Time &&
                                        <Label as='a' onClick={(e) => manageRejectedMedicine(e, med.Id, resData.ID)}>
                                            <Icon color='red' name='times rectangle' />
                                            Rejected
                                        </Label>
                                    }
                                </List.Content>
                                <List.Content floated='left'>
                                    <Icon color='teal' name='pills' /> {med.Name} {med.Time && ' ( ' + med.Time?.filter(t => hourDistribution(t)) + ' )'}
                                </List.Content>
                            </List.Item>
                            <Divider />
                        </List>
                    );
                })}
            </div>
        </div>
    );
}

export default MedicineDistribution;