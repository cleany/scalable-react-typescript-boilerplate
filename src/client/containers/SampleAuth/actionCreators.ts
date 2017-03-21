import * as T from './constants';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
  AuthenticateUser,
} from './actions';
import { ErrorType, InputType } from './types';

export const loadInitiation = (): LoadInitiationAction => ({
  type: T.LOAD_INITIATION,
});

export const loadSuccess = (data: any): LoadSuccessAction => ({
  type: T.LOAD_SUCCESS,
  payload: data,
});

export const loadFailure = (error: ErrorType): LoadFailureAction => ({
  type: T.LOAD_FAILURE,
  payload: error,
});

export const loadCancel = (): LoadCancelAction => ({
  type: T.LOAD_CANCEL,
});

export const authenticate = (data: InputType): AuthenticateUser => ({
  type: T.AUTHENTICATE,
  payload: data,
});

export const actionCreators = {
  loadInitiation,
  loadSuccess,
  loadFailure,
  loadCancel,
  authenticate,
};

export default actionCreators;
