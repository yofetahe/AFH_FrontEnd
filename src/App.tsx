import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/common/header';
import Footer from './components/common/footer';
import Menu from './components/common/menu';
import Residents from './components/residents_profile/index';
import ResidentInfo from './components/residents_profile/resident_info';
import ResidentInfoForm from './components/residents_profile/resident_info_form';
import Staff from './components/stuff_profile';
import StaffForm from './components/stuff_profile/staff_info_form';
import StaffInfo from './components/stuff_profile/staff_info';
import StaffDocument from './components/stuff_profile/staff_documents';
import Medication from './components/medication';
import MedicationAddForm from './components/medication/medicationAddForm';
import MedicationDistribution from './components/medication/medicineDistribution';
import Incidence from './components/incidence';
import Purchase from './components/purchase';
import Schedule from './components/schedule';
import Documents from './components/admin/requiredDocument';
import PurchaseItems from './components/admin/purchaseItems';
import MedicationItems from './components/admin/medications';
import Report from './components/report';
import PageNotFound from './components/PageNotFound/pageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <div className='application-body'>
        <Switch>
          <Route exact path="/" component={Residents} />
          <Route exact path="/residents" component={Residents} />
          <Route exact path="/resident/:id" component={ResidentInfo} />
          <Route exact path="/addResident" component={ResidentInfoForm} />
          <Route exact path="/updateResident/:id" component={ResidentInfoForm} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/staff/:id" component={StaffInfo} />
          <Route exact path="/staffForm" component={StaffForm} />
          <Route exact path="/staffForm/:id" component={StaffForm} />
          <Route exact path="/staff/document/:id" component={StaffDocument} />
          <Route exact path="/medication" component={Medication} />
          <Route strict exact path="/medication/add/:id" component={MedicationAddForm} />
          <Route strict exact path="/medication/distribution/:id" component={MedicationDistribution} />
          <Route exact path="/incidence" component={Incidence} />
          <Route exact path="/purchase" component={Purchase} />
          <Route exact path="/schedule" component={Schedule} />
          <Route strict exact path="/admin" component={Documents} />
          <Route strict exact path="/admin/documents" component={Documents} />
          <Route strict exact path="/admin/purchaseItems" component={PurchaseItems} />
          <Route strict exact path="/admin/medications" component={MedicationItems} />
          <Route exact path="/report" component={Report} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
