import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser }  from '../actions/userActions';
import { bindActionCreators } from 'redux'
import FileBase64 from 'react-file-base64';


class CreateWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      category_id: '',
      avatar: '',
      show_attribute: ''
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
    this.props.actions.createWork(this.state);
    this.props.history.push('/users/profile')
  }

  handleOnChange = event => {

      this.setState({
        [event.target.className]: event.target.value        
      });
      
  }

  render(){
    return(
      <div>
        <h4>Create a New Work</h4>
        <div>
          <h5>Upload Img</h5>
          <FileBase64
            multiple={ false }
            onDone={ this.onDrop.bind(this) } />
        </div>
        <form style={{ marginTop: '16px' }} id="updateUserWork" onSubmit={ this.handleOnSubmit.bind(this) }>
            <label>Title</label>
            <input  type="text" className="title" placeholder="work title" onChange={ this.handleOnChange.bind(this) } />
            <label> Category </label>
            <div>

              <input type="radio" id={`category_${category.id}`}
                name={`category_${category.id}`} value={category.id}>
              <label for={`category_${category.id}`}>{category.name}</label>

            </div>

            <div>
              <input type="radio" className="show_attribute" id="show_attribute_true" 
                name="show_attribute" value="true">
              <label for="show_attribute_true" >True</label>

              <input type="radio" className="show_attribute" id="show_attribute_false" 
                name="show_attribute" value="true">
              <label for="show_attribute_false" >False</label>

            </div>
            <input type="submit" value="Create Work" />
        </form>
        <div>
            <label>Description</label>        

            <textarea className="description" form="updateUserWork" onChange={ this.handleOnChange.bind(this) } defaultValue="description"></textarea>
        </div>
      </div>
  
  )};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ createWork }, dispatch)};
};

export default connect(null, mapDispatchToProps)(CreateWork);
