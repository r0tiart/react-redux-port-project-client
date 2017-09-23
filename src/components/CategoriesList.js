import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesList = ({ categories }) => {
  const renderCategories = categories.map(category => 
  <div key={ category.id }>
    <Link style={{ marginRight: '12px' }}  to={ `/categories/${ category.id }` }>{ category.name }</Link>
  </div>
  );
  
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }} >
      { renderCategories }
    </div>
  );
};

export default CategoriesList;