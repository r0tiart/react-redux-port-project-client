import React from 'react';
import {connect} from 'react-redux';
import UsersList from '../components/UsersList'


const WorkShow = ({ work, user, category }) =>
  <div style={{ textAlign: 'center' }}>
    <h3><u> Title: { work.title } </u></h3>

    <img src={ work.avatar_full_url } alt='Work avatar' /><br/>

    <div>
    	By: < UsersList users={user}/>
    </div>
    <p>Descriptin: { work.description } </p>
    <span>Category: { category.name } </span>

  </div>;



function mapStateToProps(state, ownProps) {
  const work = state.works.works.find( work => work.id == ownProps.match.params.workId )
  const user = state.users.users.filter( user => user.id == work.user_id )
 	const category = state.categories.categories.filter( category => category.id == work.category_id )[0]

  if (work) {
    return { work, user, category }
  } else {
    return { work: {}, user, category }
  };
};

export default connect(mapStateToProps)(WorkShow);
