/**
 * Action types
 */
export enum ClientsTypes {
  LOAD_REQUEST = '@clients/LOAD_REQUEST',
  LOAD_SUCCESS = '@clients/LOAD_SUCCESS',
  LOAD_FAILURE = '@clients/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Client {
  id: number;
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
