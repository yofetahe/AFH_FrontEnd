import React, {useState} from 'react';

import Menu from './admin_menu';
import './admin.css';

const medications = [
    {
        Id: 1,
        PublicId: '9797136141',
        ItemName: 'Medication Name',
        Catagory: 'Tablet',
        Status: 'Active'
    },
    {
        Id: 2,
        PublicId: '9797136142',
        ItemName: 'Medication Name',
        Catagory: 'Antibiotics',
        Status: 'Active'
    },
    {
        Id: 3,
        PublicId: '9797136143',
        ItemName: 'Medication Name',
        Catagory: 'Prescribed',
        Status: 'Active'
    },
    {
        Id: 4,
        PublicId: '9797136144',
        ItemName: 'Medication Name',
        Catagory: 'Syrup',
        Status: 'Active'
    },
    {
        Id: 5,
        PublicId: '9797136145',
        ItemName: 'Medication Name',
        Catagory: 'Other',
        Status: 'Active'
    }
]
const categories = [
    {
        Id: '1',
        CategoryName: 'Cleaning'
    },
    {
        Id: '2',
        CategoryName: 'Sanitaizer'
    },
    {
        Id: '3',
        CategoryName: 'Food'
    },
    {
        Id: '4',
        CategoryName: 'Drinking'
    }
]


const Medication = () => {
    const [meds] = useState(medications);
    return (
        <div className='main-content'>
            <div>
                <Menu />
            </div>
            <div className='pageTitle'>Medications</div>
            <div className='formContent'>
                <form>
                    <div>
                        <label>Medication Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Category</label>
                        <input type="text" name="itemCategory" list="itemList" />
                        <datalist id="itemList">
                            {categories && categories.map(cat => {
                                return <option id={cat.Id} value={cat.CategoryName} />
                            })}                            
                        </datalist>
                    </div>
                    <input type='submit' value='Add' className='commonButton' />
                </form>
            </div>
            <div className='contentList'>
                <div className='table'>
                    <div className='tableRaw'>
                        <div className='tableHeaderCell'>#</div>
                        <div className='tableHeaderCell'>Medication Name</div>
                        <div className='tableHeaderCell'>Category</div>
                        <div className='tableHeaderCell'>Action</div>
                    </div>
                    {meds && meds.sort(function (a, b) {
                        if (a.Catagory < b.Catagory) { return -1; }
                        if (a.Catagory > b.Catagory) { return 1; }
                        return 0;
                    }).map((item, index) => {
                        return (
                            <div className='tableRaw'>
                                <div className='tableCell'> {index + 1} </div>
                                <div className='tableCell'>{item.ItemName} </div>
                                <div className='tableCell'> {item.Catagory} </div>
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

export default Medication;