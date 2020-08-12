import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//importing user features
import UserHome from './components/UserContainer/UserHome';


export default class App extends Component{

  render() {

    return(

      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={UserHome} />
          </Switch>
        </div>
      </Router>

    );

  }

}
