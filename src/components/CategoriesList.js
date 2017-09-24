import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesList = ({ categories }) => {
  const renderCategories = categories.map(category => 
    <Link style={{ marginRight: '12px' }}  key={ category.id } to={ `/works/category/${ category.id }` }>{ category.name }</Link>
  );
  
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', textAlign: 'center' }} >
      { renderCategories }
    </div>
  );
};

export default CategoriesList;