import React from 'react';
import WorksList from './WorksList'
import { Link } from 'react-router-dom';

const UserProfile = ({ user, works }) => {
  return (
    <div>
    <h1>{user.username}'s Profile Page</h1>
	<img src={user.full_url} alt='user avatar' /><br/>
	<span>Email: {user.email}</span>
	<h4>Works</h4>
	<Link style={{ marginRight: '12px' }}  to='/works/new'>Create New Work</Link>

	<br/>
	< WorksList works={works} id={user.id} />
    </div>
  );
};

export default UserProfile;