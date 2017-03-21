import * as T from './constants';
import {
  SampleAuthAction,
  SampleAuthState,
} from './types';

export { SampleAuthState };
export const initialState: SampleAuthState = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
  data: null,
  isAuthed: false,
};

const sampleAuthReducer = (
  state: SampleAuthState = initialState,
  action: SampleAuthAction,
): SampleAuthState => {
  switch (action.type) {
  case T.LOAD_INITIATION:
    return Object.assign({}, state, {
      isLoading: true,
    });
  case T.LOAD_SUCCESS:
    return Object.assign({}, state, {
      isLoading: false,
      username: '',
      password: '',
      data: action.payload,
    });
  case T.LOAD_FAILURE:
    return Object.assign({}, state, {
      isLoading: false,
      error: action.payload,
    });
  case T.AUTHENTICATE:
    return Object.assign({}, state, {
      username: action.payload.username,
      password: action.payload.password,
      isAuthed: true,
    });
  default:
    return state;
  }
};

export default sampleAuthReducer;
