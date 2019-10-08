import { action, Action } from 'typesafe-actions';
import {
  QuerySnapshot,
  QueryDocumentSnapshot,
} from '@firebase/firestore-types';
import { ClientsTypes, Client } from './types';

export const fetchClientsRequest = (): Action =>
  action(ClientsTypes.FETCH_CLIENTS_REQUEST);
export const fetchClientsSuccess = (data: Client[]): Action =>
  action(ClientsTypes.FETCH_CLIENTS_SUCCESS, { data });
export const fetchClientsFailure = (error: Error): Action =>
  action(ClientsTypes.FETCH_CLIENTS_FAILURE, { error });

export const syncClientsSuccess = (data: unknown): Action => {
  const snapshot = data as QuerySnapshot;

  const clients: Client[] = [];

  snapshot.forEach((document: QueryDocumentSnapshot) => {
    clients.push({
      id: document.id,
      name: document.get('name'),
    });
  });

  return action(ClientsTypes.FETCH_CLIENTS_SUCCESS, { data: clients });
};
