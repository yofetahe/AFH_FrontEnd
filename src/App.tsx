import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/common/header';
import Footer from './components/common/footer';
import Menu from './components/common/menu';

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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <div className='application-body'>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route strict exact path="/residents" component={Residents} />
          <Route strict exact path="/resident/:id" component={ResidentInfo} />
          <Route strict exact path="/addResident" component={ResidentInfoForm} />
          <Route strict exact path="/updateResident/:id" component={ResidentInfoForm} />
          <Route strict exact path="/carePlan" component={CarePlan} />
          <Route strict exact path="/staff" component={Staff} />
          <Route strict exact path="/staff/:id" component={StaffInfo} />
          <Route strict exact path="/staffForm" component={StaffForm} />
          <Route strict exact path="/staffForm/:id" component={StaffForm} />
          <Route strict exact path="/staff/document/:id" component={StaffDocument} />
          <Route strict exact path="/medication" component={Medication} />
          <Route strict exact path="/medication/:residentId" component={MedicationAddForm} />
          <Route strict exact path="/medication/distribution/:residentId" component={MedicationDistribution} />
          <Route strict exact path="/medication/:residentId/:medId" component={MedicationAddForm} />
          <Route strict exact path="/appointment" component={Appointment} />
          <Route strict exact path="/appointmentForm" component={AppointmentForm} />
          <Route strict exact path="/appointment/:appId" component={AppointmentForm} />
          <Route strict exact path="/incidence" component={Incidence} />
          <Route strict exact path="/purchase" component={Purchase} />
          <Route strict exact path="/schedule" component={Schedule} />
          <Route strict exact path="/scheduleForm" component={ScheduleForm} />          
          <Route strict exact path="/admin" component={Documents} />
          <Route strict exact path="/admin/documents" component={Documents} />
          <Route strict exact path="/admin/purchaseItems" component={PurchaseItems} />
          <Route strict exact path="/admin/medications" component={MedicationItems} />
          <Route strict exact path="/admin/branches" component={Branches} />
          <Route strict exact path="/report" component={Report} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
