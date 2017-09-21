import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import SignUp from './containers/SignUp'
import NavBar  from './components/NavBar';
import UsersPage from './containers/UsersPage';
import Login from './containers/Login'
import * as actions from './actions/userActions.js'
import { Link } from 'react-router-dom';



export class App extends Component {

  componentDidMount() {
      this.props.actions.fetchUsers()
  }


  render() {
    if(this.props.signedin){
      return (
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path='/users' component={UsersPage}/>
          </div>
        </Router>
      );
    } else {
      return(
        <Router>
          <div>
            <h1>Welcome!</h1>
            <div>
              <p>Please login or sign up </p>
              <Link style={{ marginRight: '12px' }} to={`/login`}>Login</Link> 
              <Link style={{ marginRight: '12px' }} to={`/signup`}>Signup</Link> 
            </div>

            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      );
    };  
  };
};

const mapStateToProps = (state) => {
  return { signedin: state.users.loggedIn }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default WrapperApp;

