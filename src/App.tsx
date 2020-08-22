import React, { Fragment } from 'react';
import './App.css';

import Header from './components/common/header';
import Footer from './components/common/footer';
import Menu from './components/common/menu';
import Resident from './components/resident_profile/index';

function App() {
  return (
    <Fragment>
      <Header />
      <Menu />
      <Resident />
      <Footer />
    </Fragment>
  );
}

export default App;
