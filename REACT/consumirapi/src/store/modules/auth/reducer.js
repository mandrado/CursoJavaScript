import * as types from '../types';

const initialState = {
  IsLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line func-names
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
    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;

      return newState;
    }
    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.name = action.payload.name;
      newState.user.email = action.payload.email;
      newState.isLoading = false;

      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;

      return newState;
    }
    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;

      return newState;
    }

    default:
      return state;
  }
}
