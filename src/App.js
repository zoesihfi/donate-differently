import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Importing Donation Features
import MyDonations from './components/DonationContainer/DonationPage';

class App extends Component {
    render() {
        return (
            <Router>
                <h1>Donation App</h1>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={MyDonations} />
                        <Route path='/donation' component={MyDonations} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
