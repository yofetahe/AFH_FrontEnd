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
import Medication from './components/medication';
import Incidence from './components/incidence';
import Purchase from './components/purchase';
import Schedule from './components/schedule';
import Admin from './components/admin';
import Report from './components/report';
import PageNotFound from './components/PageNotFound/pageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <div>
        <Switch>
          <Route exact path="/" component={Residents} />
          <Route exact path="/residents" component={Residents} />
          <Route exact path="/resident/:id" component={ResidentInfo} />
          <Route exact path="/addResident" component={ResidentInfoForm} />
          <Route exact path="/updateResident/:id" component={ResidentInfoForm} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/medication" component={Medication} />
          <Route exact path="/incidence" component={Incidence} />
          <Route exact path="/purchase" component={Purchase} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/report" component={Report} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
