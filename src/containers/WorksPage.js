import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';


const WorksPage = ({ match, works, work }) => 
  <div>
    <Switch>
      <Route path={`${match.url}/:workId`} component={UserShow} />
      <Route exact path={match.url} render={() => (
        <WorksList works={works} />
      )}/>
    </Switch>
  </div>;

const mapStateToProps = (state) => {
  return {
    works: state.works,
    work: state.work
  };
}

export default connect(mapStateToProps)(WorksPage);