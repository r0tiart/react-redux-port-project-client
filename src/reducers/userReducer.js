export default function usersReducer(state = {loading: false,  users:[], user: ''}, action) {
  switch (action.type) {
  	case 'LOADING_USERS':
  	  return Object.assign({}, state, {loading: true});
    case 'FETCH_USERS':
      return Object.assign({}, state, {loading: false, users: action.payload.users});
    case 'LOGIN':
      return Object.assign({}, state, {loading: false, user: action.payload.user});
    default:
      return state;
  }
}