import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, } from 'react-router-dom';
import loginActions from '../../redux/actions/Login_Actions';

const PrivateRoute = ({component: Component, ...props }) => {
    const { LoginStatus } = props;
 
    return (
        <Route {...props} render={(props) => (
            LoginStatus !== loginActions.types.LOGIN_AUTHORIZED 
            ? <Component {...props}/>
            : <Redirect to='/workSpace'/>
        )}/>
    );
}

function mapStateToProps (state) {
    const { LoginStatus, } = state.login;

    return { LoginStatus, };
};

export default connect(mapStateToProps, null)(PrivateRoute);