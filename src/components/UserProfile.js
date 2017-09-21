import React from 'react';


const UserProfile = ({ user }) => {
  // const renderProfile = users.map(user => 
  //   <Link style={{ marginRight: '12px' }} key={user.id} to={`/users/${user.id}`}>{user.username}</Link>
  // );
  
  return (
    <div>
    <h1>{user.username}'s Profile Page</h1>
	<span>{user.email}</span>
	<img src={user.avatar} />
    </div>
  );
};

export default UserProfile;