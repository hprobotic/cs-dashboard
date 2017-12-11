// @flow
export const SAVE_INFO = 'SAVE_INFO';

const initialState = {
  info: {
    firstName: '',
    lastName: '',
    email: '',
    payAmount: 1000,
    currency: 'usd'
  }
};

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'SAVE_INFO':
      return {
        ...state,
        info: action.payload.userInfo
      };
    default:
      return state;
  }
};

export const saveInfo = (userInfo: Object) => ({
  type: SAVE_INFO,
  payload: { userInfo }
});
