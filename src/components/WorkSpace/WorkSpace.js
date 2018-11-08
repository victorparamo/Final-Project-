import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../NavBar';
import { Route, Redirect, Switch, } from 'react-router-dom';

const WorkSpace = ({ match }) => {
        
    return (
        <div>
            <NavBar /> 
            <Switch>
                <Route path={`${match.path}/aboutUs`} component={()=>{return (<p>hola01</p>)}} />
                <Route path={`${match.path}/mission`} component={()=>{return (<p>hola02</p>)}} />
                <Route path={`${match.path}/gallery`} component={()=>{return (<p>hola03</p>)}}/>
                <Route path={`${match.path}/shoppingCart`} component={()=>{return (<p>hola04</p>)}}/>
                
                <Redirect to={{
                    pathname: `${match.path}/aboutUs`,
                    state: { from: 'NOT FOUND PAGE' },
                }}/>
            </Switch>
        </div>
    )

};

// function mapStateToProps (state) {
//     // const { gifts, } = state;

//     // return { gifts, };
// };
  
// function mapDispatchToProps (dispatch) {
//     const { loginAuthorized, loginFailed } = loginActions.creators;

//     return bindActionCreators({ loginAuthorized, loginFailed, }, dispatch);
// };
  
export default connect(null, null)(WorkSpace);