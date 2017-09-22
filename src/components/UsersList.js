import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
  const renderUsers = users.map(user => 
  <div key={ user.id }>
    <Link style={{ marginRight: '12px' }}  to={ `/users/${ user.id }` }>{ user.username }</Link>
  </div>
  );
  
  return (
    <div>
      { renderUsers }
    </div>
  );
};

export default UsersList;