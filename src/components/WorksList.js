import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const WorksLists = ({ works, id  }) => {

	if(id){

	  var renderWorks = works.map(work => 
	  	<ListGroupItem key={work.id}>
	   		 <Link style={{ marginRight: '12px' }}  to={ `/users/${ id }/works/${ work.id }` }>{ work.title }</Link>
	   	</ListGroupItem>
	     );
	} else {

	  var renderWorks = works.map(work => 
	  	<ListGroupItem key={work.id}>
	   		 <Link style={{ marginRight: '12px' }}  to={ `/works/${ work.id }` }>{ work.title }</Link>
	   	</ListGroupItem>
	     );
    }

  return (
    <div>
    	<ListGroup>
      		{ renderWorks }
      	</ListGroup>
    </div>
  );
};

export default WorksLists;