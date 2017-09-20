import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import UsersList from './UsersList';

const UsersPage = ({ match, users }) => 
  <div>
    <UsersList users={users} />
  </div>;

const mapStateToProps = (state) => {
  debugger;
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UsersPage);