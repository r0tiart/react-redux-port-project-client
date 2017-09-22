import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';


const WorksPage = ({ match, works, work }) => 
  <div>
    <h1> test</h1>
  </div>;

const mapStateToProps = (state) => {
  return {
    works: state.works,
    work: state.work
  };
}

export default connect(mapStateToProps)(WorksPage);