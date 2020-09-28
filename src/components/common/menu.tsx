import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Form, Label } from 'semantic-ui-react';

import './menu.css';

const MenuTemplate = (props: any) => {

    const [currentUrl, setCurrentUrl] = useState(props.url);
    const [menuVisibility, setMenuVisibility] = useState(false);

    useEffect(() => {
        setCurrentUrl(props.url);
    }, [props]);

    const handleLogoutSession = () => {
        localStorage.removeItem('session');
    }

    const handleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility);
    }

    return (
        <div className='menu'>
            <div className='menu-bar'>
                <div id='app-title'>
                    <img src={'/adult_icon.ico'} alt='AFH_Icon' />
                    <div id='title'>
                        AFH <span>Management System</span>
                    </div>
                </div>
                <Icon id='menu-bar' color='red' name={menuVisibility ? 'close' : 'bars'} className='menu-btn' onClick={handleMenuVisibility} />
            </div>
            <div id='menuList' className={menuVisibility ? 'visibile-menu-list' : 'menu-list'}>
                <Link to={'/residents'}
                    className={currentUrl.startsWith('/residents') ? 'active-menu-tab' : 'menu-tab'}>
                    Residents
                </Link> |
                <Link to={'/carePlan'}
                    className={currentUrl.startsWith('/carePlan') ? 'active-menu-tab' : 'menu-tab'}>
                    Care Plan
                </Link> |
                <Link to={'/medication'}
                    className={currentUrl.startsWith('/medication') ? 'active-menu-tab' : 'menu-tab'}>
                    Medication
                </Link> |
                <Link to={'/appointment'}
                    className={currentUrl.startsWith('/appointment') ? 'active-menu-tab' : 'menu-tab'}>
                    Appointment
                </Link> |
                <Link to={'/incidence'}
                    className={currentUrl.startsWith('/incidence') ? 'active-menu-tab' : 'menu-tab'}>
                    Incidents
                </Link> |
                <Link to={'/staff'}
                    className={currentUrl.startsWith('/staff') ? 'active-menu-tab' : 'menu-tab'}>
                    Staff
                </Link> |
                <Link to={'/schedule'}
                    className={currentUrl.startsWith('/schedule') ? 'active-menu-tab' : 'menu-tab'}>
                    Schedule
                </Link> |
                <Link to={'/purchase'}
                    className={currentUrl.startsWith('/purchase') ? 'active-menu-tab' : 'menu-tab'}>
                    Purchase
                </Link> |
                <Link to={'/report'}
                    className={currentUrl.startsWith('/report') ? 'active-menu-tab' : 'menu-tab'}>
                    Report
                </Link> |
                <Link to={'/admin'}
                    className={currentUrl.startsWith('/admin') ? 'active-menu-tab' : 'menu-tab'}>
                    Admin
                </Link>
                <div className='logoutBtn'>
                    <Form.Field inline>
                        <Label pointing='right'>{localStorage.getItem('loggedInUser')}</Label>
                        <Link to={'/'} onClick={handleLogoutSession}>Logout</Link>
                    </Form.Field>
                </div>
            </div>
        </div>
    );
}

export default MenuTemplate;