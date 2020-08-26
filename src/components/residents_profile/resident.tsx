import React from 'react';
import { Link } from 'react-router-dom';

import './resident.css';
import DefaultPhoto from '../../images/defaultPhoto.png';

const handleResidentLeave = (ID: string) => {
    alert(ID);
}

const resident = (props: any) => {
    return (
        <div className='residentProfile'>
            <div>
                <img src={DefaultPhoto} alt='pic' />
            </div>
            <div className='residentName'>
                <div> {props.residentInfo.FirstName} {props.residentInfo.LastName} </div>
                <div className="residentLinks">
                    <Link id={props.residentInfo.id}
                        to={`/resident/${props.residentInfo.PublicId}`}
                        className='link-general'> VIEW </Link>
                    |
                    <span onClick={() => handleResidentLeave(props.residentInfo.ID)} className="textLink"> LEAVE </span>
                </div>
            </div>
        </div>
    );
}

export default resident;