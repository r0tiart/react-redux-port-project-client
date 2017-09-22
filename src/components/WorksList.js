import React from 'react';
import { Link } from 'react-router-dom';

const WorksLists = ({ works }) => {

  const renderWorks = works.map(work => 
  	<div>
   		 <Link style={{ marginRight: '12px' }} key={work.id} to={ `/works/${ work.id }` }>{ work.title }</Link>
   	</div>
     );
  
  return (
    <div>
      { renderWorks }
    </div>
  );
};

export default WorksLists;