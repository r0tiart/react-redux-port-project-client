import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
  const renderUsers = users.map(user => 
  <div>
    <Link style={{ marginRight: '12px' }} key={ user.id } to={ `/users/${ user.id }` }>{ user.username }</Link>
  </div>
  );
  
  return (
    <div>
      { renderUsers }
    </div>
  );
};

export default UsersList;