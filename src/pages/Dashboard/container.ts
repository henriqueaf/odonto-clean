import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import Dashboard from '.';
import { ApplicationState } from '../../store';
import { ClientsList } from '../../store/clients/types';
import { fetchClientsRequest } from '../../store/clients/actions';

const mapStateToProps: (state: ApplicationState) => ClientsList = state => ({
  clients: state.clients.data,
});

const mapDispatchToProps: (dispatch: Dispatch) => void = dispatch =>
  bindActionCreators({ fetchClientsRequest }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
