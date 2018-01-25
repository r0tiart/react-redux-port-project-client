import React, { Component } from 'react';
import {connect} from 'react-redux';
import WorksList from '../components/WorksList'
import FileBase64 from 'react-file-base64';
import { updateWork }  from '../actions/workActions';
import { bindActionCreators } from 'redux';


class UserWorksShow extends Component {
	constructor(props) {
    	super(props);
	    this.state = {
	      title: this.props.work.title,
	      description: this.props.work.description,
        show_attribute: this.props.work.show_attribute,
	      avatar: ''
	    };

    this.onDrop = this.onDrop.bind(this);

  }

    onDrop(picture) {
        this.setState({
            avatar: picture,
        });
    }

    uploadPattern(pattern){
      debugger;
    }

  	handleOnSubmit = event => {
		event.preventDefault();
		this.props.actions.updateWork(this.state, this.props.work.id);
		this.props.history.push('/users/profile')
	}

	handleOnChange = event => {

      this.setState({
        [event.target.className]: event.target.value        
      });
      
  }

  
  handleClick = event => {
    this.setState({
      [event.target.className]: event.target.value        
    });
  }

	render(){
		const { user, work, category } = this.props;

		return(
		  <div>
        <div style={{ textAlign: 'center' }} >
  		    <h3><u>Username: { user.username }</u></h3>
  		     <h3><u>Title: { work.title }</u></h3>

          <img src={ work.avatar_full_url } alt='Work avatar' /><br/>

          <p>Description: { work.description } </p>
          <span>Category: { category.name } </span>

          <p> Pattern Place Holder </p>
        </div>

    		<div style={{ textAlign: 'left', marginLeft: '12px', marginRight: '12px'}}>
          <h5>Upload Image</h5>
          <FileBase64
            multiple={ false }
            onDone={ this.onDrop.bind(this) } />
        </div>

        <div style={{ textAlign: 'left', marginLeft: '12px', marginRight: '12px'}}>
          <h5>Upload Pattern</h5>
          <FileBase64
            multiple={ false }
            onDone={ this.uploadPattern.bind(this) } />
        </div>

        <div style={{ marginTop: '16px', textAlign: 'left', marginLeft: '12px', marginRight: '12px' }} >
          <h4>Edit Work</h4>
        	<form  id="updateUserWork" onSubmit={ this.handleOnSubmit.bind(this) }>
	          <label>Title</label><br/>
	          <input  type="text" className="title" placeholder={work.title} onChange={ this.handleOnChange.bind(this) } /><br/>
	          <label>Description</label><br/>
            <textarea className="description" form="updateUserWork" onChange={ this.handleOnChange.bind(this) } defaultValue={ work.description } ></textarea><br/>

            <div>

              <h5> Make this viewable to public? </h5>
              <input type="radio" className="show_attribute" id="show_attribute_true" onClick={ this.handleClick.bind(this) }
                name="show_attribute" value="true" defaultChecked={ work.show_attribute === true} />
              <label htmlFor="show_attribute_true" >Yes</label>{' '}

              <input type="radio" className="show_attribute" id="show_attribute_false" onClick={ this.handleClick.bind(this) }
                name="show_attribute" value="false" defaultChecked={ work.show_attribute === false  }  />
              <label htmlFor="show_attribute_false" >No</label>{' '}


            </div>
	          <input type="submit" value="Update Work" />
        	</form>
        </div>
		  </div>	
		);
	};

};

function mapStateToProps(state, ownProps) {
  const user = state.users.users.find(user => user.id == ownProps.match.params.userId)
  const work = state.works.userWorks.find( work => work.id == ownProps.match.params.workId)
  const category = state.categories.categories.filter( category => category.id == work.category_id )[0]

  if (user) {
    return { user, work, category }
  } else {
    return { user: {}, work, category }
  };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ updateWork }, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserWorksShow);
