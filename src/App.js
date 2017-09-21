import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import NavBar  from './components/NavBar';
import UsersPage from './containers/UsersPage';
import Login from './containers/Login'
import * as actions from './actions/userActions.js'



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
            <Login />
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

