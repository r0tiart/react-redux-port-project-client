import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import WorksLists from '../components/WorksList';
import WorkShow from './WorkShow'
import CreateWork from './WorksNew'
import CategoriesList from '../components/CategoriesList'


const WorksPage = ({ match, works, work, categories }) => 
  <div>
    < CategoriesLst categories={ categories }/>
    <Switch>
      <Route exact path={`${match.url}/new`} component={ CreateWork } />

      <Route path={`${match.url}/:workId`} component={ WorkShow } />

      <Route exact path={ match.url } render={() => (
          <WorksLists works={ works } />
      )}/>
    </Switch>  
  </div>;

const mapStateToProps = (state) => {
  return {
    works: state.works.works,
    work: state.works.work,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(WorksPage);