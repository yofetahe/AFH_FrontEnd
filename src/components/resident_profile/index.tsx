import React, { Component } from 'react';

class ResidentProfile extends Component {
    state = {
        page: "Resident Profile Page"
    }
    render() {
        return (
            <div> {this.state.page} </div>
        );
    }
}

export default ResidentProfile;