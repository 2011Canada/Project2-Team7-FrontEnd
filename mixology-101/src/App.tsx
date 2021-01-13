
import React, {useState}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginMain from './components/login/LoginMain';
import { Logout } from './components/login/Logout';
import { RegisterForm } from './components/RegisterForms/Register';
import { ViewReview } from './components/review/ViewReview';
import  DrinkMain  from './components/Drinks/DrinkMain';
import { AddReviewForm} from './components/AddReviewForms/AddReview';
import './App.css';
import MainPage from './components/MainPageComponents/MainPage';

export default function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path = "/login"> <LoginMain /> </Route>
          <Route path = "/logout"> <Logout /> </Route>
          <Route path = "/review"> <ViewReview /> </Route>
          <Route path = "/register" component = {RegisterForm}/>
          <Route path = "/home" component = {MainPage} />
          <Route path = "/drinks" component = {DrinkMain} />
          <Route path = "/addReview" component  = {AddReviewForm}/>
        </Switch>
      </Router>
    </div>

  );
}
