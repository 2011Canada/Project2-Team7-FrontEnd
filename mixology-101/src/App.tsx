import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AddReviewForm} from '../src/components/AddReviewForms/AddReview';


export default function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <header className="App-header">
                        <Switch>
                            <Route path="/addReview" component  = {AddReviewForm}/>
                        </Switch>
                    </header>
                </div>
            </Router>
        </div>

    );
}