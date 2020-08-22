import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className='header'>
            
             <div className='header-icon'>
                 <img src={'/adult_icon.ico'} alt='AFH_Icon'/>
             </div>
            <div className='header-title'>
                 AFH <br/> <span>Management System</span>
             </div>
            
        </div>
    );
}

export default Header;