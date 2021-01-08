import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {RegisterForm} from './components/RegisterForms/Register'
import './App.css';





function App() {
  return (
    <div className="App">
      <h1>Mixology-101</h1>
       <Router>
        <div id = "root">
        </div>  
          <header className="App-header">
            <Switch>
              <Route path = "/register" component = {RegisterForm}/>
            </Switch>
          </header> 
      </Router> 

    </div>
  );
}

export default App;
