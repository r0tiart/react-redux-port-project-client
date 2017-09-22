import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import WorksLists from '../components/WorksList';
import WorkShow from './WorkShow'


const WorksPage = ({ match, works, work }) => 
  <div>

    <Route path={`${match.url}/:workId`} component={WorkShow} />

    <Route exact path={ match.url } render={() => (
        <WorksLists works={ works } />
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    works: state.works.works,
    work: state.works.work
  };
};

export default connect(mapStateToProps)(WorksPage);