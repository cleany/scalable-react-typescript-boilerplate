import * as T from './constants';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
<<<<<<< HEAD
  AuthenticateUser,
=======
>>>>>>> 99dd02b4c8cd30dc2846e14665bbf0c919c34be8
} from './actions';
import { ErrorType } from './types';

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

export const authenticate = (isAuthed: boolean): AuthenticateUser => ({
  type: T.AUTHENTICATE,
  payload: isAuthed,
});

export const actionCreators = {
  loadInitiation,
  loadSuccess,
  loadFailure,
  loadCancel,
  authenticate,
};

export default actionCreators;
