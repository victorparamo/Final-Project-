import React from 'react'
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { GoogleLogin } from 'react-google-login';
import { GoogleClientID } from '../../keys/Google_Keys';
import loginActions from '../../redux/actions/Login_Actions';


const Login = (props) =>{
    const { loginAuthorized, loginFailed, LoginStatus } = props;

    return (
         <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <GoogleLogin
                clientId={GoogleClientID}
                onSuccess={(e) => loginAuthorized(e)}
                onFailure={(e) => loginFailed(e)}
            >
                <FontAwesome
                    name='google'
                    size='2x'
                />
                <span>Login with google</span>
            </GoogleLogin>
         </div>
    );
};
  
function mapDispatchToProps (dispatch) {
    const { loginAuthorized, loginFailed } = loginActions.creators;

    return bindActionCreators({ 
        loginAuthorized,
        loginFailed,
    }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(Login);