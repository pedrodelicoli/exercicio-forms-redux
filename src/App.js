import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ PersonalForm } />
          <Route path="/professionalForm" component={ ProfessionalForm } />
          <Route path="/formDisplay" component={ FormDataDisplay } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
