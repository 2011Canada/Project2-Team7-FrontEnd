
import React, {useState}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginForm } from './components/login/LoginForm';
import { RegisterForm } from './components/RegisterForms/Register';
import { Home } from './components/home/Home';
import { ViewReview } from './components/drink/ViewReview';
import { User } from './models/User';
import './App.css';
import MainPage from './components/MainPageComponents/MainPage';





function App() {
  const [user, changeUser] = useState<User>()
  return (
    <div className="App">
      <h1>Mixology-101</h1>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm currentUser={user} updateCurrentUser={changeUser} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/review">
            <ViewReview />
          </Route>
          <Route path = "/register" component = {RegisterForm}/>
          <Route path = "/home" component = {MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
