
import React, {useState}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginForm } from './components/login/LoginForm';
import { Logout } from './components/login/Logout';
import { RegisterForm } from './components/RegisterForms/Register';
import { ViewReview } from './components/review/ViewReview';
import  DrinkMain  from './components/Drinks/DrinkMain';
import { AddReviewForm} from '../src/components/AddReviewForms/AddReview';
import {CreateDrink} from './components/Drinks/AddDrinks/AddDrink'
import { User } from './models/User';
import './App.css';
import MainPage from './components/MainPageComponents/MainPage';
import {SelectIngredient} from './components/Drinks/AddDrinks/SelectIngredient';

export default function App() {
  const [user, changeUser] = useState<User>()
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login"> <LoginForm currentUser={user} updateCurrentUser={changeUser} /> </Route>
          <Route path="/logout"> <Logout /> </Route>
          <Route path="/review"> <ViewReview /> </Route>
          <Route path = "/register" component = {RegisterForm}/>
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
