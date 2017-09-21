import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser }  from '../actions/userActions';
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router'


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.actions.loginUser(this.state);
  }

  handleOnChange = event => {
    if ( event.target.type === 'password' )
      {   this.setState({
            password: event.target.value
          });
      }else if( event.target.type === 'text' ){
        this.setState({
            username: event.target.value
        });
      }
  }

  render(){
    return(
      <div>
        <h4>Create a New User</h4>
        <form style={{ marginTop: '16px' }} onSubmit={ this.handleOnSubmit.bind(this) }>
          <label>Username</label>
          <input  type="text" placeholder="Username" onChange={ this.handleOnChange.bind(this) } />
          <label>Password</label>
          <input type="password" onChange={ this.handleOnChange.bind(this) } />
          <input type="submit" value="Login" />
        </form>
      </div>
  
  )}
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ loginUser }, dispatch)}
}

export default connect(null, mapDispatchToProps)(SignUp);
