const INITIAL_STATE = {};

function saveUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
}

export default saveUser;
