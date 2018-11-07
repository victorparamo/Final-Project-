import React, { Component } from 'react'
import logo from '../Login/logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogout, GoogleLogin } from 'react-google-login';


class Login extends Component {
    render(){
      return (
         <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
         </div>
        );
    }
};

// function mapStateToProps (state) {
//     // const { gifts, } = state;

//     // return { gifts, };
// };
  
// function mapDispatchToProps (dispatch) {
//     const { loginAuthorized, loginFailed } = loginActions.creators;

//     return bindActionCreators({ loginAuthorized, loginFailed, }, dispatch);
// };
  
export default connect(null, null)(Login);