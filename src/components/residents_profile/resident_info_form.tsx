import React from 'react';

import './resident_info_form.css';

const ResidentRegistration = () => {
    return (
        <div className='main-content'>
            <div className="formTitle">Resident Profile Information</div>
            <form>
                <div>
                    <div className="formLeftSide">
                        <div>
                            <div className="formCatagory">Resident Information</div>
                            <div>
                                <label id="name">First Name</label>
                                <input id="name" type="text" />
                            </div>
                            <div>
                                <label id="name">Middle Name Initial</label>
                                <input id="name" type="text" />
                            </div>
                            <div>
                                <label id="name">Last Name</label>
                                <input id="name" type="text" />
                            </div>
                            <div>
                                <label>Date of birth</label>
                                <input id="dob" type="text" />
                            </div>
                            <div>
                                <label>Gender</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>SSN Documented</label>
                                <input type="radio" name="Dementia" value="YES" /> Yes <input type="radio" name="Dementia" value="NO" /> No 
                            </div>
                            <div>
                                <label>Primary Language</label>
                                <input id="primaryLanguage" type="text" />
                            </div>
                            <div>
                                <label>Date Entered</label>
                                <input id="dateEntered" type="text" />
                            </div>
                            {/* Date Discharged */}
                        </div>

                        <div>
                            <div className="formCatagory">Medical History</div>
                            <div>Special Needs: <input type="radio" name="specialNeeds" value="YES" /> Yes <input type="radio" name="specialNeeds" value="NO" /> No </div>
                            <div>Dementia: <input type="radio" name="Dementia" value="YES" /> Yes <input type="radio" name="Dementia" value="NO" /> No </div>
                            <div>Mental Health: <input type="radio" name="mentalHealth" value="YES" /> Yes <input type="radio" name="mentalHealth" value="NO" /> No </div>
                            <div>Developmental Disability: <input type="radio" name="developmentalDisability" value="YES" /> Yes <input type="radio" name="developmentalDisability" value="NO" /> No </div>
                            <div>Independency (Safe to get out from home): <input type="radio" name="independency" value="YES" /> Yes <input type="radio" name="independency" value="NO" /> No </div>
                            <div>Assistance Required: <input type="radio" name="assistanceRequired" value="YES" /> Yes <input type="radio" name="assistanceRequired" value="NO" /> No </div>
                        </div>
                    </div>
                    <div className="formRightSide">
                        <div>
                            <div className="formCatagory">Emergency Contacts</div>
                            <div>
                                <label>First Name</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Relation</label>
                                <input id="gender" type="text" />
                            </div>
                        </div>
                        <div>
                            <div className="formCatagory">Primary Physician</div>
                            <div>
                                <label>Full Name</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input id="gender" type="text" />
                            </div>
                        </div>
                        <div>
                            <div className="formCatagory">Physician/Medical Group (can be more than one)</div>
                            <div>
                                <label>Name</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input id="gender" type="text" />
                            </div>
                        </div>
                        <div>
                            <div className="formCatagory">Pharmacy</div>
                            <div>
                                <label>Name</label>
                                <input id="gender" type="text" />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input id="gender" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formBottom">
                    <input type="submit" value="Submit" className="commonButton"/>
                </div>
            </form>
        </div>
    );
}

export default ResidentRegistration;