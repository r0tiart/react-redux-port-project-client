import React from 'react';
import { connect } from 'react-redux';
import WorksLists from '../components/WorksList';
import CategoriesList from '../components/CategoriesList'


const CategoryPage = ({ category_works }) => 
  <div>   	
    <WorksLists works={ category_works } />
  </div>;

const mapStateToProps = (state, ownProps) => {
	const category_works = state.works.works.filter( work => work.category_id == ownProps.match.params.categoryId )

	if (category_works) {
    	return { category_works }
  	} else {
    	return { category_works: {} }
  	};
};

export default connect(mapStateToProps)(CategoryPage);