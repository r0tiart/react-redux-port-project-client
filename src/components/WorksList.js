import React from 'react';
import { Link } from 'react-router-dom';

const WorksLists = ({ works, id  }) => {

	if(id){

	  var renderWorks = works.map(work => 
	  	<div key={work.id}>
	   		 <Link style={{ marginRight: '12px' }}  to={ `/users/${ id }/works/${ work.id }` }>{ work.title }</Link>
	   	</div>
	     );
	} else {

	  var renderWorks = works.map(work => 
	  	<div key={work.id}>
	   		 <Link style={{ marginRight: '12px' }}  to={ `/works/${ work.id }` }>{ work.title }</Link>
	   	</div>
	     );
    }

  return (
    <div>
      { renderWorks }
    </div>
  );
};

export default WorksLists;