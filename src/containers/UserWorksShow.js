import React, { Component } from 'react';
import {connect} from 'react-redux';
import WorksList from '../components/WorksList'
import FileBase64 from 'react-file-base64';
import { updateWork }  from '../actions/workActions';


class UserWorksShow extends Component {
	constructor(props) {
    	super(props);
	    this.state = {
	      title: this.props.work.title,
	      category_id: this.props.work.category_id,
	      description: this.props.work.description,
	      avatar_url: this.props.work.avatar,
	      avatar: ''
	    };

    this.onDrop = this.onDrop.bind(this);

  }

    onDrop(picture) {
        this.setState({
            avatar: picture,
        });
    }

  	handleOnSubmit = event => {
		event.preventDefault();
		debugger;
		this.props.actions.createUser(this.state);
		this.props.history.push('/profile')
	}

	handleOnChange = event => {

      this.setState({
        [event.target.className]: event.target.value        
      });
      
  	}

	render(){
		const { user, work } = this.props;

		return(
		  <div>
		    <h3>Username: { user.username }</h3>
		     <h3>Title: { work.title }</h3>

   			<p>Description: { work.description } </p>
    		<span>Category: { work.category } </span>

    		<div>
	          <h5>Upload Image</h5>
	          <FileBase64
	            multiple={ false }
	            onDone={ this.onDrop.bind(this) } />
        	</div>

        	<form style={{ marginTop: '16px' }} id="updateUserWork" onSubmit={ this.handleOnSubmit.bind(this) }>
	          <label>Title</label>
	          <input  type="text" className="title" value={work.title} onChange={ this.handleOnChange.bind(this) } />
	          <label>Descriptin</label>	      

	          <input type="submit" value="Update Work" />
        	</form>
        	<div>
        		<textarea className="description" form="updateUserWork" onChange={ this.handleOnChange.bind(this) } defaultValue={ work.description } ></textarea>
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

export default connect(mapStateToProps, { updateWork })(UserWorksShow);
