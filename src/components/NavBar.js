import React from 'react';
import { NavLink } from 'react-router-dom';
import {  Button } from 'react-bootstrap'

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', marginLeft: '12px', marginRight: '10px'}}>
      <Button bsStyle="default" bsSize="small" active>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
        >
          Home
        </NavLink>
      </Button>
      <Button bsStyle="default" bsSize="small" active>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/users"
        >
          Users
        </NavLink>
      </Button>
      <Button bsStyle="default" bsSize="small" active>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/users/profile"
        >
          Profile
        </NavLink>
      </Button>   
      <Button bsStyle="default" bsSize="small" active>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/works"
        >
          Works
        </NavLink>
      </Button>
    </div>   
  );
};

export default NavBar;
