import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions.js';

const UserShow = ({ user }) =>
  <div>
    <h3>Username: {user.username}</h3>
  </div>



function mapStateToProps(state, ownProps) {
  const user = state.users.users.find(user => user.id == ownProps.match.params.userId)
 
  if (user) {
    return { user }
  } else {
    return { user: {} }
  }
}

const WrapperUserShow = connect(mapStateToProps)(UserShow)
export default WrapperUserShow;