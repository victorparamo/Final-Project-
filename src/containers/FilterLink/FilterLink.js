import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginActions from '../actions/Login_Actions';
​
const FilterLink = (props) => {
  const { filter, children } = props;
  
  return (
    <NavLink
      to={filter === LoginActions.creators.notLogged ? '/' : `/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      {children}
    </NavLink>
  )
}
​
export default FilterLink;