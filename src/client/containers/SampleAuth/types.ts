import SampleAuth from './';
import { ActionCreatorsMapObject } from 'redux';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
  AuthenticateUser,
} from './actions';

export type LOAD_INITIATION_TYPE = 'SAMPLEAUTH/LOAD_INITIATION';
export type LOAD_SUCCESS_TYPE = 'SAMPLEAUTH/LOAD_SUCCESS';
export type LOAD_FAILURE_TYPE = 'SAMPLEAUTH/LOAD_FAILURE';
export type LOAD_CANCEL_TYPE = 'SAMPLEAUTH/LOAD_CANCEL';
export type AUTHENTICATE_TYPE = 'SAMPLEAUTH/AUTHENTICATE';
export type ActionType = LOAD_INITIATION_TYPE | LOAD_SUCCESS_TYPE | LOAD_FAILURE_TYPE | LOAD_CANCEL_TYPE |
                         AUTHENTICATE_TYPE;

export interface ErrorType { message: string }

export interface InputType { username: string, password: string }

export interface SampleAuthProps extends React.Props<typeof SampleAuth> {
  username: string;
  password: string;
  isLoading: boolean;
  error?: ErrorType;
  data?: any;
  isAuthed: boolean;
}

export interface SampleAuthState {
  username: string;
  password: string;
  isLoading: boolean;
  error?: ErrorType;
  data?: any;
  isAuthed: boolean;
}

export interface SampleAuthAction {
  type: ActionType;
  payload?: any;
}

interface ActionMap extends ActionCreatorsMapObject {
  loadInitiation: () => LoadInitiationAction;
  loadSuccess: (data: any) => LoadSuccessAction;
  loadFailure: (error: ErrorType) => LoadFailureAction;
  loadCancel: () => LoadCancelAction;
  authenticate: (data: InputType) => AuthenticateUser;
}

export interface SampleAuthDispatchProps {
  actions: ActionMap;
}

export type SampleAuthPropTypes = SampleAuthProps & SampleAuthDispatchProps;
