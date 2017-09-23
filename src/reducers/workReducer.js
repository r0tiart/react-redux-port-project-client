export default function worksReducer(state = { loading: false, works: [], work: '', userWorks: [] }, action) {
  switch (action.type) {
  	case 'LOADING_WORKS':
  	  return Object.assign( {}, state, { loading: true } );
    case 'FETCH_WORKS':
      return Object.assign( {}, state, { loading: false, works: action.payload } );
    case 'FETCH_USER_WORKS':
        return Object.assign( {}, state, { loading: false, userWorks: action.payload } );
    case 'UPDATE_WORK':
      var works_index = state.works.findIndex( work => work.id === action.payload.id)
      var user_works_index = state.userWorks.findIndex( work => work.id === action.payload.id )

      state.works[works_index] = action.payload
      state.userWorks[user_works_index] = action.payload

      return state;

    case 'CREATE_WORK':
      if ( action.payload.show_attribute ){
        return Object.assign({}, state, { loading: false, works: state.works.concat(action.payload) ,userWorks: state.userWorks.concat(action.payload) })
      } else {
      return Object.assign({}, state, { loading: false, userWorks: state.userWorks.concat(action.payload) })
      };
    default:
      return state;
  }
};