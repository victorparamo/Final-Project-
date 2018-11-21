import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../../containers/NavBar';
import { Route, Redirect, Switch, } from 'react-router-dom';
import Gallery from '../../containers/Gallery';
import About from '../../components/AboutUs';
import Mission from '../../components/Mission';
import './WorkSpace.css';

const WorkSpace = ({ match, ...props }) => {
    let { pathname } = props.location;
    pathname = pathname.replace("/workSpace/", "");

    return (
        <div className="WorkSpace">
            <NavBar item={pathname}/> 
            <Switch>
                <Route path={`${match.path}/aboutUs`} component={About} />
                <Route path={`${match.path}/mission`} component={Mission} />
                <Route path={`${match.path}/gallery`} component={Gallery}/>
                <Route path={`${match.path}/shoppingCart`} component={()=>{return (<p>hola04</p>)}}/>
                
                <Redirect to={{
                    pathname: `${match.path}/aboutUs`,
                    state: { from: 'NOT FOUND PAGE' },
                }}/>
            </Switch>
        </div>
    )

};
  
export default connect(null, null)(WorkSpace);