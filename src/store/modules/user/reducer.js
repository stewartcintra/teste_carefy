import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        break;
      }
      case '@user/UPDATE_USER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/UPDATE_USER_SUCCESS': {
        draft.loading = false;
        draft.user = action.payload.user;
        break;
      }
      case '@user/UPDATE_USER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
