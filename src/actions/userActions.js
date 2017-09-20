export function fetchUsers() {
  return (dispatch) => {
    return fetch('http://localhost:4000/users',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ data })
   })
      .then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS', payload: users }));
  };
}

export function fetchUser(id){
  return (dispatch) => {
    return fetch(`http://localhost:4000/user/${id}`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ data })
   })
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER', payload: user }));
  };
}