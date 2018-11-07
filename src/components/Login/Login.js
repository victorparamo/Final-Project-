import React, { Component } from 'react'
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import { GoogleClientID } from '../../keys/Google_Keys';
import loginActions from '../../redux/actions/Login_Actions';


class Login extends Component {
    responseGoogle(response) {
      console.log(response);
    }

    render(){
      return (
         <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <GoogleLogin
                clientId={GoogleClientID}
                onSuccess={(e) => this.responseGoogle(e)}
                onFailure={(e) => this.responseGoogle(e)}
            >
                <FontAwesome
                    name='google'
                    size='2x'
                />
                <span>Login with google</span>
            </GoogleLogin>
            <GoogleLogout
             buttonText="Logout"
             onLogoutSuccess={(e) => this.responseGoogle(e)}
            />
         </div>
        );
    }
};

function mapStateToProps (state) {
    // const { gifts, } = state;

    // return { gifts, };
};
  
function mapDispatchToProps (dispatch) {
    const { loginAuthorized, loginFailed } = loginActions.creators;

    return bindActionCreators({ loginAuthorized, loginFailed, }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(Login);