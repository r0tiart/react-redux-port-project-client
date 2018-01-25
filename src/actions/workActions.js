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

export function createWork(data, id){
  var new_data = ''

  if ( data.avatar === '' ){
    delete data["avatar"]
     new_data = data

  } else {
     new_data = Object.assign({}, data, {avatar: data.avatar.base64})
  };


  return (dispatch) => {
    return fetch(`http://localhost:4000/works`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "work": new_data, "uid": id })
   })
      .then(response => response.json())
      .then(work => dispatch({ type: 'CREATE_WORK', payload: work }))
      .catch(function(error) {
      window.alert("Unable to create work; title, category and description can't be blank");
    });
  };
};


export function updateWork(data , id){
  var new_data = ''
  if ( data.avatar === '' ){
    delete data["avatar"]
     new_data = data

  } else {
     new_data = Object.assign({}, data, {avatar: data.avatar.base64})
  };


  return (dispatch) => {
    return fetch(`http://localhost:4000/works/${id}`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({ "work": new_data })
   })
      .then(response => response.json())
      .then( work => dispatch({ type: 'UPDATE_WORK', payload: work }))
      .then( work => dispatch(fetchWorks()))    

  }
};