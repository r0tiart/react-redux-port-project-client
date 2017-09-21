import React from 'react';


const UserProfile = ({ user }) => {
  // const renderProfile = users.map(user => 
  //   <Link style={{ marginRight: '12px' }} key={user.id} to={`/users/${user.id}`}>{user.username}</Link>
  // );
  return (
    <div>
    <h1>{user.username}'s Profile Page</h1>
	<img src={user.full_url} /><br/>
	<span>Email: {user.email}</span>
    </div>
  );
};

export default UserProfile;