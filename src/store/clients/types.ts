/**
 * Action types
 */
export enum ClientsTypes {
  FETCH_CLIENTS_REQUEST = '@clients/FETCH_CLIENTS_REQUEST',
  FETCH_CLIENTS_SUCCESS = '@clients/FETCH_CLIENTS_SUCCESS',
  FETCH_CLIENTS_FAILURE = '@clients/FETCH_CLIENTS_FAILURE',
}

/**
 * Data types
 */
export interface Client {
  id: string;
  name: string;
}

export interface ClientsList {
  clients: Client[];
}

/**
 * State type
 */
export interface ClientsState {
  readonly data: Client[];
  readonly loading: boolean;
  readonly error: boolean;
}
