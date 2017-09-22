import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import {connect} from 'react-redux';
import SignUp from './containers/SignUp';
import NavBar  from './components/NavBar';
import UsersPage from './containers/UsersPage';
import WorksPage from './containers/WorksPage';
import Login from './containers/Login';
import { Link } from 'react-router-dom';
import * as userActions from './actions/userActions.js';
import * as workActions from './actions/workActions.js';
import { bindActionCreators } from 'redux';


export class App extends Component {

  componentWillUpdate(nextProps) {
     this.props.actions.fetchUsers();
     this.props.actions.fetchWorks();
     this.props.actions.fetchUserWorks(nextProps.session_id)
  };

  componentDidUpdate(){
    
  }

  render() {
    if(this.props.signedin){
      return (
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path='/works' component={WorksPage} />
            <Route path='/users' component={UsersPage} />
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
    }
  };
};

const mapStateToProps = (state) => {
  return { signedin: state.users.loggedIn, session_id: state.users.sessionId };
};

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators({...userActions, ...workActions}, dispatch)};
};

const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default WrapperApp;

