import React, {useState}from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginForm } from './components/login/LoginForm';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
