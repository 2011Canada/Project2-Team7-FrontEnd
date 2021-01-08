import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {RegisterForm} from './components/RegisterForms/Register'
import './App.css';
import MainPage from './components/MainPage';





function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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

=======
      <MainPage />
>>>>>>> origin/main-page
    </div>
  );
}


export default App;
