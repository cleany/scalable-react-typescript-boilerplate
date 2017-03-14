import * as T from './constants';
import {
  SampleAuthAction,
  SampleAuthState,
} from './types';

export { SampleAuthState };
export const initialState: SampleAuthState = {
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
      data: action.payload,
    });
  case T.LOAD_FAILURE:
    return Object.assign({}, state, {
      isLoading: false,
      error: action.payload,
    });
  case T.AUTHENTICATE:
    return Object.assign({}, state, {
      isAuthed: true,
    });
  default:
    return state;
  }
};

export default sampleAuthReducer;
