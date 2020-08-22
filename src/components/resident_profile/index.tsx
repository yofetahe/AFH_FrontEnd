import React, { Component } from 'react';

import './index.css';

class ResidentProfile extends Component {
    state = {
        page: "Resident Profile Page"
    }
    render() {
        return (
            <div className='main-content'> {this.state.page} </div>
        );
    }
}

export default ResidentProfile;