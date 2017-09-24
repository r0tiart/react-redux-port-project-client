import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const UsersList = ({ users }) => {
  const renderUsers = users.map(user => 
  <ListGroupItem key={ user.id }>
    <Link style={{ marginRight: '12px' }}  to={ `/users/${ user.id }` }>{ user.username }</Link>
  </ListGroupItem>
  );
  
  return (
    <div>
      <ListGroup>
        { renderUsers }
      </ListGroup>
    </div>
  );
};

export default UsersList;