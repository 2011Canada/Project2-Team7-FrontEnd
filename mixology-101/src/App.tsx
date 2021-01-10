import React, {useState}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginForm } from './components/login/LoginForm';
import { Home } from './components/home/Home';
import { User } from './models/User';
import './App.css';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
