import React from 'react';
import {connect} from 'react-redux';


const WorkShow = ({ work }) =>
  <div>
    <h3>Title: { work.title }</h3>
    <p>Descriptin: { work.description } </p>
    <span>Category: { work.category } </span>

  </div>;



function mapStateToProps(state, ownProps) {
  const work = state.works.works.find(work => work.id == ownProps.match.params.workId)
 	
  if (work) {
    return { work }
  } else {
    return { work: {} }
  };
};

export default connect(mapStateToProps)(WorkShow);
