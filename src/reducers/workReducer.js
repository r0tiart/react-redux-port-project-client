export default function worksReducer(state = { loading: false, works: [], work: '', userWorks: [] }, action) {
  switch (action.type) {
  	case 'LOADING_WORKS':
  	  return Object.assign( {}, state, { loading: true } );
    case 'FETCH_WORKS':
      return Object.assign( {}, state, { loading: false, works: action.payload } );
    case 'FETCH_USER_WORKS':
        return Object.assign( {}, state, { loading: false, userWorks: action.payload } );
    default:
      return state;
  }
};