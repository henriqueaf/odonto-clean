import { action, Action } from 'typesafe-actions';
import { ClientsTypes, Client } from './types';

export const loadRequest = (): Action => action(ClientsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Client[]): Action =>
  action(ClientsTypes.LOAD_SUCCESS, { data });
export const loadFailure = (error: Error): Action =>
  action(ClientsTypes.LOAD_FAILURE, { error });
