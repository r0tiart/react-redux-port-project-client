import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser }  from '../actions/userActions';
import { bindActionCreators } from 'redux';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  };

  handleOnSubmit = event => {

    event.preventDefault();
    this.props.actions.loginUser(this.state);
    this.props.history.push('/users');
  };

  handleOnChange = event => {

    this.setState({
        [event.target.className]: event.target.value        
    });

  };

  render(){
    return(
      <div>
        <h4>Login!</h4>
        <form style={{ marginTop: '16px' }} onSubmit={ this.handleOnSubmit.bind(this) }>
          <label>Username</label>
          <input  type="text" className="username" placeholder="Username" onChange={ this.handleOnChange.bind(this) } />
          <label>Password</label>
          <input type="password" className="password" onChange={ this.handleOnChange.bind(this) } />
          <input type="submit" value="Login" />
        </form>
      </div>
  
  )}
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ loginUser }, dispatch)}
}

export default connect(null, mapDispatchToProps)(Login);
