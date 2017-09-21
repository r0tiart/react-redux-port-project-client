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
};

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

export function loginUser(data){
  return(dispatch) => {
    return fetch('http://localhost:4000/sessions',{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({"user": data})
    }).then(response => response.json()
     ).then(user => dispatch({ type: 'LOGIN', payload: user})
     ).catch(function(error) {
      window.alert('Username or password is incorrect. Please try again.');
    });
  }
};