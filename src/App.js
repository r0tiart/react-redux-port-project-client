import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import NavBar  from './components/NavBar';
import UsersPage from './containers/UsersPage';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/users' component={UsersPage}/>
        </div>
      </Router>
    );
  }
}


