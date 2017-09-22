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
  };
};