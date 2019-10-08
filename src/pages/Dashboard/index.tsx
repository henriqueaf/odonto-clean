import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ClientsList } from '../../store/clients/types';

type StateProps = ClientsList;

interface DispatchProps {
  fetchClientsRequest(): void;
}

export type Props = StateProps & DispatchProps;

const Dashboard: React.FC<Props> = ({ clients, fetchClientsRequest }) => {
  useEffect(() => {
    fetchClientsRequest();
  }, [fetchClientsRequest]);

  return (
    <ul className="list-group">
      {clients.map(client => (
        <Link
          to="/"
          className="list-group-item list-group-item-action"
          key={client.id}
        >
          {client.name}
        </Link>
      ))}
    </ul>
  );
};

export default Dashboard;
