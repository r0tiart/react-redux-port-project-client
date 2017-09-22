export function fetchWorks() {
  return (dispatch) => {
    return fetch('http://localhost:4000/works',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ data })
   })
      .then(response => response.json())
      .then(works => dispatch({ type: 'FETCH_WORKS', payload: works })
    );
  }
};

export function fetchUserWorks(id){
  return (dispatch) => {
    return fetch(`http://localhost:4000/users/${id}/works`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ data })
   })
      .then(response => response.json())
      .then(works => dispatch({ type: 'FETCH_USER_WORKS', payload: works })
    );
  }
};


export function updateWork(data , id){

  if ( data.avatar === '' ){
    delete data["avatar"]
    var new_data = data
    
  } else {
    var new_data = Object.assign({}, data, {avatar: data.avatar.base64})
  };
  return (dispatch) => {
    return fetch(`http://localhost:4000/works/${id}`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "work": new_data })
   })
      .then(response => response.json())
      .then(user => dispatch({ type: 'USER_WORK', payload: user }))
      .catch(function(error) {
      window.alert('Unable to create user; no fields can be blank and username and email must be unique. Please try again.');
    });
  };
};