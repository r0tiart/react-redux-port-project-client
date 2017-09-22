import React from 'react';


const UserProfile = ({ user }) => {

  return (
    <div>
    <h1>{user.username}'s Profile Page</h1>
	<img src={user.full_url} /><br/>
	<span>Email: {user.email}</span>
    </div>
  );
};

export default UserProfile;