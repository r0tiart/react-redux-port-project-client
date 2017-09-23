import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createWork }  from '../actions/workActions';
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
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.actions.createWork(this.state, this.props.uid);
    this.props.history.push('/users/profile')
  };

  handleOnChange = event => {
      this.setState({
        [event.target.className]: event.target.value        
      });
  };

  handleClick = event => {
    this.setState({
      [event.target.className]: event.target.value        
    });
  }

  render(){
    const { uid } = this.props;

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

            <div>

              <h5>Categories: </h5>

              <label htmlFor="category_1">Garments</label>

              <input type="radio" id="category_1" onClick={ this.handleClick.bind(this) } className="category_id"
                name="category_1" value="1" />
              

            </div>

            <div>
              <input type="radio" className="show_attribute" id="show_attribute_true" onClick={ this.handleClick.bind(this) }
                name="show_attribute" value="true" />
              <label htmlFor="show_attribute_true" >True</label>

              <input type="radio" className="show_attribute" id="show_attribute_false" onClick={ this.handleClick.bind(this) }
                name="show_attribute" value="false" />
              <label htmlFor="show_attribute_false" >False</label>

            </div>

            <div>
              <label>Description</label>        

              <textarea className="description" form="updateUserWork" onChange={ this.handleOnChange.bind(this) } ></textarea>
            </div>
            <input type="submit" value="Create Work" />
        </form>


      </div>
  
  )};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ createWork }, dispatch)};
};

const mapStateToProps = (state) => {
  return {
    uid: state.users.user.id
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateWork);
