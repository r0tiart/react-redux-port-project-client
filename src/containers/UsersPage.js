import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UserShow  from './UserShow'
import UsersList from '../components/UsersList';
import UserProfile from '../components/UserProfile'

const UsersPage = ({ match, users, user }) => 
  <div>
    <Switch>
      <Route exact path={`${match.url}/profile`} render={() => (
        <UserProfile user={user} />
      )}/>
      <Route path={`${match.url}/:userId`} component={UserShow} />
      <Route exact path={match.url} render={() => (
        <UsersList users={users} />
      )}/>
    </Switch>
  </div>;

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    user: state.users.user
  };
}

export default connect(mapStateToProps)(UsersPage);