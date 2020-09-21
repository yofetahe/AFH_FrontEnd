import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <Link to={'/residents'} className='menu-tab'>Residents</Link> | 
            <Link to={'/carePlan'} className='menu-tab'>Care Plan</Link> | 
            <Link to={'/medication'} className='menu-tab'> Medication/eMar/ </Link> | 
            <Link to={'/appointment'} className='menu-tab'> Appointment </Link> | 
            <Link to={'/incidence'} className='menu-tab'> Incidence Report </Link> | 
            <Link to={'/staff'} className='menu-tab'> Staff </Link> | 
            <Link to={'/schedule'} className='menu-tab'> Work Schedule </Link> | 
            <Link to={'/purchase'} className='menu-tab'> Purchase </Link> | 
            <Link to={'/report'} className='menu-tab'> Report </Link> | 
            <Link to={'/admin'} className='menu-tab'> Admin </Link>
        </div>
    );
}

export default Menu;