import React, { Component } from 'react';
import Login  from './components/Login';
import WorkSpace from './components/WorkSpace';
import PrivateRouteLogin from './containers/PrivateRoute';
import { Route, Redirect, Switch, } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRouteLogin path="/login" component={Login}  />
          <Route path="/workSpace" component={WorkSpace}/>
          {/* <Redirect to={{
            pathname: "/login",
            state: { from: 'NOT FOUND PAGE' },
          }}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
