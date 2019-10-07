import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState([{ id: 'Teste 1', name: 'Testando' }]);

  return (
    <ul className="list-group">
      {users.map(user => (
        <Link
          to="/"
          className="list-group-item list-group-item-action"
          key={user.id}
        >
          {user.name}
        </Link>
      ))}
    </ul>
  );
};

export default Dashboard;
