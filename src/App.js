import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import FontAwesome from 'react-fontawesome';
import './App.css';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import { GoogleClientID } from './keys/Google_Keys'; 

class App extends Component {
  responseGoogle(response) {
    console.log(response);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <GoogleLogin
              clientId={GoogleClientID}
              onSuccess={(e) => this.responseGoogle(e)}
              onFailure={(e) => this.responseGoogle(e)}
            >
              <FontAwesome
                name='google'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              <span>Login with google</span>
            </GoogleLogin>
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={(e) => this.responseGoogle(e)}
            />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
