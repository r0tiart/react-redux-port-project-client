import React from 'react';
import {connect} from 'react-redux';
import UsersList from '../components/UsersList'


const WorkShow = ({ work, user }) =>
  <div>
    <h3>Title: { work.title }</h3>

    <img src={ work.avatar_full_url } alt='Work avatar' /><br/>

    <div>
    	By: < UsersList users={user}/>
    </div>
    <p>Descriptin: { work.description } </p>
    <span>Category: { work.category } </span>

  </div>;



function mapStateToProps(state, ownProps) {
  const work = state.works.works.find( work => work.id == ownProps.match.params.workId )
  const user = state.users.users.filter( user => user.id == work.user_id )
 	
  if (work) {
    return { work, user }
  } else {
    return { work: {}, user }
  };
};

export default connect(mapStateToProps)(WorkShow);
