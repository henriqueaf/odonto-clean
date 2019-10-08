import { Reducer } from 'redux';
import { ClientsTypes, ClientsState } from './types';

const INITIAL_STATE: ClientsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ClientsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientsTypes.FETCH_CLIENTS_REQUEST:
      return { ...state, loading: true };
    case ClientsTypes.FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ClientsTypes.FETCH_CLIENTS_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
