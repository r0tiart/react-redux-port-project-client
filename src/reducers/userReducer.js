export default function usersReducer(state = {loading: false, loggedIn: false,  users:[], user: ''}, action) {
  switch (action.type) {
  	case 'LOADING_USERS':
  	  return Object.assign({}, state, {loading: true});
    case 'CREATE_USER':
      return Object.assign({}, state, {loading: false, loggedIn: true, user: action.payload});
    case 'LOGIN':
      return Object.assign({}, state, {loading: false, loggedIn: true, user: action.payload});
    default:
      return state;
  }
}