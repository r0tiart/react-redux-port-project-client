import React, { Component } from 'react';
import {connect} from 'react-redux';
import WorksList from '../components/WorksList'


class UserWorksShow extends Component {


	render(){
		const { user, work } = this.props;

		return(
		  <div>
		    <h3>Username: { user.username }</h3>
		     <h3>Title: { work.title }</h3>
		     
   			<p>Descriptin: { work.description } </p>
    		<span>Category: { work.category } </span>
		  </div>	
		);
	};

};

function mapStateToProps(state, ownProps) {
  const user = state.users.users.find(user => user.id == ownProps.match.params.userId)
  const work = state.works.userWorks.find( work => work.id == ownProps.match.params.workId)
  if (user) {
    return { user, work }
  } else {
    return { user: {}, work }
  };
};

export default connect(mapStateToProps)(UserWorksShow);
