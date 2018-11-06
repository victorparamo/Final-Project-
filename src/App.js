import React, { Component } from 'react';
import Login from './components/Login';
import { Route, Redirect, NavLink, Switch, } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Login}  />
          <Route path="/Favorites" component={Login}/>
          <Redirect to={{
            pathname: "/",
            state: { from: 'NOT FOUND PAGE' },
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
