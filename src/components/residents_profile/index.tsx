import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import Resident from './resident';
import * as typeSrc from '../source/typeSource';
import * as data from '../source/mockData';

const residents: typeSrc.Resident[] = data.residents;

class ResidentProfile extends Component {
    state = {
        page: "Resident Profile Page",
        residents: residents
    }
    render() {
        return (
            <div className='main-content'>
                <div className="residentHeader">
                    <Link to={'/addResident'} className="commonButton">Add Resident</Link>
                </div>                
                {this.state.residents.map(resident => {
                    return <Resident key={resident.ID} residentInfo={resident} />
                })}
            </div>
        );
    }
}

export default ResidentProfile;