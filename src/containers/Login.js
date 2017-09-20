import React, { Component } from 'react';
import { login } from '../actions/userActions';


class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
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
        <h4>Login!</h4>
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit}>
          <label>Username</label>
          <input  type="text" placeholder="Username" onChange={this.handleOnChange} />
          <label>Password</label>
          <input type="password" onChange={this.handleOnChange} />
          <input type="submit" value="Login" />
        </form>
      </div>
  
  )}
};

export default Login;