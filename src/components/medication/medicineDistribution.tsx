import React, { useState } from 'react';

const residentInfo = {

}
const medicinesList = [
    {}
];

const MedicineDistribution = () => {
    const [resident] = useState(residentInfo);
    const [medicines] = useState(medicinesList);
    return (
        <div className='main-content'>
            <div className='residentDetail'>Resident Detail</div>
            <div className='medicineDetail'>
                Medicine Distribution
            </div>
        </div>
    );
}

export default MedicineDistribution;