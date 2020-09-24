import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import SecuredRoute from './securedRoute';

import Header from './components/common/header';
import Footer from './components/common/footer';

import Login from './components/common/login';

import Residents from './components/residents_profile';
import ResidentInfo from './components/residents_profile/resident_info';
import ResidentInfoForm from './components/residents_profile/resident_info_form';

import CarePlan from './components/carePlan';

import Staff from './components/stuff_profile';
import StaffForm from './components/stuff_profile/staff_info_form';
import StaffInfo from './components/stuff_profile/staff_info';
import StaffDocument from './components/stuff_profile/staff_documents';

import Medication from './components/medication';
import MedicationAddForm from './components/medication/medicationAddForm';
import MedicationDistribution from './components/medication/medicineDistribution';

import Appointment from './components/appointment';
import AppointmentForm from './components/appointment/appointmentForm';

import Incidence from './components/incidence';

import Purchase from './components/purchase';

import Schedule from './components/schedule';
import ScheduleForm from './components/schedule/scheduleForm';

import Documents from './components/admin/requiredDocument';
import PurchaseItems from './components/admin/purchaseItems';
import MedicationItems from './components/admin/medications';
import Report from './components/report';
import Branches from './components/admin/branches';
import PageNotFound from './components/PageNotFound/pageNotFound';

const App = () => {  
  return (
    <BrowserRouter>
      <Header />
      <div className='application-body'>
        <Switch>
          <Route exact path="/" component={Login} />
          <SecuredRoute strict exact path="/residents" component={Residents} />
          <SecuredRoute strict exact path="/residents/:id" component={ResidentInfo} />
          <SecuredRoute strict exact path="/residentsAdd" component={ResidentInfoForm} />
          <SecuredRoute strict exact path="/residentsUpdate/:id" component={ResidentInfoForm} />
          <SecuredRoute strict exact path="/carePlan" component={CarePlan} />
          <SecuredRoute strict exact path="/staff" component={Staff} />
          <SecuredRoute strict exact path="/staff/:id" component={StaffInfo} />
          <SecuredRoute strict exact path="/staffAdd" component={StaffForm} />
          <SecuredRoute strict exact path="/staffUpdate/:id" component={StaffForm} />
          <SecuredRoute strict exact path="/staffDocument/:id" component={StaffDocument} />
          <SecuredRoute strict exact path="/medication" component={Medication} />
          <SecuredRoute strict exact path="/medication/:residentId" component={MedicationAddForm} />
          <SecuredRoute strict exact path="/medication/distribution/:residentId" component={MedicationDistribution} />
          <SecuredRoute strict exact path="/medication/:residentId/:medId" component={MedicationAddForm} />
          <SecuredRoute strict exact path="/appointment" component={Appointment} />
          <SecuredRoute strict exact path="/appointment/add" component={AppointmentForm} />
          <SecuredRoute strict exact path="/appointment/:appId" component={AppointmentForm} />
          <SecuredRoute strict exact path="/incidence" component={Incidence} />
          <SecuredRoute strict exact path="/purchase" component={Purchase} />
          <SecuredRoute strict exact path="/schedule" component={Schedule} />
          <SecuredRoute strict exact path="/scheduleForm" component={ScheduleForm} />
          <SecuredRoute strict exact path="/admin" component={Documents} />
          <SecuredRoute strict exact path="/admin/documents" component={Documents} />
          <SecuredRoute strict exact path="/admin/purchaseItems" component={PurchaseItems} />
          <SecuredRoute strict exact path="/admin/medications" component={MedicationItems} />
          <SecuredRoute strict exact path="/admin/branches" component={Branches} />
          <SecuredRoute strict exact path="/report" component={Report} />
          <Route strict component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
