import React from 'react';
import WorksList from './WorksList'
import { Link } from 'react-router-dom';

const UserProfile = ({ user, works }) => {
  return (
    <div>
    	<div style={{ textAlign: 'center' }}>
		    <h1><u>{user.username}'s Profile Page</u></h1>
			<img src={user.full_url} alt='user avatar' /><br/>
			<span>Email: {user.email}</span>
			<h4>Works</h4>
			<Link style={{ marginRight: '12px' }}  to='/works/new'>Create New Work</Link>
		</div>
		<br/><br/>
		< WorksList works={works} id={user.id} style={{ textAlign: 'left' }}/>
    </div>
  );
};

export default UserProfile;