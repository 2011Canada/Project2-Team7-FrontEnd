import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {RegisterForm} from './components/RegisterForms/Register'
import './App.css';
import MainPage from './components/MainPageComponents/MainPage';

//new reg implementation
import RegisterComponent from './components/RegisterForms/Register2'





function App() {
  return (
    <div className="App">
       <Router>
         <div >
          <header className="App-header">
            <Switch>
              <Route path = "/register" component = {RegisterForm}/>
              <Route path = "/home" component = {MainPage} />
              <Route path = "/register2" component = {RegisterComponent} />
            </Switch>
          </header> 
          </div>  
      </Router> 
    </div> 
    
  );
}

export default App;
