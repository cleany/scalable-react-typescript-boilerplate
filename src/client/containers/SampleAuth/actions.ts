// import { PayloadAction } from '../../types';
import { Action } from 'redux';
import { ErrorType } from './types';
import {
  LOAD_INITIATION_TYPE,
  LOAD_SUCCESS_TYPE,
  LOAD_FAILURE_TYPE,
  LOAD_CANCEL_TYPE,
  AUTHENTICATE_TYPE,
} from './types';

export interface AuthenticateUser extends Action {
  type: AUTHENTICATE_TYPE;
  payload: boolean;
}

export interface LoadInitiationAction extends Action {
  type: LOAD_INITIATION_TYPE;
}

export interface LoadSuccessAction extends Action {
  type: LOAD_SUCCESS_TYPE;
  payload: any;
}

export interface LoadFailureAction extends Action {
  type: LOAD_FAILURE_TYPE;
  payload: ErrorType;
}

export interface LoadCancelAction extends Action {
  type: LOAD_CANCEL_TYPE;
}

export type SampleAuthActionType = LoadInitiationAction | LoadSuccessAction |
                                   LoadFailureAction | LoadCancelAction |
                                   AuthenticateUser;
