import * as types from '../types';

const initialState = {
  IsLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      //  console.log('REDUCER', action.payload);
      const newState = { ...state };
      newState.isLoading = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;

      return newState;
    }
    case types.LOGIN_FAILURE: {
      //  console.log('REDUCER', action.payload);
      const newState = { ...initialState };

      return newState;
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      // console.log('REDUCER', action.payload);

      return newState;
    }

    default:
      return state;
  }
}
