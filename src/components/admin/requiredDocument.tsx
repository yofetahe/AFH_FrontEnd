import React, { useState } from 'react';

import Menu from './admin_menu';
import './admin.css';

const DocumentsList = [
    {
        Id: 1,
        PublicId: '98067245026241',
        DocumentName: 'Document One',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    },
    {
        Id: 2,
        PublicId: '98067245026242',
        DocumentName: 'Document Two',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    },
    {
        Id: 3,
        PublicId: '98067245026243',
        DocumentName: 'Document Three',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    },
    {
        Id: 4,
        PublicId: '98067245026244',
        DocumentName: 'Document Four',
        Description: 'Description',
        Required: 'true',
        Status: 'Active'
    }
]

const Documents = () => {
    const [documents] = useState(DocumentsList);
    return (
        <div className='main-content'>
            <Menu />
            <div className='pageTitle'>Required Document</div>
            <div className='formContent'>
                <form>
                    <div>
                        <label>Document Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Required</label>
                        <select>
                            <option>-</option>
                            <option>True</option>
                            <option>False</option>
                        </select>
                    </div>
                    <input type='submit' value='Add' className='commonButton' />
                </form>
            </div>
            <div className='contentList'>
                <div className='table'>
                    <div className='tableRaw'>
                        <div className='tableHeaderCell'>#</div>
                        <div className='tableHeaderCell'>Document Name</div>
                        <div className='tableHeaderCell'>Description</div>
                        <div className='tableHeaderCell'>Required</div>
                        <div className='tableHeaderCell'>Action</div>
                    </div>
                    {documents && documents.map((doc, index) => {
                        return (
                            <div className='tableRaw'>
                                <div className='tableCell'> {index + 1} </div>
                                <div className='tableCell'>{doc.DocumentName} </div>
                                <div className='tableCell'> {doc.Description} </div>
                                <div className='tableCell'> {doc.Required} </div>
                                <div className='tableCell'>
                                    <div className='commonButton btn'> Delete</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Documents;