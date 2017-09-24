import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser }  from '../actions/userActions';
import { bindActionCreators } from 'redux'
import FileBase64 from 'react-file-base64';
import { Jumbotron } from 'react-bootstrap';


class SignUp extends Component {
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

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.actions.createUser(this.state);
    this.props.history.push('/users')
  }

  handleOnChange = event => {

      this.setState({
        [event.target.className]: event.target.value        
      });
      
  }

  render(){
    return(
      <div style={{ textAlign: 'left', marginLeft: '12px', marginRight: '12px'}}>
        <Jumbotron>
          <h4>Create a New User</h4>
          <div >
            <h5>Upload Avatar</h5>
            <FileBase64 
              multiple={ false }
              onDone={ this.onDrop.bind(this) } />
          </div>
          <form style={{ marginTop: '16px' }} onSubmit={ this.handleOnSubmit.bind(this) }>
            <label>Username</label>
            <input  type="text" className="username" placeholder="Username" onChange={ this.handleOnChange.bind(this) } />
            <label>Email</label>
            <input  type="text" className="email" placeholder="user@email.com" onChange={ this.handleOnChange.bind(this) } />
            <label>Password</label>
            <input type="password" className="password" onChange={ this.handleOnChange.bind(this) } />

            <input type="submit" value="Create User" />
          </form>
        </Jumbotron>
      </div>
  
  )};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ createUser }, dispatch)};
};

export default connect(null, mapDispatchToProps)(SignUp);
