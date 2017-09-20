import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UserShow from './UserShow'
import UsersList from '../components/UsersList';

const UsersPage = ({ match, users }) => 
  <div>
    <Switch>
      
      <Route path={`${match.url}/:userId`} component={UserShow}/>
      <Route exact path={match.url} render={() => (
        <UsersList users={users} />
      )}/>

    </Switch>
  </div>;

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(UsersPage);