
//new reg implementation
import React, {useState}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginMain from './components/login/LoginMain';
import { Logout } from './components/login/Logout';
import { RegisterForm } from './components/RegisterForms/Register';
import ReviewMain from './components/review/ReviewMain';
import  DrinkMain  from './components/Drinks/DrinkMain';
import { AddReviewForm} from './components/AddReviewForms/AddReview';
import {CreateDrink} from './components/Drinks/AddDrinks/AddDrink'
import './App.css';
import MainPage from './components/MainPageComponents/MainPage';
import {SelectIngredient} from './components/Drinks/AddDrinks/SelectIngredient';
import Index from './components/Index'



export default function App() {
  return (
    <div className="App" >
      

      <Router>
        <Switch>
          <Route exact path = "/"> <Index /> </Route>
          <Route exact path = "/login"> <LoginMain /> </Route>
          <Route exact path = "/logout"> <Logout /> </Route>
          <Route path = "/review"> <ReviewMain /> </Route>
          <Route exact path = "/register" component = {RegisterForm}/>
          <Route path = "/home" component = {MainPage} />
          <Route path = "/drinks" component = {DrinkMain} />
          <Route path="/add-review" component  = {AddReviewForm}/>
          <Route path="/add-drink" component  = {CreateDrink}/>
          <Route path="/select-ingredient" component  = {SelectIngredient}/>
         
        </Switch>
      </Router>
    </div>

  );
}
