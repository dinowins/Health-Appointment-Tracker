import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AppointmentDetails from './components/appointments/AppointmentDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/appointments/:id' component={AppointmentDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
