import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesList = ({ categories }) => {
  const recderCategories = categories.map(category => 
  <div key={ category.id }>
    <Link style={{ marginRight: '12px' }}  to={ `/categories/${ category.id }` }>{ category.name }</Link>
  </div>
  );
  
  return (
    <div>
      { recderCategories }
    </div>
  );
};

export default CategoriesList;