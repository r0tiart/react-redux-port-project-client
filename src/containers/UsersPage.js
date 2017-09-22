import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UserShow  from './UserShow'
import UsersList from '../components/UsersList';
import UserProfile from '../components/UserProfile'

class UsersPage extends Component {

 

  render(){

    const { match, users, user, userWorks } = this.props 

    return(
      <div>
        <Switch>
          <Route exact path={`${match.url}/profile`} render={() => (
            <UserProfile user={user} works={userWorks} />
          )}/>
          <Route path={`${match.url}/:userId`} component={UserShow} />
          <Route exact path={match.url} render={() => (
            <UsersList users={users}  />
          )}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    user: state.users.user,
    userWorks: state.works.userWorks
  };
};

export default connect( mapStateToProps )(UsersPage);