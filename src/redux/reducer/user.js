import { SAVE_SCORE } from '../actions/action';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  email: '',
};

function saveUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      ...action.payload,
    };
  case SAVE_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  default:
    return state;
  }
}

export default saveUser;
