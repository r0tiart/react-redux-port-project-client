export function fetchCategories() {
  return (dispatch) => {
    return fetch('http://localhost:4000/categories',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ data })
   })
      .then(response => response.json())
      .then(categories => dispatch({ type: 'FETCH_CATEGORIES', payload: categories })
    );
  };
};