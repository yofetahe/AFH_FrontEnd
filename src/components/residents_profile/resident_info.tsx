import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './resident_info.css';
import DefaultPhoto from '../../images/defaultPhoto.png';
import * as data from '../source/mockData';

const residentData = data.resident;

const ResidentInfo = (props: any) => {

    const [residentInfo] = useState(residentData);

    return (
        <div className='main-content'>
            <div className='residentPhoto'>
                <img src={DefaultPhoto} alt='pic' />
                <div className="commonButtonDiv">
                    <Link to={`/updateResident/${residentInfo.ID}`} className="commonButton"> Update </Link>
                </div>
            </div>
            <div className='residentData'>
                <div className="catagoryTitle"> Personal Info </div>
                <div>
                    <p> <span>Full Name:</span> {residentInfo.FirstName} {residentInfo.MiddleNameInitial} {residentInfo.LastName} </p>
                    <p> <span>Date of Birth:</span> {residentInfo.DateOfBirth} </p>
                    <p> <span>Place of Birth:</span> {residentInfo.PlaceOfBirth} </p>
                    <p> <span>Gender:</span> {residentInfo.Geneder} </p>
                    <p> <span>Primary Language:</span> {residentInfo.PrimaryLanguage} </p>
                    <p> <span>Date Entered:</span> {residentInfo.DateEntered} </p>
                </div>

                <div className='catagoryTitle'>Emergency Contacts</div>
                {residentInfo.EmergencyContacts.map(ec => {
                    return (
                        <div>
                            <p> <span>Name:</span> {ec.FirstName} {ec.LastName} </p>
                            <p> <span>Relationship:</span> {ec.Relationship} </p>
                            <p> <span>Phone Number:</span> {ec.PhoneNumber} </p>
                            <p> <span>Email:</span> {ec.Email} </p>
                        </div>
                    );
                })}
            </div>
            <div className='residentData'>

                <div className="catagoryTitle"> Primary Physician </div>
                <div>
                    <p>Name: {residentData.PrimaryPhysician.FullName}</p>
                    <p>Phone: {residentData.PrimaryPhysician.Phone}</p>
                </div>

                <div className="catagoryTitle"> Medical Group </div>
                {residentData.MedicalGroup.map(group => {
                    return (
                        <div>
                            <p>Name: {group.Name}</p>
                            <p>Phone: {group.Phone}</p>
                        </div>
                    );
                })}

                <div className="catagoryTitle"> Pharmacy </div>
                <div>
                    <p>Name: {residentData.Pharmacy.Name}</p>
                    <p>Phone: {residentData.Pharmacy.Phone}</p>
                </div>
            </div>
            <div className='residentData'>
                <div className="catagoryTitle"> Medical History </div>
                <div>
                    <p> SpecialNeeds: {residentData.MedicalHistory.SpecialNeeds}</p>
                    <p> Dementia: {residentData.MedicalHistory.Dementia}</p>
                    <p> MentalHealth: {residentData.MedicalHistory.MentalHealth}</p>
                    <p> DevelopmentalDisability: {residentData.MedicalHistory.DevelopmentalDisability}</p>
                    <p> Independency: {residentData.MedicalHistory.Independency}</p>
                    <p> AssistnaceRequired: {residentData.MedicalHistory.AssistnaceRequired}</p>
                </div>
            </div>
            
        </div>
    );
}

export default ResidentInfo;