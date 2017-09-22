import React, { Component } from 'react';
import {connect} from 'react-redux';
import WorksList from '../components/WorksList'
import FileBase64 from 'react-file-base64';


class UserWorksShow extends Component {
	constructor(props) {
    	super(props);

	    this.state = {
	      username: '',
	      password: '',
	      email: '',
	      avatar: ''
	    };

    this.onDrop = this.onDrop.bind(this);

  }

    onDrop(picture) {
        this.setState({
            avatar: picture,
        });
    }


	render(){
		const { user, work } = this.props;

		return(
		  <div>
		    <h3>Username: { user.username }</h3>
		     <h3>Title: { work.title }</h3>

   			<p>Descriptin: { work.description } </p>
    		<span>Category: { work.category } </span>

    		<div>
	          <h5>Upload Avatar</h5>
	          <FileBase64
	            multiple={ false }
	            onDone={ this.onDrop.bind(this) } />
        	</div>
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
