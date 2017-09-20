import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser }  from '../actions/userActions';
import { bindActionCreators } from 'redux'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { history } = this.props
    this.props.actions.loginUser(this.state);
    history.push('/')
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
        <form style={{ marginTop: '16px' }} onSubmit={ this.handleOnSubmit }>
          <label>Username</label>
          <input  type="text" placeholder="Username" onChange={ this.handleOnChange } />
          <label>Password</label>
          <input type="password" onChange={ this.handleOnChange } />
          <input type="submit" value="Login" />
        </form>
      </div>
  
  )}
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ loginUser }, dispatch)}
}

export default connect(null, mapDispatchToProps)(Login);
