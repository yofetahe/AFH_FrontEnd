import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <span>ADMIN &gt; </span>
            <Link to={'/admin/documents'}>Documents</Link> &nbsp; | &nbsp;
            <Link to={'/admin/purchaseItems'}>Purchase Items</Link> &nbsp; | &nbsp;
            <Link to={'/admin/medications'}>Medications</Link>
        </div>
    );
}

export default Admin