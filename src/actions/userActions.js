export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS', payload: users }));
  };
}