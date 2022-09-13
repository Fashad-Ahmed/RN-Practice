import * as ActionTypes from '../store/actionTypes';
const initialState = {
  user: {
    username: '',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    default:
      return state;
  }
};
