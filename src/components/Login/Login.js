import React from 'react'
import logo from '../../images/logo1.png';
import loginImage from '../../images/SignIn.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { GoogleLogin } from 'react-google-login';
import { GoogleClientID } from '../../keys/Google_Keys';
import loginActions from '../../redux/actions/Login_Actions';
import { NavLink } from 'react-router-dom';
import { Button } from 'mdbreact';
import './Login.css';

const Login = (props) =>{
    const { loginAuthorized, loginFailed } = props;

    return (
         <div className="App-header">
            <div className="Login_Left">   
                <img src={loginImage} className="Login-Image" alt="logo" />
            </div>
            <div className="Login_Right">   
                <img src={logo} className="App-logo" alt="logo" />
                <p className="loginName">ART GALLERY STORE</p>
                <div className="slogan">
                    <p style={{color:"#00C851"}}>Here art selects you </p>
                </div>
                <div className="loginFooter">
                    <GoogleLogin    
                        clientId={GoogleClientID}
                        onSuccess={(e) => loginAuthorized(e.profileObj)}
                        onFailure={(e) => loginFailed(e)}
                    >
                        <FontAwesome
                            name='google'
                            size='2x'
                            className="GoogleIcon mr-3"
                        />
                        <a className="googleButtonTitle">Google</a>
                    </GoogleLogin>
                </div>
                <div className="loginFooter2">
                    <Button className="pageButton mt-2 mr-0" color="success"><NavLink className="text-white" to="/workSpace">Go to page without Login... </NavLink></Button>
                </div>
            </div>
        </div>
    );
};
  
function mapDispatchToProps (dispatch) {
    const { loginAuthorized, loginFailed } = loginActions.creators;

    return bindActionCreators({ 
        loginAuthorized, loginFailed,
    }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(Login);