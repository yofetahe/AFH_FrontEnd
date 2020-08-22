import React from 'react';
import { Link } from 'react-router-dom';

import './resident.css';
import DefaultPhoto from '../../images/defaultPhoto.png';

const resident = (props: any) => {
    return (
        <div className='residentProfile'>
            <div> <img src={DefaultPhoto} alt='pic'/> </div>
            <div className='residentName'> 
                <div> {props.residentInfo.FirstName} {props.residentInfo.LastName} </div>
                <div>
                    <Link id={props.residentInfo.id}
                        to={`/resident/${props.residentInfo.PublicId}`}
                        className='link-general'> View </Link> 
                    | 
                    Leave
                </div>
            </div>
        </div>
    );
}

export default resident;