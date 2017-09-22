import React, { Component } from 'react';
import {connect} from 'react-redux';
import WorksList from '../components/WorksList'


class UserShow extends Component {


	render(){
		const { user, works } = this.props;

		return(
		  <div>
		    <h3>Username: { user.username }</h3>
		    <WorksList works={ works } />
		  </div>	
		);
	};

};

function mapStateToProps(state, ownProps) {
  const user = state.users.users.find(user => user.id == ownProps.match.params.userId)
  const works = state.works.works.filter( work => work.user_id == ownProps.match.params.userId)
  if (user) {
    return { user, works }
  } else {
    return { user: {}, works }
  };
};

export default connect(mapStateToProps)(UserShow);
