export default function worksReducer(state = { loading: false, works: [], work: '' }, action) {
  switch (action.type) {
  	case 'LOADING_WORKS':
  	  return Object.assign( {}, state, { loading: true } );
    case 'FETCH_WORKS':
      return Object.assign( {}, state, { loading: false, works: action.payload } );
    default:
      return state;
  };
};